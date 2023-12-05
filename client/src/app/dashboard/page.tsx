'use client';
import { useNinjas } from '@API/ninjas/useNinjas';
import { AddNinjaModal } from '@/components/Dialog/AddNinjaModal/AddNinjaModal';
import { NinjaCard } from '@/components/NinjaCard';
import { useMemo } from 'react';

export default function Dashboard() {
  const { data: ninjas } = useNinjas();

  // TODO make a dojo relation to ninjas in db
  // we map over dojos and render ninjas inside each dojo
  // user may have many dojos, dojos may have many ninjas
  // for now we map only ninjas of users
  const myDummyDojos = useMemo(
    () => [
      {
        id: 'dojo-1',
        name: 'Dojo 1',
        ninjas: [],
      },
      {
        id: 'dojo-2',
        name: 'Dojo 2',
        ninjas,
      },
    ],
    [ninjas]
  );

  return (
    <div className="flex flex-wrap gap-4">
      {myDummyDojos.map((dojo) => (
        <div
          className="flex flex-col gap-4 p-6 border border-solid border-white rounded-sm min-w-[500px]"
          key={dojo.id}
        >
          <AddNinjaModal />
          <div className="flex flex-wrap gap-2">
            {dojo.ninjas?.map((ninja) => (
              <NinjaCard key={ninja.id} ninja={ninja} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
