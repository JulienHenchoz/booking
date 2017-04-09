<?php
namespace AppBundle\Repository;

use Doctrine\ORM\EntityRepository;

class BookingRepository extends EntityRepository
{
    const LATEST_NB_RESULTS = 5;
    /**
     * Returns the list of the latest bookings
     * @return array
     */
    public function findLatest()
    {
        $qb = $this->createQueryBuilder('b');

        $qb->orderBy('b.subscribeDate', 'DESC')
            ->setMaxResults(self::LATEST_NB_RESULTS);

        return $qb->getQuery()
            ->getResult();
    }
}
