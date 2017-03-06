<?php

namespace AppBundle\Controller;

use AppBundle\Repository\VenueRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

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
        /** @var VenueRepository $repository */
        $repository = $this->getDoctrine()->getRepository($this->entity);

        if (is_null($id)) {
            $output = $repository->findBy([], $this->orderBy);
        } else {
            $output = $repository->findOneBy(['id' => (int)$id]);
        }

        return $this->json($output);
    }

    /**
     * @param mixed $object
     * @param Request $request
     * @return Object
     */
    public function hydrate($object, Request $request)
    {
        $parameters = $request->request->all();

        if (is_array($parameters)) {
            // Read the request and hydrate the Booking with the POST parameters
            foreach ($this->createFields as $field) {
                $setter = 'set' . ucfirst($field);
                $value = isset($parameters[$field]) ? $parameters[$field] : '';
                if (method_exists($object, $setter)) {
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
        $encoder = new JsonEncoder();
        $normalizer = new ObjectNormalizer();

        // Handle circular references by returning only the name of the record
        $normalizer->setCircularReferenceHandler(function ($object) {
            return method_exists($object, 'getLabel') ? $object->getLabel() : '';
        });
        $serializer = new Serializer(array($normalizer), array($encoder));
        return new JsonResponse($serializer->serialize($data, 'json'), $status, $headers, true);
    }

}
