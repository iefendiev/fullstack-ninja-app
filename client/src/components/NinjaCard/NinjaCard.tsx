import { useState } from 'react';
import { EditNinjaModal } from '../Dialog/EditNinjaModal/EditNinjaModal';
import { NinjaIcon } from './NinjaIcon';
import { NinjaCardProps } from './types';

export const NinjaCard = ({ ninja }: NinjaCardProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <li className="text-left w-full hover:bg-slate-800 rounded-sm p-1 cursor-pointer">
        <EditNinjaModal
          ninja={ninja}
          isOpen={isEditModalOpen}
          setIsOpen={setIsEditModalOpen}
          trigger={
            <div className="w-full flex gap-2 items-center">
              <NinjaIcon color={ninja.belt} />
              <div className="text-white text-xl ">{ninja.name}</div>
            </div>
          }
        />
      </li>
    </>
  );
};
