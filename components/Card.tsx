import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  className?: string;
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ className, children, ...props }: CardProps) => {
  console.log('CardTitle rendered with:', className);
  return (
    <h3 className={cn('flex items-center justify-center', className)} {...props}>
      {children}
    </h3>
  );
};

export const CardDescription = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
};
