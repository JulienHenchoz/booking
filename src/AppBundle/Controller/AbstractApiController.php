<?php

namespace AppBundle\Controller;

use AppBundle\Repository\VenueRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

abstract class AbstractApiController extends Controller
{
    protected $entity = null;

    protected $orderBy = [];

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
        }
        else {
            $output = $repository->findOneBy(['id' => (int)$id]);
        }

        return $this->json($output);
    }
}
