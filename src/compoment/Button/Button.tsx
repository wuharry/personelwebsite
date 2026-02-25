import clsx from 'clsx';
import React from 'react';
// import { CircleNotch } from '@phosphor-icons/react'; // 假設你有用 phosphor-icons，或是換成你自己的 Loading SVG

export type ButtonProps<T extends React.ElementType = 'button'> = {
  as?: T;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isRounded?: boolean;
  isLoading?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

const Button = <T extends React.ElementType = 'button'>({
  as,
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isRounded = false,
  isLoading = false,
  leadingIcon,
  trailingIcon,
  className,
  type = 'button', // 只有當 as 是 button 時這個預設才有效，但保留無妨
  ...rest
}: ButtonProps<T>) => {
  const Component = as ?? 'button';

  // 基礎樣式：加入 flex 讓 icon 和文字置中對齊
  const baseStyle =
    'inline-flex items-center justify-center font-semibold tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

  return (
    <Component
      type={as === 'button' || !as ? type : undefined} // 只有 button tag 需要 type
      disabled={disabled || isLoading}
      className={clsx(
        baseStyle,
        // 尺寸設定
        {
          'px-4 py-2 text-sm gap-1.5': size === 'sm',
          'px-7 py-3 text-base gap-2': size === 'md',
          'px-9 py-4 text-lg gap-2.5': size === 'lg',
        },
        // 變體樣式 (Variants)
        {
          // Primary: 你的 Cyan 風格
          'bg-cyan-400 text-black hover:bg-[rgba(128,215,237,0.94)] hover:text-white hover:shadow-[0_0_20px_rgba(0,128,225,0.7)]':
            variant === 'primary',

          // Secondary: 反白風格
          'bg-white text-cyan-400 border border-cyan-400 hover:bg-cyan-50':
            variant === 'secondary',

          // Tertiary: 純文字風格
          'bg-transparent text-cyan-400 hover:text-cyan-300 underline-offset-4 hover:underline':
            variant === 'tertiary',

          // Danger: 紅色風格
          'bg-red-500 text-white hover:bg-red-600 shadow-md':
            variant === 'danger',
        },
        // 形狀
        isRounded ? 'rounded-full' : 'rounded-3xl',
        className
      )}
      {...rest}
    >
      {/* Loading 狀態顯示 Spinner */}
      {/* {isLoading && <CircleNotch className="animate-spin" size={20} />} */}

      {/* 非 Loading 時才顯示 leadingIcon */}
      {!isLoading && leadingIcon && <span>{leadingIcon}</span>}

      {children}

      {!isLoading && trailingIcon && <span>{trailingIcon}</span>}
    </Component>
  );
};

export default Button;
