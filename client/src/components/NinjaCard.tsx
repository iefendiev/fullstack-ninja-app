import { BeltOptions, NinjaProps } from '@/types';

const colorClasses = {
  [BeltOptions.BLACK]: 'bg-black',
  [BeltOptions.ORANGE]: 'bg-orange-400',
  [BeltOptions.WHITE]: 'bg-white',
};

export const NinjaCard = ({ ninja }: { ninja: NinjaProps }) => (
  <li className="text-left w-full">
    <div className="w-full flex gap-2 items-center">
      <div className="text-white text-xl ">{ninja.name}</div>
      <div className={`w-4 h-4 ${colorClasses[ninja.belt]}`} />
    </div>
  </li>
);
