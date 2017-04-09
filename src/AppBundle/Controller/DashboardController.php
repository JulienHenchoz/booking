<?php

namespace AppBundle\Controller;

use Doctrine\ORM\EntityRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class DashboardController
 * @package AppBundle\Controller
 */
class DashboardController extends Controller
{
    /**
     * @Route("/api/dashboard/get/", name="api_dashboard_get")
     * @Method({"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function getAction()
    {
        $output = $this->get('dashboard')->getData();

        return $this->json($output);
    }
}
