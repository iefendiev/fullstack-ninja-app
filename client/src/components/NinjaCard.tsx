import { NinjaProps } from '@/types';

export const NinjaCard = ({ ninja }: { ninja: NinjaProps }) => (
  <div className="border border-white rounded px-8 py-6">
    <div className="w-full flex flex-col justify-between">
      <div className="text-white font-bold text-xl">{ninja.name}</div>
      <div className="text-white font-bold text-lg">{ninja.belt}</div>
    </div>
  </div>
);
