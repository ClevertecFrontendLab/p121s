import { ReactNode } from 'react';

export interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  notice?: ReactNode | string;
}

export interface LabelStyledProps {
  isFocus: boolean;
}

export interface OpenClosePasswordBtnProps {
  img: string;
}
