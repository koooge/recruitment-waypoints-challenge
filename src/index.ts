import waypoints from './waypoints.json';
import {solve} from './solver';

// TODO: validate waypoints
const data = solve(waypoints);

console.log(data); // TODO: pretty print
