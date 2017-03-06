<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping as ORM;

/**
 * Event
 *
 * @ORM\Table(name="event")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\EventRepository")
 */
class Event
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="start_date", type="integer")
     */
    private $startDate;


    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string")
     */
    private $name;

    /**
     *
     * @ORM\ManyToOne(targetEntity="Venue")
     * @ORM\JoinColumn(name="venue_id", referencedColumnName="id")
     */
    private $venue;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Booking", mappedBy="event", cascade={"remove"})
     * @ORM\JoinColumn(name="event_id", referencedColumnName="id", onDelete="CASCADE")
     */
    protected $bookings;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return \DateTime
     */
    public function getStartDate()
    {
        return $this->startDate;
    }

    /**
     * @param \DateTime $startDate
     */
    public function setStartDate($startDate)
    {
        $this->startDate = $startDate;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getVenue()
    {
        return $this->venue;
    }

    /**
     * @param mixed $venue
     */
    public function setVenue($venue)
    {
        $this->venue = $venue;
    }

    /**
     * @return ArrayCollection
     */
    public function getBookings()
    {
        return $this->bookings;
    }

    /**
     * @param ArrayCollection $bookings
     */
    public function setBookings($bookings)
    {
        $this->bookings = $bookings;
    }


    /**
     * Returns the total number of persons expected at this event
     * @return integer
     */
    public function getTotalExpected() {
        $nbPersons = 0;
        $bookings = $this->getBookings();

        /** @var Booking $booking */
        foreach ($bookings as $booking) {
            $nbPersons += $booking->getNbExpected();
        }
        return $nbPersons;
    }


    /**
     * Return the publicly visible description for this entity
     * @return string
     */
    public function getLabel() {
        return $this->getName();
    }
}