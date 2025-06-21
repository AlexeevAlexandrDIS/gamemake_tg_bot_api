import { useState } from 'react';

function Button({ 
  children, 
  onClick, 
  disabled = false, 
  variant = 'primary', 
  fullWidth = true,
  isSuccess = false
}) {
  const baseClasses = "rounded-md py-2 px-4 font-medium transition-all duration-300 flex items-center justify-center";
  
  const variantClasses = {
    primary: isSuccess 
      ? "bg-green-600 hover:bg-green-700 text-white"
      : disabled 
        ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
        : "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white",
    secondary: disabled 
      ? "bg-transparent border border-gray-200 text-gray-400 cursor-not-allowed" 
      : "bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}
    >
      {isSuccess ? 'Добавлено ✓' : children}
    </button>
  );
}

export default Button;