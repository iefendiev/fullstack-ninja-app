'use client';

import { FormProvider, useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/Dialog/Dialog';
import { useCreateNinja } from '@/api/ninjas/useCreateNinja';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../Select/Select';
import { FormControl, FormField, FormItem, FormLabel } from '../../Form/Form';
import { useState } from 'react';
import { useDojos } from '@/api/dojos/useDojos';
import { BeltOptions } from '@/types';

interface AddNinjaModalProps {
  dojoId: number;
}

type FormValues = {
  name: string;
  belt: BeltOptions;
};

const BELT_OPTIONS: { label: string; value: BeltOptions }[] = [
  { label: 'Black', value: BeltOptions.BLACK },
  { label: 'Orange', value: BeltOptions.ORANGE },
  { label: 'White', value: BeltOptions.WHITE },
];

export const AddNinjaModal = ({ dojoId }: AddNinjaModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate: createNinja } = useCreateNinja();
  const { refetch: refetchDojos } = useDojos();

  // TODO generate the schema from api
  const methods = useForm<FormValues>();
  const { register, handleSubmit, control } = methods;

  const handleCreateNinja = (ninjaFormData: FormValues) => {
    createNinja(
      {
        dojoId,
        ...ninjaFormData,
      },
      {
        onSuccess: () => {
          refetchDojos();
        },
      }
    );
    setIsModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <button className="text-white border border-solid border-purple-700 rounded-3xl w-fit px-4 py-2 mx-auto">
          Add Ninja
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleCreateNinja)}>
            <div className="flex flex-col gap-2 py-4">
              <div className="flex items-center gap-2">
                <label htmlFor="name" className="text-right min-w-[100px]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Ninja name"
                  className="text-black p-1 rounded-md w-full border border-solid border-black"
                  {...register('name', {
                    required: true,
                  })}
                />
              </div>
              <FormField
                control={control}
                name="belt"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormLabel className="text-base text-right min-w-[100px]">
                      Belt
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select belt color" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {BELT_OPTIONS.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            textValue={option.label}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
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
