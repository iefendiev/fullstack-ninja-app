'use client';
import { useDojos } from '@/api/dojos/useDojos';
import { AddDojoModal } from '@/components/Dialog/AddDojoModal/AddDojoModal';
import { AddNinjaModal } from '@/components/Dialog/AddNinjaModal/AddNinjaModal';
import { NinjaCard } from '@/components/NinjaCard';

export default function Dashboard() {
  const { data: dojos } = useDojos();

  return (
    <div className="flex flex-col items-center gap-16">
      <AddDojoModal />
      <div className="flex flex-wrap gap-16">
        {dojos?.map((dojo) => (
          <div
            className="flex flex-col gap-8 p-6 border border-solid border-white rounded-sm min-w-[500px]"
            key={dojo.id}
          >
            <div className="flex flex-col gap-2">
              <p className="text-white font-extrabold">
                {dojo.name.toUpperCase()}
              </p>
              <ul>
                {dojo.ninjas?.map((ninja) => (
                  <NinjaCard key={ninja.id} ninja={ninja} />
                ))}
              </ul>
            </div>
            <AddNinjaModal dojoId={dojo.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
