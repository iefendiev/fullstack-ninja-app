export enum BeltOptions {
  BLACK = 'black',
  ORANGE = 'orange',
  WHITE = 'white',
}

export interface NinjaProps {
  id: number;
  name: string;
  belt: BeltOptions;
}

export interface DojoProps {
  id: number;
  name: string;
  ninjas: NinjaProps[];
}
