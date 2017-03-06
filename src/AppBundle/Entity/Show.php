<?php

namespace AppBundle\Entity;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping as ORM;

/**
 * Show
 *
 * @ORM\Table(name="show")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ShowRepository")
 */
class Show
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
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

    /**
     * @var int
     *
     * @ORM\Column(name="update_time", type="integer")
     */
    private $updateTime;

    /**
     * @var int
     *
     * @ORM\Column(name="date_time", type="integer")
     */
    private $dateTime;

    /**
     * @var float
     *
     * @ORM\Column(name="nb_hours", type="float")
     */
    private $nbHours;

}