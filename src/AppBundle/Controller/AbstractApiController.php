<?php

namespace AppBundle\Controller;

use Doctrine\Common\Annotations\AnnotationReader;
use Doctrine\Common\Persistence\ObjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\ConstraintViolationList;
use Symfony\Component\Validator\ConstraintViolationListInterface;
use Symfony\Component\Validator\Validator\RecursiveValidator;

/**
 * Class AbstractApiController
 * @package AppBundle\Controller
 */
abstract class AbstractApiController extends Controller
{
    protected static $messages = [
        'invalid_event' => 'This event does not exist.',
    ];

    protected $entity = null;

    protected $orderBy = [];

    protected $createFields = [];

    protected $updateFields = [];

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function getAction($id = null)
    {
        if (is_null($id)) {
            $output = $this->getRepository()->findBy([], $this->orderBy);
        } else {
            $output = $this->getRepository()->findOneBy(['id' => (int)$id]);
        }

        return $this->json($output);
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function deleteAction($id)
    {
        $object = $this->getRepository()->find($id);
        if (!$object) {
            $httpCode = Response::HTTP_BAD_REQUEST;
            $resultData = [
                'success' => false,
                'errors' => 'Record does not exist.'
            ];
        } else {
            $httpCode = Response::HTTP_OK;
            $this->removeObject($object);
            $resultData = [
                'success' => true
            ];
        }

        return $this->json($resultData, $httpCode);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function newAction(Request $request)
    {
        /** @var RecursiveValidator $validator */
        $validator = $this->get('validator');

        $className = $this->getEntityClass();
        $newObject = new $className();

        /**
         * Browse each createField to build the new object
         */
        $newObject = $this->hydrate($newObject, $this->createFields, $request);

        $statusCode = Response::HTTP_OK;

        // If the object validation returned some errors, format them into an array and returns then using json
        $validationResult = $validator->validate($newObject);
        $errors = $this->getErrors($validationResult);
        if (!empty($errors)) {
            $resultData = [
                'success' => false,
                'errors' => $errors
            ];
            $statusCode = Response::HTTP_BAD_REQUEST;
        } else {
            // If the validation succeeded, persist the new object
            $this->persistObject($newObject);
            $resultData = [
                'success' => true,
                'object' => $this->normalize($newObject)
            ];
        }

        return new JsonResponse($resultData, $statusCode);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function editAction($id, Request $request)
    {
        $object = $this->getRepository()->find($id);
        if ($object) {

            /** @var RecursiveValidator $validator */
            $validator = $this->get('validator');

            /**
             * Browse each createField to build the new object
             */
            $object = $this->hydrate($object, $this->updateFields, $request);

            $statusCode = Response::HTTP_OK;

            // If the object validation returned some errors, format them into an array and returns then using json
            $validationResult = $validator->validate($object);
            $errors = $this->getErrors($validationResult);
            if (!empty($errors)) {
                $resultData = [
                    'success' => false,
                    'errors' => $errors
                ];
                $statusCode = Response::HTTP_BAD_REQUEST;
            } else {
                // If the validation succeeded, persist the new object
                $this->persistObject($object);
                $resultData = [
                    'success' => true,
                    'object' => $this->normalize($object)
                ];
            }
        } else {
            $statusCode = Response::HTTP_BAD_REQUEST;

            $resultData = [
                'success' => false,
                'errors' => ['This record does not exist.']
            ];
        }
        return new JsonResponse($resultData, $statusCode);
    }


    /**
     * Applies any treatment to the given value before returning it
     * @param $fieldName
     * @param $value
     * @return mixed
     */
    public function preProcessField($fieldName, $value)
    {
        return $value;
    }

    /**
     * @param ConstraintViolationListInterface $errors
     * @return array
     */
    public function getErrors($errors)
    {
        $errorsArray = [];
        /** @var ConstraintViolation $error */
        foreach ($errors as $error) {
            $errorsArray[$error->getPropertyPath()] = $error->getMessage();
        }
        return $errorsArray;
    }

    /**
     * @param mixed $object
     * @param array $fields
     * @param Request $request
     * @return Object
     */
    public function hydrate($object, $fields, Request $request)
    {
        $data = $request->request->all();

        foreach ($fields as $fieldName) {
            if (isset($data[$fieldName])) {
                $value = $data[$fieldName];
                $setter = 'set' . ucfirst($fieldName);

                if (method_exists($object, $setter)) {
                    $value = $this->preProcessField($fieldName, $value);
                    $object->$setter($value);
                }
            }
        }
        return $object;
    }

    /**
     * Returns a JsonResponse that using the serializer component
     *
     * @param mixed $data The response data
     * @param int $status The status code to use for the Response
     * @param array $headers Array of extra headers to add
     * @param array $context Context to pass to serializer when using serializer component
     *
     * @return JsonResponse
     */
    protected function json($data, $status = 200, $headers = array(), $context = array())
    {
        // TODO : Add used authentication to decide which group to display : public or authenticated
        return new JsonResponse(
            self::getSerializer()->serialize(
                $data,
                'json',
                [
                    'groups' => ['public']
                ]
            ),
            $status,
            $headers,
            true
        );
    }

    /**
     * @param $object
     * @return array|object|\Symfony\Component\Serializer\Normalizer\scalar
     */
    public function normalize($object)
    {
        // TODO : Add used authentication to decide which group to display : public or authenticated
        return self::getSerializer()->normalize(
            $object,
            'json',
            [
                'groups' => ['public']
            ]
        );
    }

    public static function getSerializer()
    {
        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        $encoder = new JsonEncoder();
        $normalizer = new ObjectNormalizer($classMetadataFactory);

        // Handle datetime formatting
        $callback = function ($dateTime) {
            return $dateTime instanceof \DateTime
                ? $dateTime->format(\DateTime::ISO8601)
                : '';
        };

        $normalizer->setCallbacks(array(
            'startDate' => $callback,
            'subscribeDate' => $callback,
        ));

        // Handle circular references by returning only the name of the record
        $normalizer->setCircularReferenceHandler(function ($object) {
            return method_exists($object, 'getLabel') ? $object->getLabel() : '';
        });
        return new Serializer(array($normalizer), array($encoder));
    }

    /**
     * Returns the namespaced class name for the current entity
     * @return string
     */
    public function getEntityClass()
    {
        $parts = explode(':', $this->entity);
        return $parts[0] . '\\' . 'Entity' . '\\' . $parts[1];
    }

    /**
     * @param Object $object
     */
    public function persistObject($object)
    {
        $em = $this->getDoctrine()->getManager();
        $em->persist($object);
        $em->flush();
    }

    /**
     * @param Object $object
     */
    public function removeObject($object)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($object);
        $em->flush();
    }

    /**
     * @return ObjectRepository
     */
    public function getRepository()
    {
        return $this->getDoctrine()->getRepository($this->entity);
    }
}
