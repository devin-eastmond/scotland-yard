export enum PlayerColor {
  RED = "red",
  BLUE = "blue",
  GREEN = "green",
  YELLOW = "yellow",
  BLACK = "black",
  MR_X = "mr_x",
}

export interface Player {
  id: number;
  name: string;
  color: PlayerColor;
  position: number;
  turnOrder: number;
  fareTickets: FareTicket[];
}

export enum FareTicketType {
  TAXI = "taxi",
  BUS = "bus",
  UNDERGROUND = "underground",
  SECRET = "secret",
  DOUBLE = "double",
}

export interface FareTicket {
  type: FareTicketType;
  quantity: number;
}

export interface Game {
  players: Player[];
  currentTurn: number;
  // TODO: better name
  doubleMoveInPlace: number;
  currentRound: number;
}

export const numRounds = 16;
export const revealRounds = [5, 10];

export const startingDetectiveFareTickets: FareTicket[] = [
  {
    type: FareTicketType.TAXI,
    quantity: 3,
  },
  {
    type: FareTicketType.BUS,
    quantity: 3,
  },
  {
    type: FareTicketType.UNDERGROUND,
    quantity: 3,
  },
];

export const startingMrXFareTickets: FareTicket[] = [
  {
    type: FareTicketType.SECRET,
    quantity: 3,
  },
  {
    type: FareTicketType.DOUBLE,
    quantity: 1,
  },
];
