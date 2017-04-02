<?php

namespace AppBundle\Entity;
use Symfony\Component\Serializer\Annotation\Groups;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Venue
 *
 * @ORM\Table(name="venue")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\VenueRepository")
 */
class Venue
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
     * @ORM\Column(name="address", type="string")
     * @Groups({"public", "authenticated"})
     * @Assert\NotBlank()
     */
    private $address;

    /**
     * @var string
     *
     * @ORM\Column(name="phone", type="string")
     * @Groups({"public", "authenticated"})
     * @Assert\NotBlank()
     */
    private $phone;

    /**
     * @var string
     *
     * @ORM\Column(name="website", type="string", nullable=true)
     * @Groups({"public", "authenticated"})
     * @Assert\Url()
     */
    private $website;

    /**
     * @var string
     *
     * @ORM\Column(name="latitude", type="string", nullable=true)
     * @Groups({"public", "authenticated"})
     */
    private $latitude;

    /**
     * @var string
     *
     * @ORM\Column(name="longitude", type="string", nullable=true)
     * @Groups({"public", "authenticated"})
     */
    private $longitude;

    /**
     * @var int
     *
     * @ORM\Column(name="capacity", type="integer")
     * @Groups({"public", "authenticated"})
     * @Assert\GreaterThan(1)
     */
    private $capacity = 0;

    /**
     * @var string
     *
     * @ORM\Column(name="image", type="string", nullable=true)
     * @Groups({"public", "authenticated"})
     */
    private $image = '';


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
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * @param string $address
     */
    public function setAddress($address)
    {
        $this->address = $address;
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
     * @return string
     */
    public function getWebsite()
    {
        return $this->website;
    }

    /**
     * @param string $website
     */
    public function setWebsite($website)
    {
        $this->website = $website;
    }

    /**
     * @return string
     */
    public function getLatitude()
    {
        return $this->latitude;
    }

    /**
     * @param string $latitude
     */
    public function setLatitude($latitude)
    {
        $this->latitude = $latitude;
    }

    /**
     * @return string
     */
    public function getLongitude()
    {
        return $this->longitude;
    }

    /**
     * @param string $longitude
     */
    public function setLongitude($longitude)
    {
        $this->longitude = $longitude;
    }

    /**
     * @return int
     */
    public function getCapacity()
    {
        return $this->capacity;
    }

    /**
     * @param int $capacity
     */
    public function setCapacity($capacity)
    {
        $this->capacity = $capacity;
    }

    /**
     * Return the publicly visible description for this entity
     * @return string
     */
    public function getLabel() {
        return $this->getName();
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
