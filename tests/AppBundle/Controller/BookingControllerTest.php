<?php

namespace Tests\AppBundle\Controller;

use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

class BookingControllerTest extends WebTestCase
{
    public function setUp() {
        self::bootKernel();
    }


    public function testGet()
    {
        $client = static::createClient();

        // Create a new record
        $client->request('POST', '/api/bookings/new/', [
            'firstName' => 'Julien',
            'lastName' => 'Henchoz',
            'email' => 'jhenchoz@cobweb.ch',
            'event' => 1,
            'nbExpected' => 2,
            'subscribeDate' => ''
        ]);

        $crawler = $client->request('GET', '/api/bookings/get');

        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());

        $decoded = json_decode($client->getResponse()->getContent(), true);

        $this->assertTrue(is_array($decoded), 'Invalid JSON returned');
        $this->assertNotEmpty($decoded, 'Returned data is empty');
        $this->assertArrayHasKey('id', $decoded[0], 'Missing ID field in result');
        $this->assertNotEmpty($decoded[0]['id'], 'Missing ID field in result');

        $this->assertArrayNotHasKey('bookings', $decoded[0], 'Bookings property should not be visible in public');
        $this->assertArrayNotHasKey('totalExpected', $decoded[0]);
    }

    public function testGetByEvent()
    {
        $client = static::createClient();

        // Create a new record
        $client->request('POST', '/api/bookings/new/', [
            'firstName' => 'Julien',
            'lastName' => 'Henchoz',
            'email' => 'jhenchoz@cobweb.ch',
            'event' => 1,
            'nbExpected' => 2,
            'subscribeDate' => ''
        ]);

        $crawler = $client->request('GET', '/api/bookings/getByEvent/1');

        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());

        $decoded = json_decode($client->getResponse()->getContent(), true);

        $this->assertTrue(is_array($decoded), 'Invalid JSON returned');
        $this->assertNotEmpty($decoded, 'Returned data is empty');
        $this->assertArrayHasKey('id', $decoded[0], 'Missing ID field in result');
        $this->assertNotEmpty($decoded[0]['id'], 'Missing ID field in result');

        $this->assertArrayNotHasKey('bookings', $decoded[0], 'Bookings property should not be visible in public');
        $this->assertArrayNotHasKey('totalExpected', $decoded[0]);
    }

    public function testNewWithInvalidData() {
        $client = static::createClient();

        $client->request('POST', '/api/bookings/new/', ['haha']);

        $decoded = json_decode($client->getResponse()->getContent(), true);

        $this->assertTrue(is_array($decoded), 'Invalid JSON returned');

        $this->assertArrayHasKey('errors', $decoded);
        $this->assertNotEmpty($decoded['errors']);
        $this->assertSame(Response::HTTP_BAD_REQUEST, $client->getResponse()->getStatusCode());
    }

    public function testNew() {
        $client = static::createClient();

        $client->request('POST', '/api/bookings/new/', [
            'firstName' => 'Julien',
            'lastName' => 'Henchoz',
            'email' => 'jhenchoz@cobweb.ch',
            'event' => 1,
            'nbExpected' => 2,
            'subscribeDate' => ''
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey('object', $decoded, 'Inserted object should be returned in "object"');
        $this->assertNotEmpty($decoded['object'], 'Inserted object should be returned in "object"');
        $this->assertArrayHasKey('success', $decoded, 'Missing success property in response');
        $this->assertTrue($decoded['success'], 'Property success should be true in response');
        $this->assertArrayNotHasKey('errors', $decoded, 'There should be no errors in response');
        $this->assertSame(Response::HTTP_OK, $client->getResponse()->getStatusCode(), 'Response code should be 200');
    }

    public function testDeleteUnknownObject() {
        $client = static::createClient();

        $client->request('DELETE', '/api/bookings/delete/9999');

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $this->assertTrue(is_array($decoded), 'Invalid JSON returned');
        $this->assertArrayHasKey('success', $decoded, 'Success property should be defined');
        $this->assertFalse($decoded['success'], 'Success property should be false');
        $this->assertArrayHasKey('errors', $decoded);
        $this->assertNotEmpty($decoded['errors']);
        $this->assertSame(Response::HTTP_BAD_REQUEST, $client->getResponse()->getStatusCode());
    }

    public function testDelete() {
        $client = static::createClient();

        // Create a record
        $client->request('POST', '/api/bookings/new/', [
            'firstName' => 'Julien',
            'lastName' => 'Henchoz',
            'email' => 'jhenchoz@cobweb.ch',
            'event' => 1,
            'nbExpected' => 2,
            'subscribeDate' => ''
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $recordId = $decoded['object']['id'];
        // And delete it

        $client->request('DELETE', '/api/bookings/delete/' . $recordId);

        $this->assertArrayHasKey('success', $decoded, 'Missing success property in response');
        $this->assertTrue($decoded['success'], 'Property success should be true in response');
        $this->assertArrayNotHasKey('errors', $decoded, 'There should be no errors in response');
        $this->assertSame(Response::HTTP_OK, $client->getResponse()->getStatusCode(), 'Response code should be 200');
    }


    /**
     * Close doctrine connections to avoid having a 'too many connections'
     * message when running many tests
     */
    public function tearDown(){

        parent::tearDown();
    }
}
