'use client';

import { useId } from 'react';
import CheckMark from '../Icon/CheckMark';
import clsx from 'clsx';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  children,
  className,
  checked,
  ...rest
}) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={clsx(
        'flex items-center gap-3 cursor-pointer transition-colors w-full max-w-[649px] text-[clamp(0.8rem,2.5vw,1rem)]  text-[#CDCDCD]',
        !checked && 'text-red-500',
        className,
      )}
    >
      <input type="checkbox" id={id} className="sr-only peer" {...rest} />
      <div className="w-[30px] h-[30px] rounded-md border-2 border-[#484D4E] flex items-center justify-center  transition-colors">
        {checked && <CheckMark className="fill-white" />}
      </div>
      <p className="max-w-[252px] sm:max-w-[605px]">{children}</p>
    </label>
  );
};

export default CheckBox;
