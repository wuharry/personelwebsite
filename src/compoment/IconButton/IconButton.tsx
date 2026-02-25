/** @format */

import clsx from 'clsx';
import { type FunctionComponent, type ReactNode } from 'react';

interface IconButtonProps {
  onClickEvent: () => void;
  children: string | ReactNode;
  classname: string;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  children,
  onClickEvent,
  classname,
}) => {
  return (
    <>
      <button
        className={clsx(
          `m-2 inline-block rounded-full border-2 border-black bg-transparent px-2 py-2 text-base font-semibold tracking-widest text-black no-underline`,
          `hover:border-green-300 hover:bg-[rgba(128,215,237,0.94)] hover:text-white hover:shadow-[0_0_50px_rgba(0,128,225,1.8)]`,
          classname,
        )}
        onClick={() => onClickEvent()}
      >
        {children}
      </button>
    </>
  );
};

export default IconButton;
