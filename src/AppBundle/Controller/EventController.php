<?php

namespace AppBundle\Controller;
use AppBundle\Entity\Event;
use AppBundle\Repository\EventRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use AppBundle\Repository\VenueRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Config\Tests\Util\Validator;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Validator\RecursiveValidator;

/**
 * Class EventController
 * @package AppBundle\Controller
 */
class EventController extends AbstractApiController
{
    protected $entity = 'AppBundle:Event';

    protected $orderBy = [
        'startDate' => 'asc'
    ];

    /**
     * List of fields allowed during create of a record
     * @var array
     */
    protected $createFields = [
        'name',
        'venue',
        'startDate',
        'description',
        'image',
    ];

    /**
     * List of fields allowed during create of a record
     * @var array
     */
    protected $updateFields = [
        'name',
        'venue',
        'startDate',
        'description',
        'image',
    ];

    /**
     * @param int $id
     * @Route("/api/events/get/{id}", name="api_get_events", defaults={"id" = null})
     * @Method({"GET"})
     * @return JsonResponse
     */
    public function getAction($id = null)
    {
        return parent::getAction($id);
    }

    /**
     * @Route("/api/events/getPast", name="api_get_past_events")
     * @Method({"GET"})
     * @return JsonResponse
     */
    public function getPastAction() {
        /** @var EventRepository $repository */
        $repository = $this->getRepository();
        return $this->json($repository->findPast());
    }

    /**
     * @Route("/api/events/getNext", name="api_get_next_events")
     * @Method({"GET"})
     * @return JsonResponse
     */
    public function getNextAction() {
        /** @var EventRepository $repository */
        $repository = $this->getRepository();
        return $this->json($repository->findNext());
    }

    /**
     * @Route("/api/events/new/", name="api_new_event")
     * @Method({"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function newAction(Request $request) {
        return parent::newAction($request);
    }

    /**
     * @Route("/api/events/edit/{id}", name="api_edit_event")
     * @Method({"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function editAction($id, Request $request) {
        return parent::editAction($id, $request);
    }

    /**
     * @Route("/api/events/delete/{id}", name="api_delete_event")
     * @Method({"DELETE"})
     * @param int $id
     * @return JsonResponse
     */
    public function deleteAction($id) {
        return parent::deleteAction($id);
    }

    /**
     * @param $fieldName
     * @param $value
     * @return mixed
     */
    public function preProcessField($fieldName, $value)
    {
        switch ($fieldName) {
            case 'venue':
                $value = $this->getDoctrine()->getRepository('AppBundle:Venue')->find($value);
                break;
            case 'startDate':
                $value = new \DateTime($value);
                break;
        }
        return $value;
    }
}
