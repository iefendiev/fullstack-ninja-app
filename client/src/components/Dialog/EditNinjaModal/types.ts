import { BeltOptions, Ninja } from '@/types';
import { Dispatch, SetStateAction } from 'react';

export interface EditNinjaModalProps {
  dojoId: number;
  ninja: Ninja;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  trigger: JSX.Element;
}

export type FormValues = {
  name: string;
  belt: BeltOptions;
};
