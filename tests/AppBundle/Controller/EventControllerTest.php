<?php

namespace Tests\AppBundle\Controller;

use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class EventControllerTest
 * @package Tests\AppBundle\Controller
 */
class EventControllerTest extends WebTestCase
{
    public function setUp() {
        self::bootKernel();
    }


    public function testGet()
    {
        $client = static::createClient();

        // Create a new record
        $client->request('POST', '/api/venues/new/', [
            'name' => 'my venue',
            'address' => '5 route du test',
            'phone' => '12345678',
            'website' => 'http://www.website.com/',
            'latitude' => '1.12345',
            'longitude' => '1.12345',
            'capacity' => 50,
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $venueId = $decoded['object']['id'];

        $client->request('POST', '/api/events/new/', [
            'name' => 'my event',
            'startDate' => '2017-03-03',
            'venue' => $venueId
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $recordId = $decoded['object']['id'];

        $crawler = $client->request('GET', '/api/events/get');

        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());

        $decoded = json_decode($client->getResponse()->getContent(), true);

        $this->assertTrue(is_array($decoded), 'Invalid JSON returned');
        $this->assertNotEmpty($decoded, 'Returned data is empty');
        $this->assertNotEmpty($decoded[0]['id'], 'Missing ID field in result');

        $this->assertArrayNotHasKey('bookings', $decoded[0], 'Bookings property should not be visible in public');
        $this->assertArrayNotHasKey('totalExpected', $decoded[0]);

        $client->request('DELETE', '/api/events/delete/' . $recordId);
        $client->request('DELETE', '/api/venues/delete/' . $venueId);
    }

    public function testGetNextEvents()
    {
        $client = static::createClient();

        // Create a new record
        $client->request('POST', '/api/venues/new/', [
            'name' => 'my venue',
            'address' => '5 route du test',
            'phone' => '12345678',
            'website' => 'http://www.website.com/',
            'latitude' => '1.12345',
            'longitude' => '1.12345',
            'capacity' => 50,
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $venueId = $decoded['object']['id'];

        // Create two events, only one should be returned
        $client->request('POST', '/api/events/new/', [
            'name' => 'my event next',
            'startDate' => date('Y-m-d', strtotime('next week')),
            'venue' => $venueId
        ]);

        $client->request('POST', '/api/events/new/', [
            'name' => 'my event past',
            'startDate' => date('Y-m-d', strtotime('last week')),
            'venue' => $venueId
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $recordId = $decoded['object']['id'];

        $crawler = $client->request('GET', '/api/events/getNext');

        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());

        $decoded = json_decode($client->getResponse()->getContent(), true);

        $this->assertTrue(is_array($decoded), 'Invalid JSON returned');
        $this->assertNotEmpty($decoded, 'Returned data is empty');
        $this->assertEquals('my event next', $decoded[0]['name']);
        $this->assertNotEmpty($decoded[0]['id'], 'Missing ID field in result');


        $this->assertArrayNotHasKey('bookings', $decoded[0], 'Bookings property should not be visible in public');
        $this->assertArrayNotHasKey('totalExpected', $decoded[0]);

        $client->request('DELETE', '/api/events/delete/' . $recordId);
        $client->request('DELETE', '/api/venues/delete/' . $venueId);
    }

    public function testGetPastEvents()
    {
        $client = static::createClient();

        // Create a new record
        $client->request('POST', '/api/venues/new/', [
            'name' => 'my venue',
            'address' => '5 route du test',
            'phone' => '12345678',
            'website' => 'http://www.website.com/',
            'latitude' => '1.12345',
            'longitude' => '1.12345',
            'capacity' => 50,
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $venueId = $decoded['object']['id'];

        // Create two events, only one should be returned
        $client->request('POST', '/api/events/new/', [
            'name' => 'my event next',
            'startDate' => date('Y-m-d', strtotime('next week')),
            'venue' => $venueId
        ]);

        $client->request('POST', '/api/events/new/', [
            'name' => 'my event past',
            'startDate' => date('Y-m-d', strtotime('last week')),
            'venue' => $venueId
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $recordId = $decoded['object']['id'];

        $crawler = $client->request('GET', '/api/events/getPast');

        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());

        $decoded = json_decode($client->getResponse()->getContent(), true);

        $this->assertTrue(is_array($decoded), 'Invalid JSON returned');
        $this->assertNotEmpty($decoded, 'Returned data is empty');
        $this->assertEquals('my event past', $decoded[0]['name']);
        $this->assertNotEmpty($decoded[0]['id'], 'Missing ID field in result');


        $this->assertArrayNotHasKey('bookings', $decoded[0], 'Bookings property should not be visible in public');
        $this->assertArrayNotHasKey('totalExpected', $decoded[0]);

        $client->request('DELETE', '/api/events/delete/' . $recordId);
        $client->request('DELETE', '/api/venues/delete/' . $venueId);
    }

    public function testNewWithInvalidData() {
        $client = static::createClient();

        $client->request('POST', '/api/events/new/', ['haha']);

        $decoded = json_decode($client->getResponse()->getContent(), true);

        $this->assertTrue(is_array($decoded), 'Invalid JSON returned');

        $this->assertArrayHasKey('success', $decoded, 'Success property should be defined');
        $this->assertFalse($decoded['success'], 'Success property should be false');
        $this->assertNotEmpty($decoded['errors'], 'There should be at least one error in the response');
        $this->assertSame(Response::HTTP_BAD_REQUEST, $client->getResponse()->getStatusCode(), 'Status code should be 400');
    }

    public function testNew() {
        $client = static::createClient();

        // Create a new record
        $client->request('POST', '/api/venues/new/', [
            'name' => 'my venue',
            'address' => '5 route du test',
            'phone' => '12345678',
            'website' => 'http://www.website.com/',
            'latitude' => '1.12345',
            'longitude' => '1.12345',
            'capacity' => 50,
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $venueId = $decoded['object']['id'];

        $client->request('POST', '/api/events/new/', [
            'name' => 'my event',
            'event' => 1,
            'startDate' => '2017-03-03',
            'venue' => $venueId
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);

        $this->assertTrue(is_array($decoded), 'Invalid JSON returned');

        $this->assertArrayHasKey('object', $decoded, 'Inserted object should be returned in "object"');
        $this->assertNotEmpty($decoded['object'], 'Inserted object should be returned in "object"');
        $this->assertNotEmpty($decoded['object']['startDate'], 'StartDate should not be empty');
        $this->assertArrayHasKey('success', $decoded, 'Missing success property in response');
        $this->assertTrue($decoded['success'], 'Property success should be true in response');
        $this->assertArrayNotHasKey('errors', $decoded, 'There should be no errors in response');
        $this->assertSame(Response::HTTP_OK, $client->getResponse()->getStatusCode(), 'Response code should be 200');

        $eventId = $decoded['object']['id'];
        $client->request('DELETE', '/api/events/delete/' . $eventId);
        $client->request('DELETE', '/api/venues/delete/' . $venueId);
    }

    public function testDeleteUnknownObject() {
        $client = static::createClient();

        $client->request('DELETE', '/api/events/delete/999999');

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

        // Create a new record
        $client->request('POST', '/api/venues/new/', [
            'name' => 'my venue',
            'address' => '5 route du test',
            'phone' => '12345678',
            'website' => 'http://www.website.com/',
            'latitude' => '1.12345',
            'longitude' => '1.12345',
            'capacity' => 50,
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $venueId = $decoded['object']['id'];

        // Create a record
        $client->request('POST', '/api/events/new/', [
            'name' => 'my event',
            'event' => 1,
            'startDate' => '2017-03-03',
            'venue' => $venueId
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $recordId = $decoded['object']['id'];
        // And delete it

        $client->request('DELETE', '/api/events/delete/' . $recordId);

        $this->assertArrayHasKey('success', $decoded, 'Missing success property in response');
        $this->assertTrue($decoded['success'], 'Property success should be true in response');
        $this->assertArrayNotHasKey('errors', $decoded, 'There should be no errors in response');
        $this->assertSame(Response::HTTP_OK, $client->getResponse()->getStatusCode(), 'Response code should be 200');

        $eventId = $decoded['object']['id'];
        $client->request('DELETE', '/api/events/delete/' . $eventId);
        $client->request('DELETE', '/api/venues/delete/' . $venueId);
    }

    public function testUpdateWithUnexistingRecord() {
        $client = static::createClient();

        // And update it
        $client->request('POST', '/api/events/edit/999999', [
            'name' => 'hello',
            'capacity' => 50
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);

        $this->assertTrue(is_array($decoded), 'Invalid JSON returned');
        $this->assertArrayHasKey('success', $decoded, 'Success property should be defined');
        $this->assertFalse($decoded['success'], 'Success property should be false');
        $this->assertArrayHasKey('errors', $decoded);
        $this->assertNotEmpty($decoded['errors']);
        $this->assertSame(Response::HTTP_BAD_REQUEST, $client->getResponse()->getStatusCode());
    }

    public function testUpdateWithInvalidData() {
        $client = static::createClient();

        // Create a new record
        $client->request('POST', '/api/venues/new/', [
            'name' => 'my venue',
            'address' => '5 route du test',
            'phone' => '12345678',
            'website' => 'http://www.website.com/',
            'latitude' => '1.12345',
            'longitude' => '1.12345',
            'capacity' => 50,
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $venueId = $decoded['object']['id'];


        // Create a record
        $client->request('POST', '/api/events/new/', [
            'name' => 'my event',
            'venue' => $venueId,
            'startDate' => '2017-03-03'
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $recordId = $decoded['object']['id'];

        // And update it
        $client->request('POST', '/api/events/edit/' . $recordId, [
            'name' => '',
            'capacity' => 0
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);

        $this->assertTrue(is_array($decoded), 'Invalid JSON returned');
        $this->assertArrayHasKey('success', $decoded, 'Success property should be defined');
        $this->assertFalse($decoded['success'], 'Success property should be false');
        $this->assertArrayHasKey('errors', $decoded);
        $this->assertNotEmpty($decoded['errors']);
        $this->assertSame(Response::HTTP_BAD_REQUEST, $client->getResponse()->getStatusCode());

        $client->request('DELETE', '/api/events/delete/' . $recordId);
        $client->request('DELETE', '/api/venues/delete/' . $venueId);
    }

    public function testUpdate() {
        $client = static::createClient();

        // Create a new record
        $client->request('POST', '/api/venues/new/', [
            'name' => 'my venue',
            'address' => '5 route du test',
            'phone' => '12345678',
            'website' => 'http://www.website.com/',
            'latitude' => '1.12345',
            'longitude' => '1.12345',
            'capacity' => 50,
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $venueId = $decoded['object']['id'];

        // Create a record
        $client->request('POST', '/api/events/new/', [
            'name' => 'my event',
            'venue' => $venueId,
            'startDate' => '2017-03-03'
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);
        $recordId = $decoded['object']['id'];

        // And update it
        $client->request('POST', '/api/events/edit/' . $recordId, [
            'name' => 'my event modified',
        ]);

        $decoded = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey('object', $decoded, 'Inserted object should be returned in "object"');
        $this->assertNotEmpty($decoded['object'], 'Inserted object should be returned in "object"');
        $this->assertSame('my event modified', $decoded['object']['name']);
        $this->assertArrayHasKey('success', $decoded, 'Missing success property in response');
        $this->assertTrue($decoded['success'], 'Property success should be true in response');
        $this->assertArrayNotHasKey('errors', $decoded, 'There should be no errors in response');
        $this->assertSame(Response::HTTP_OK, $client->getResponse()->getStatusCode(), 'Response code should be 200');

        $eventId = $decoded['object']['id'];
        $client->request('DELETE', '/api/events/delete/' . $eventId);
        $client->request('DELETE', '/api/venues/delete/' . $venueId);
    }

    /**
     * Close doctrine connections to avoid having a 'too many connections'
     * message when running many tests
     */
    public function tearDown(){

        parent::tearDown();
    }
}
