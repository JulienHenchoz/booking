<?php

namespace AppBundle\Controller;

use AppBundle\Repository\VenueRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class VenueController extends AbstractApiController
{
    protected $entity = 'AppBundle:Booking';

    protected $orderBy = [
        'subscribeDate' => 'desc'
    ];

    /**
     * @param int $id
     * @Route("/booking/get/{id}", name="get_bookings", defaults={"id" = null})
     * @return JsonResponse
     */
    public function getAction($id = null)
    {
        return parent::getAction($id);
    }
}
