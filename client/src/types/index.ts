export enum BeltOptions {
  BLACK = 'black',
  ORANGE = 'orange',
  WHITE = 'white',
}

export interface Ninja {
  id: number;
  name: string;
  belt: BeltOptions;
}

export interface Dojo {
  id: number;
  name: string;
  ninjas: Ninja[];
}
