import React, { FC } from 'react';
import Skeleton from '@mui/material/Skeleton';

interface IProps {
  width?: number;
}

const AppSkeleton: FC<IProps> = (props) => {
  const { width = 210 } = props;
  return <Skeleton variant="rectangular" width={width} height={25} />;
};

export { AppSkeleton };
