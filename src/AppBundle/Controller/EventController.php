<?php

namespace AppBundle\Controller;

use AppBundle\Repository\VenueRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class EventController extends AbstractApiController
{
    protected $entity = 'AppBundle:Event';

    protected $orderBy = [
        'startDate' => 'asc'
    ];

    /**
     * @param int $id
     * @Route("/api/events/get/{id}", name="api_get_events", defaults={"id" = null})
     * @return JsonResponse
     */
    public function getAction($id = null)
    {
        return parent::getAction($id);
    }
}
