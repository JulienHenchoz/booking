<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Validator\Constraints as Assert;

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
     * @Groups({"public", "authenticated"})
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="start_date", type="date")
     * @Groups({"public", "authenticated"})
     * @Assert\Date()
     * @Assert\NotBlank()
     */
    private $startDate;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string")
     * @Groups({"public", "authenticated"})
     * @Assert\NotBlank()
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", nullable=true)
     * @Groups({"public", "authenticated"})
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="image", type="string", nullable=true)
     * @Groups({"public", "authenticated"})
     */
    private $image;

    /**
     *
     * @ORM\ManyToOne(targetEntity="Venue")
     * @ORM\JoinColumn(name="venue_id", referencedColumnName="id", onDelete="CASCADE")
     * @Groups({"public", "authenticated"})
     * @Assert\NotBlank()
     */
    private $venue;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Booking", mappedBy="event", cascade={"remove"})
     * @ORM\JoinColumn(name="event_id", referencedColumnName="id", onDelete="CASCADE")
     * @Groups({"authenticated"})
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
     * @Groups({"authenticated"})
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

    /**
     * @Groups({"public", "authenticated"})
     */
    public function getBookingsCount() {
        $bookingsCount = 0;
        if ($this->getBookings()) {
            $bookingsCount = $this->getBookings()->count();
        }
        return $bookingsCount;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description)
    {
        $this->description = $description;
    }

    /**
     * @return string
     */
    public function getImage(): string
    {
        return $this->image;
    }

    /**
     * @param string $image
     */
    public function setImage(string $image)
    {
        $this->image = $image;
    }


}
