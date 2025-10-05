import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'w-full max-w-[352px] min-h-[clamp(53px,2.5vw,68px)] rounded-[16px]  text-[20px] md:text-[20px] text-black flex items-center justify-center',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
