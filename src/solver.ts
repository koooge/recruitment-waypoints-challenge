import type {Waypoint, Data} from './types';

export function solve(waypoints: Waypoint[]): Data {
  const data: Data = {
    distanceSpeeding: 0,
    durationSpeeding: 0,
    totalDistance: 0,
    totalDuration: 0,
  };

  if (waypoints.length === 0) return data;

  waypoints.reduce((pre, cur) => {
    const duration = (new Date(cur.timestamp).getTime() - new Date(pre.timestamp).getTime()) / 1000;
    const distance = pre.speed * duration; // REVIEW: Replace with latlon

    // TODO: Make sure precision
    const overspeed = pre.speed_limit - pre.speed;
    if (overspeed > 0) {
      data.distanceSpeeding += distance;
      data.durationSpeeding += duration;
    }
    data.totalDistance += distance;
    data.totalDuration += duration;

    return cur;
  });

  return data;
}
