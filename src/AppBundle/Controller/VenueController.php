<?php

namespace AppBundle\Controller;

use AppBundle\Repository\VenueRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class VenueController extends AbstractApiController
{
    protected $entity = 'AppBundle:Venue';

    protected $orderBy = [
        'name' => 'asc'
    ];

    /**
     * @param int $id
     * @Route("/venues/get/{id}", name="get_venues", defaults={"id" = null})
     * @return JsonResponse
     */
    public function getAction($id = null)
    {
        return parent::getAction($id);
    }
}
