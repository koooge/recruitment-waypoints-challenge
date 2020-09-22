import {solve} from '@/solver';
import type {Waypoint} from '@/types';

describe('solver', () => {
  test('empty waypoints', () => {
    const waypoints: Waypoint[] = [];

    const data = solve(waypoints);

    expect(data).toMatchObject({
      distanceSpeeding: 0,
      durationSpeeding: 0,
      totalDistance: 0,
      totalDuration: 0,
    });
  });

  test('1 waypoints', () => {
    const waypoints: Waypoint[] = [{
      "timestamp": "2016-06-21T12:00:00.000Z",
      "position": {
        "latitude": 59.334,
        "longitude": 18.0667
      },
      "speed": 6.3889,
      "speed_limit": 8.33
    }];

    const data = solve(waypoints);

    // REVIEW: Is this intended?
    expect(data).toMatchObject({
      distanceSpeeding: 0,
      durationSpeeding: 0,
      totalDistance: 0,
      totalDuration: 0,
    });
  });

  test('safe driving', () => {
    const waypoints: Waypoint[] = [
      {
        timestamp: '2020-09-22T10:28:05.130Z',
        position: {latitude: 59.334, longitude: 18.0667},
        speed: 5,
        speed_limit: 10,
      },
      {
        timestamp: '2020-09-22T10:28:10.130Z',
        position: {latitude: 59.3337, longitude: 18.0662},
        speed: 15,
        speed_limit: 20,
      },
      {
        timestamp: '2020-09-22T10:28:15.130Z',
        position: {latitude: 59.3331, longitude: 18.0664},
        speed: 10,
        speed_limit: 15,
      },
      {
        timestamp: '2020-09-22T10:28:20.130Z',
        position: {latitude: 59.3331, longitude: 18.0664},
        speed: 10,
        speed_limit: 10,
      },
    ];

    const data = solve(waypoints);

    expect(data).toMatchObject({
      distanceSpeeding: 0,
      durationSpeeding: 0,
      totalDistance: (5 * 5) + (15 * 5) + (10 * 5),
      totalDuration: 15,
    });
  });

  test('overspeed', () => {
    const waypoints: Waypoint[] = [
      {
        timestamp: '2020-09-22T10:28:05.130Z',
        position: {latitude: 59.334, longitude: 18.0667},
        speed: 10,
        speed_limit: 5,
      },
      {
        timestamp: '2020-09-22T10:28:10.130Z',
        position: {latitude: 59.3337, longitude: 18.0662},
        speed: 20,
        speed_limit: 20,
      },
      {
        timestamp: '2020-09-22T10:28:15.130Z',
        position: {latitude: 59.3331, longitude: 18.0664},
        speed: 20,
        speed_limit: 5,
      },
      {
        timestamp: '2020-09-22T10:28:20.130Z',
        position: {latitude: 59.3331, longitude: 18.0664},
        speed: 10,
        speed_limit: 10,
      },
    ];

    const data = solve(waypoints);

    expect(data).toMatchObject({
      distanceSpeeding: (10 * 5) + (20 * 5),
      durationSpeeding: 10,
      totalDistance: (10 * 5) + (20 * 5) + (20 * 5),
      totalDuration: 15,
    });
  });

  test.skip('precision', () => {
    // TODO: implement
  });
});
