<?php

namespace AppBundle\Entity;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Booking
 *
 * @ORM\Table(name="booking")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\BookingRepository")
 */
class Booking
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
     * @ORM\Column(name="subscribe_date", type="datetime")
     */
    private $subscribeDate;

    /**
     * @var string
     *
     * @Assert\NotBlank()
     * @ORM\Column(name="first_name", type="string")
     */
    private $firstName;

    /**
     * @var string
     *
     * @Assert\NotBlank()
     * @ORM\Column(name="last_name", type="string")
     */
    private $lastName;

    /**
     * @var string
     *
     * @Assert\NotBlank()
     * @Assert\Email(
     *     message = "The email '{{ value }}' is not a valid email.",
     *     checkMX = true
     * )
     * @ORM\Column(name="email", type="string")
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="phone", type="string")
     */
    private $phone;

    /**
     * @var int
     *
     * @Assert\GreaterThan(
     *     value = 0,
     *     message = "The bumber of expected persons must be at least one"
     * )
     * @ORM\Column(name="nb_expected", type="integer")
     */
    private $nbExpected;

    /**
     * @var bool
     *
     * @ORM\Column(name="approved", type="boolean")
     */
    private $approved = false;

    /**
     *
     * @ORM\ManyToOne(targetEntity="Event")
     * @ORM\JoinColumn(name="event_id", referencedColumnName="id")
     */
    private $event;

    /**
     * @var bool
     *
     * @ORM\Column(name="cancelled", type="boolean")
     */
    private $cancelled = false;

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
    public function getSubscribeDate()
    {
        return $this->subscribeDate;
    }

    /**
     * @param \DateTime $subscribeDate
     */
    public function setSubscribeDate($subscribeDate)
    {
        $this->subscribeDate = $subscribeDate;
    }

    /**
     * @return string
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * @param string $firstName
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
    }

    /**
     * @return string
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * @param string $lastName
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;
    }

    /**
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param string $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * @param string $phone
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    /**
     * @return int
     */
    public function getNbExpected()
    {
        return $this->nbExpected;
    }

    /**
     * @param int $nbExpected
     */
    public function setNbExpected($nbExpected)
    {
        $this->nbExpected = $nbExpected;
    }

    /**
     * @return bool
     */
    public function isApproved()
    {
        return $this->approved;
    }

    /**
     * @param bool $approved
     */
    public function setApproved($approved)
    {
        $this->approved = $approved;
    }

    /**
     * @return mixed
     */
    public function getEvent()
    {
        return $this->event;
    }

    /**
     * @param mixed $event
     */
    public function setEvent($event)
    {
        $this->event = $event;
    }

    /**
     * @return bool
     */
    public function isCancelled()
    {
        return $this->cancelled;
    }

    /**
     * @param bool $cancelled
     */
    public function setCancelled($cancelled)
    {
        $this->cancelled = $cancelled;
    }

    /**
     * Return the publicly visible description for this entity
     * @return string
     */
    public function getLabel() {
        return sprintf('%s %s - %d personnes - %s',
            $this->getFirstName(),
            $this->getLastName(),
            $this->getNbExpected(),
            $this->getEvent()->getName()
        );
    }
}
