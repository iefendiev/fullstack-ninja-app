'use client';

import { FormProvider, useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/Dialog/Dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../Select/Select';
import { FormControl, FormField, FormItem, FormLabel } from '../../Form/Form';
import { useDojos } from '@/api/dojos/useDojos';
import { useUpdateNinja } from '@/api/ninjas/useUpdateNinja';
import { EditNinjaModalProps, FormValues } from './types';
import { BeltOptions } from '@/types';

const BELT_OPTIONS: { label: string; value: BeltOptions }[] = [
  { label: 'Black', value: BeltOptions.BLACK },
  { label: 'Orange', value: BeltOptions.ORANGE },
  { label: 'White', value: BeltOptions.WHITE },
];

export const EditNinjaModal = ({
  dojoId,
  ninja,
  isOpen,
  setIsOpen,
  trigger,
}: EditNinjaModalProps) => {
  const { mutate: updateNinja } = useUpdateNinja();
  const { refetch: refetchDojos } = useDojos();

  // TODO generate the schema from api
  const methods = useForm<FormValues>({
    defaultValues: {
      name: ninja.name,
      belt: ninja.belt,
    },
  });
  const { register, handleSubmit, control } = methods;

  const handleUpdateNinja = (ninjaFormData: FormValues) => {
    updateNinja(
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
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleUpdateNinja)}>
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
