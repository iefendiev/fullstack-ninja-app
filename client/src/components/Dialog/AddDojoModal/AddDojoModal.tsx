'use client';

import { FormProvider, useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/Dialog/Dialog';
import { useState } from 'react';
import { useDojos } from '@/api/dojos/useDojos';
import { useCreateDojo } from '@/api/dojos/useCreateDojos';

type FormValues = {
  name: string;
};

export const AddDojoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate: createDojo } = useCreateDojo();
  const { refetch: refetchDojos } = useDojos();

  // TODO generate the schema from api
  const methods = useForm<FormValues>();
  const { register, handleSubmit } = methods;

  const handleCreateDojo = (dojoFormData: FormValues) => {
    createDojo(dojoFormData, {
      onSuccess: () => {
        refetchDojos();
      },
    });
    setIsModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <button className="text-white border border-solid border-purple-700 rounded-3xl w-fit px-4 py-2 mx-auto">
          CREATE A NEW DOJO
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleCreateDojo)}>
            <div className="flex flex-col gap-2 py-4">
              <div className="flex items-center gap-2">
                <label htmlFor="name" className="text-right min-w-[100px]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Dojo name"
                  className="text-black p-1 rounded-md w-full border border-solid border-black"
                  {...register('name', {
                    required: true,
                  })}
                />
              </div>
            </div>
            <DialogFooter>
              <button type="submit">Save changes</button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
