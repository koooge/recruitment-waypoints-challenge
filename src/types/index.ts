export type Waypoint = {
  timestamp: string;
  position: {
    latitude: number;
    longitude: number;
  };
  speed: number; // [m/s]
  speed_limit: number; // [m/s]
};

export type Data = {
  distanceSpeeding: number; // [meters]
  durationSpeeding: number; // [sec]
  totalDistance: number; // [meters]
  totalDuration: number; // [sec]
};
