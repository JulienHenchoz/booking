<?php

namespace AppBundle\Controller;

use AppBundle\Repository\VenueRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class VenueController
 * @package AppBundle\Controller
 */
class VenueController extends AbstractApiController
{
    protected $entity = 'AppBundle:Venue';

    protected $orderBy = [
        'name' => 'asc'
    ];

    /**
     * List of fields allowed during create of a record
     * @var array
     */
    protected $createFields = [
        'name',
        'address',
        'phone',
        'website',
        'latitude',
        'longitude',
        'capacity',
        'image',
    ];

    /**
     * List of fields allowed during the update of a record
     * @var array
     */
    protected $updateFields = [
        'name',
        'address',
        'phone',
        'website',
        'latitude',
        'longitude',
        'capacity',
        'image',
    ];

    /**
     * @param int $id
     * @Route("/api/venues/get/{id}", name="api_get_venues", defaults={"id" = null})
     * @Method({"GET"})
     * @return JsonResponse
     */
    public function getAction($id = null)
    {
        return parent::getAction($id);
    }

    /**
     * @Route("/api/venues/new/", name="api_new_venue")
     * @Method({"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function newAction(Request $request) {
        return parent::newAction($request);
    }

    /**
     * @Route("/api/venues/edit/{id}", name="api_edit_venue")
     * @Method({"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function editAction($id, Request $request) {
        return parent::editAction($id, $request);
    }

    /**
     * @Route("/api/venues/delete/{id}", name="api_delete_venue")
     * @Method({"DELETE"})
     * @param int $id
     * @return JsonResponse
     */
    public function deleteAction($id) {
        return parent::deleteAction($id);
    }

}
