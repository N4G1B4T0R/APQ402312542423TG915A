import { FC, ReactElement } from 'react';

interface IProps {
  children: ReactElement;
  isVisible: boolean;
  fallback: ReactElement | null;
}

export const AppFallback: FC<IProps> = ({ children, isVisible, fallback }) => {
  return isVisible ? children : fallback;
};
