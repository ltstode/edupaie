
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function AnimatedButton({ children, className, variant = 'primary', ...props }: AnimatedButtonProps) {
  return (
    <button
      className={cn(
        "animated-button cursor-pointer text-xl border-none p-0.5 bg-gradient-radial from-white to-gray-800 relative rounded-2xl",
        className
      )}
      {...props}
    >
      <div className="blob1 absolute w-16 h-full rounded-2xl bottom-0 left-0 bg-gradient-radial from-cyan-400 via-blue-500 to-transparent shadow-lg"></div>
      <div className="blob2"></div>
      <div className="inner py-3.5 px-6 rounded-xl text-white z-10 relative bg-gradient-radial from-gray-600 to-gray-900 before:content-[''] before:w-full before:h-full before:left-0 before:top-0 before:rounded-xl before:bg-gradient-radial before:from-cyan-100/10 before:via-blue-500/10 before:to-transparent before:absolute">
        {children}
      </div>
      <style jsx>{`
        .animated-button::after {
          content: "";
          position: absolute;
          width: 65%;
          height: 60%;
          border-radius: 120px;
          top: 0;
          right: 0;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.22);
          z-index: -1;
        }
      `}</style>
    </button>
  );
}
