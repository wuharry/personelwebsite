import clsx from "clsx";
import { FunctionComponent, ReactNode } from "react";

interface IconButtonProps {
  onClickEvent: () => void;
  children: string | ReactNode;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  children,
  onClickEvent,
}) => {
  return (
    <>
      <button
        className={clsx(
          `inline-block px-2 py-2 m-2 bg-transparent text-black font-semibold text-base tracking-widest no-underline 
          border-2 border-black rounded-full`,
          `hover:shadow-[0_0_50px_rgba(0,_128,_225,_1.8)] hover:text-white hover:bg-[rgba(128,215,237,0.94)] hover:border-green-300`
        )}
        onClick={() => onClickEvent()}
      >
        {children}
      </button>
    </>
  );
};

export default IconButton;
