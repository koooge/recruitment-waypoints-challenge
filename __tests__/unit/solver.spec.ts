import { solve } from '@/solver';
import type { Waypoint } from '@/types';


describe('solver', () => {
  test('empty waypoints', () => {
    const waypoints: Waypoint[] = [];

    const data = solve(waypoints);

    expect(data).toBe({});
  });
});
