<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Booking;
use AppBundle\Repository\BookingRepository;
use AppBundle\Repository\VenueRepository;
use Doctrine\ORM\EntityRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Config\Tests\Util\Validator;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class BookingController extends AbstractApiController
{
    protected $entity = 'AppBundle:Booking';

    protected $orderBy = [
        'subscribeDate' => 'desc'
    ];

    /**
     * List of fields allowed to be set during the creation of a booking
     * @var array
     */
    protected $createFields = [
        'firstName',
        'lastName',
        'email',
        'phone',
        'nbExpected',
        'subscribeDate',
        'event',
    ];

    /**
     * List of fields allowed to be set during the update of a booking
     * @var array
     */
    protected $updateFields = [
        'approved',
        'cancelled'
    ];

    /**
     * @param int $id
     * @Route("/api/bookings/get/{id}", name="api_get_bookings", defaults={"id" = null})
     * @Method({"GET"})
     * @return JsonResponse
     */
    public function getAction($id = null)
    {
        return parent::getAction($id);
    }

    /**
     * @param int $id
     * @Route("/api/bookings/getByEvent/{id}", name="api_get_bookings_by_event", defaults={"id" = null})
     * @Method({"GET"})
     * @return JsonResponse
     */
    public function getByEventAction($id = null)
    {
        $subscriptions = $this->getRepository()->findBy(['event' => $id], $this->orderBy);
        return $this->json($subscriptions);
    }

    /**
     * @Route("/api/bookings/new/", name="api_new_booking")
     * @Method({"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function newAction(Request $request) {
        return parent::newAction($request);
    }

    /**
     * @Route("/api/bookings/delete/{id}", name="api_delete_booking")
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
            case 'event':
                $value = $this->getDoctrine()->getRepository('AppBundle:Event')->find($value);
                break;
            case 'subscribeDate':
                $value = new \DateTime();
                break;
        }
        return $value;
    }
}
