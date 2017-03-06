<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Booking;
use AppBundle\Repository\BookingRepository;
use AppBundle\Repository\EventRepository;
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
     * @return JsonResponse
     */
    public function getAction($id = null)
    {
        return parent::getAction($id);
    }

    /**
     * Create a booking
     * @Route("/api/bookings/create/", name="api_create_booking")
     * @Method({"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function createAction(Request $request)
    {
        /** @var EventRepository $eventRepository */
        $eventRepository = $this->getDoctrine()->getRepository('AppBundle:Event');
        $em = $this->getDoctrine()->getManager();
        $response = new JsonResponse();

        /** @var Booking $booking */
        $booking = $this->hydrate(new Booking(), $request);

        /** @var Validator $validator */
        $validator = $this->get('validator');
        $errors = $validator->validate($booking);

        if (count($errors) == 0) {
            $event = $eventRepository->findOneBy(['id' => (int)$request->get('event')]);
            if ($event) {
                $booking->setEvent($event);
                $booking->setSubscribeDate(new \DateTime());
                $em->persist($booking);
                $em->flush();

                $response->setStatusCode(JsonResponse::HTTP_OK)
                    ->setData(['success' => true]);
            } else {
                $response->setStatusCode(JsonResponse::HTTP_BAD_REQUEST)
                    ->setData(self::$messages['invalid_event']);
            }
        } else {
            $response->setData($errors->__toString())
                ->setStatusCode(JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $response;
    }
}
