import { NinjaProps } from '@/types';
import { NinjaIcon } from './NinjaIcon';

export const NinjaCard = ({ ninja }: { ninja: NinjaProps }) => (
  <li className="text-left w-full">
    <div className="w-full flex gap-2 items-center">
      <NinjaIcon color={ninja.belt} />
      <div className="text-white text-xl ">{ninja.name}</div>
    </div>
  </li>
);
