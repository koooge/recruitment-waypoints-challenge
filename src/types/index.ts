export type Waypoint = {
  timestamp: string;
  position: {
    latitude: number;
    longitude: number;
  };
  speed: number;
  speed_limit: number;
};

export type Data = {
  distanceSpeeding: number; // [m or km]
  durationSpeeding: number; // [sec]
  totalDistance: number; // [m or km]
  totalDuration: number; // [sec]
};
