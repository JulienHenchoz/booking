<?php
namespace AppBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * Class EventRepository
 * @package AppBundle\Repository
 */
class EventRepository extends EntityRepository
{
    /**
     * Returns the list of the incoming events
     * @return array
     */
    public function findNext()
    {
        $qb = $this->createQueryBuilder('e');

        $qb->where('e.startDate > :now')
            ->setParameter('now', date('Y-m-d'))
            ->orderBy('e.startDate', 'DESC');

        return $qb->getQuery()
            ->getResult();
    }

    /**
     * Returns the list of the past events
     * @return array
     */
    public function findPast()
    {
        $qb = $this->createQueryBuilder('e');

        $qb->where('e.startDate < :now')
            ->setParameter('now', date('Y-m-d'))
            ->orderBy('e.startDate', 'DESC');

        return $qb->getQuery()
            ->getResult();
    }
}