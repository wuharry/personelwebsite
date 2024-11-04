import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface BUTTONPROPS {
  className: string | null;
  type: string | null;
  onClickEvent: () => void;
  children: string | ReactNode;
}

const Button: FC<BUTTONPROPS> = ({
  className,
  type,
  onClickEvent,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        `inline-block px-7 py-3 bg-cyan-400 text-black rounded-3xl font-semibold text-base tracking-widest no-underline`,
        `hover:shadow-[0_0_50px_rgba(0,_128,_225,_1.8)] hover:text-white hover:bg-[rgba(128,215,237,0.94)] `,
        className
      )}
      onClick={() => onClickEvent()}
    >
      {children}
    </button>
  );
};

export default Button;
