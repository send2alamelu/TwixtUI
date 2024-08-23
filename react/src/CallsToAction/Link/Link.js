import React from 'react';

export default function TwixtLink({
  background = '',
  color = 'text-blue-500',
  link = '#', 
  onClick,
  overwriteClass = '',
  label,
  leftIcon, 
  rightIcon, 
  rightContent,
  target,
}) {
  if (!label) {
    return null;
  }

  return (
    <a
      href={link}
      className={`inline-flex items-center gap-4 ${background} ${color} ${overwriteClass}`}
      onClick={onClick}
      target={target}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <span>{label}</span>
      {rightIcon && <span>{rightIcon}</span>}
      {rightContent && <span>{rightContent}</span>}
    </a>
  );
}
