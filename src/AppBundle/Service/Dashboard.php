<?php

namespace AppBundle\Service;

use AppBundle\Controller\AbstractApiController;
use AppBundle\Entity\Event;
use AppBundle\Repository\BookingRepository;
use AppBundle\Repository\EventRepository;
use Doctrine\Bundle\DoctrineBundle\Registry;
use Doctrine\ORM\EntityManager;

class Dashboard
{
    protected $em;

    protected $nextEvents = null;


    public function __construct(Registry $em)
    {
        $this->em = $em;
    }

    /**
     * @return array
     */
    public function getData()
    {
        /** @var EventRepository $eventRepository */
        $eventRepository = $this->em->getRepository('AppBundle:Event');
        $this->nextEvents = $eventRepository->findNext();

        return [
            'incomingEvents' => $this->getIncomingEventsCount(),
            'totalBookings' => $this->getTotalBookings(),
            'totalPersons' => $this->getTotalPersons(),
            'averageFillingPercentage' => $this->getAverageFillingPercentage(),
            'latestBookings' => $this->getLatestBookings()
        ];
    }

    /**
     * @return int
     */
    public function getIncomingEventsCount()
    {

        return count($this->nextEvents);
    }

    /**
     * @return int
     */
    public function getTotalBookings()
    {
        $totalBookings = 0;
        /** @var Event $nextEvent */
        foreach ($this->nextEvents as $nextEvent) {
            $totalBookings += $nextEvent->getBookingsCount();
        }

        return $totalBookings;
    }

    /**
     * @return array
     */
    public function getLatestBookings()
    {
        /** @var BookingRepository $bookingsRepository */
        $bookingsRepository = $this->em->getRepository('AppBundle:Booking');

        return AbstractApiController::getSerializer()->normalize(
            $bookingsRepository->findLatest(),
            'json',
            [
                'groups' => ['public']
            ]
        );
    }

    /**
     * @return int
     */
    public function getTotalPersons()
    {
        $totalPersons = 0;
        /** @var Event $nextEvent */
        foreach ($this->nextEvents as $nextEvent) {
            $totalPersons += $nextEvent->getTotalExpected();
        }

        return $totalPersons;
    }

    /**
     * @return int
     */
    public function getAverageFillingPercentage()
    {
        $percentages = [];
        /** @var Event $nextEvent */
        foreach ($this->nextEvents as $nextEvent) {
            $percentages[] = $nextEvent->getOccupancyPercentage();
        }

        return count($percentages) > 0 ? (int)(array_sum($percentages) / count($percentages)) : 0;
    }
}
