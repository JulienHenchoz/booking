<?php

namespace FrontEndBundle\Controller;

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
use Symfony\Component\HttpFoundation\Response;

/**
 * Class BookingController
 * @package AppBundle\Controller
 */
class DefaultController extends Controller
{
    /**
     * @Route("/", name="index")
     * @return Response
     */
    public function indexAction($id = null)
    {
        return $this->render('FrontEndBundle:Default:index.html.twig');
    }
}
