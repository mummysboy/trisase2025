import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  variant?: 'default' | 'white';
  customSize?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '', variant = 'default', customSize }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const logoSrc = variant === 'white' ? '/tris-logo-white.svg' : '/tris-logo.svg';
  const finalSizeClass = customSize || sizeClasses[size];

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="Tris" 
        className={`${finalSizeClass} object-contain`}
      />
      {showText && (
        <span className={`font-bold text-gray-900 dark:text-white ${textSizes[size]} ml-2`}>
          Tris
        </span>
      )}
    </div>
  );
};

export default Logo; 