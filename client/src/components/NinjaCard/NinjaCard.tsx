import { useState } from 'react';
import { EditNinjaModal } from '../Dialog/EditNinjaModal/EditNinjaModal';
import { NinjaIcon } from './NinjaIcon';
import { NinjaCardProps } from './types';
import { TrashIcon } from '../TrashIcon';
import { useDeleteNinja } from '@/api/ninjas/useDeleteNinja';
import { useDojos } from '@/api/dojos/useDojos';

export const NinjaCard = ({ ninja }: NinjaCardProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { refetch: refetchDojos } = useDojos();
  const { mutate: deleteNinja } = useDeleteNinja(ninja.id, {
    onSuccess() {
      refetchDojos();
    },
  });

  return (
    <>
      <li className="flex items-center text-left w-full hover:bg-slate-800 rounded-sm p-2 cursor-pointer">
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
        <div
          className="hover:text-red-500 p-1 text-white"
          onClick={() => {
            deleteNinja();
          }}
        >
          <TrashIcon />
        </div>
      </li>
    </>
  );
};
