export enum RouteType {
  TAXI = "taxi",
  BUS = "bus",
  UNDERGROUND = "underground",
  FERRY = "ferry",
}

export interface Position {
  id: number;
  coordinates: {
    x: number;
    y: number;
  };
}

export interface Route {
  startingPosition: number;
  endingPosition: number;
  type: RouteType;
}

export interface Board {
  positions: Position[];
  routes: Route[];
}

const positions: Position[] = [
  {
    id: 1,
    coordinates: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 2,
    coordinates: {
      x: 0,
      y: 0,
    },
  },
];

const routes: Route[] = [
  {
    startingPosition: 1,
    endingPosition: 2,
    type: RouteType.TAXI,
  },
];

export const board: Board = {
  positions: positions,
  routes: routes,
};
