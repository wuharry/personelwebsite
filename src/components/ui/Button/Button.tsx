import clsx from 'clsx';
import React from 'react';
// import { CircleNotch } from '@phosphor-icons/react'; // 假設你有用 phosphor-icons，或是換成你自己的 Loading SVG

type ButtonProps<T extends React.ElementType = 'button'> = {
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
      aria-busy={isLoading || undefined}
      className={clsx(
        baseStyle,
        // 尺寸設定
        {
          'gap-1.5 px-4 py-2 text-sm': size === 'sm',
          'gap-2 px-7 py-3 text-base': size === 'md',
          'gap-2.5 px-9 py-4 text-lg': size === 'lg',
        },
        // 變體樣式 (Variants)
        {
          // Primary: 你的 Cyan 風格
          'bg-cyan-400 text-black hover:bg-[rgba(128,215,237,0.94)] hover:text-white hover:shadow-[0_0_20px_rgba(0,128,225,0.7)]':
            variant === 'primary',

          // Secondary: 反白風格
          'border border-cyan-400 bg-white text-cyan-400 hover:bg-cyan-50':
            variant === 'secondary',

          // Tertiary: 純文字風格
          'bg-transparent text-cyan-400 underline-offset-4 hover:text-cyan-300 hover:underline':
            variant === 'tertiary',

          // Danger: 紅色風格
          'bg-red-500 text-white shadow-md hover:bg-red-600':
            variant === 'danger',
        },
        // 形狀
        isRounded ? 'rounded-full' : 'rounded-3xl',
        className,
      )}
      {...rest}
    >
      {isLoading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      )}

      {/* 非 Loading 時才顯示 leadingIcon */}
      {!isLoading && leadingIcon && <span>{leadingIcon}</span>}

      {children}

      {!isLoading && trailingIcon && <span>{trailingIcon}</span>}
    </Component>
  );
};

export default Button;
