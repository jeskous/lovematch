import React from 'react';
import { forwardRef } from 'react';

type PropsType = {
  value: string;
  className?: string;
};
// eslint-disable-next-line react/display-name
export const NameInput = forwardRef(
  ({ value, className }: PropsType, ref: any) => {
    return (
      <input
        ref={ref}
        required
        className={`${className}
         outline-none border-b border-pink-400 px-1`}
        type="text"
        placeholder={value}
      />
    );
  }
);
