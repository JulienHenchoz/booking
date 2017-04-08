<?php

namespace AppBundle\Entity;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;

/**
 * Booking
 *
 * @ORM\Table(name="booking")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\BookingRepository")
 * TODO : Define the public and authenticated properties
 */
class Booking
{
    /**
     * @var int
     * @Groups({"public", "authenticated"})
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="subscribe_date", type="datetime", nullable=true)
     * @Groups({"public", "authenticated"})
     * @Assert\Date()
     * @Assert\NotBlank()
     */
    private $subscribeDate;

    /**
     * @var string
     *
     * @Assert\NotBlank()
     * @ORM\Column(name="first_name", type="string", nullable=true)
     * @Groups({"public", "authenticated"})
     */
    private $firstName;

    /**
     * @var string
     *
     * @Assert\NotBlank()
     * @ORM\Column(name="last_name", type="string", nullable=true)
     * @Groups({"public", "authenticated"})
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
     * @ORM\Column(name="email", type="string", nullable=true)
     * @Groups({"public", "authenticated"})
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="phone", type="string", nullable=true)
     * @Groups({"public", "authenticated"})
     */
    private $phone;

    /**
     * @var int
     *
     * @Assert\GreaterThan(
     *     value = 0,
     *     message = "The number of expected persons must be at least one"
     * )
     * @Assert\NotBlank()
     * @ORM\Column(name="nb_expected", type="integer", nullable=true)
     * @Groups({"public", "authenticated"})
     */
    private $nbExpected;

    /**
     *
     * @ORM\ManyToOne(targetEntity="Event")
     * @ORM\JoinColumn(name="event_id", referencedColumnName="id")
     * @Groups({"public", "authenticated"})
     * @Assert\NotBlank()
     */
    private $event;

    /**
     * @var bool
     *
     * @ORM\Column(name="subscribed_to_newsletter", type="boolean", nullable=true)
     * @Groups({"public", "authenticated"})
     */
    private $subscribedToNewsletter = false;

    /**
     * @var bool
     *
     * @ORM\Column(name="showed_up", type="boolean", nullable=true)
     * @Groups({"public", "authenticated"})
     */
    private $showedUp = false;

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

    /**
     * @return bool
     */
    public function isSubscribedToNewsletter(): bool
    {
        return $this->subscribedToNewsletter;
    }

    /**
     * @param bool $subscribedToNewsletter
     */
    public function setSubscribedToNewsletter(bool $subscribedToNewsletter)
    {
        $this->subscribedToNewsletter = $subscribedToNewsletter;
    }

    /**
     * @return bool
     */
    public function isShowedUp(): bool
    {
        return $this->showedUp;
    }

    /**
     * @param bool $showedUp
     */
    public function setShowedUp(bool $showedUp)
    {
        $this->showedUp = $showedUp;
    }



}
