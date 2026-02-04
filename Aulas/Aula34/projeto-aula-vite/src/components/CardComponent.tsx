import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="
      relative 
      bg-white 
      rounded-2xl 
      border border-slate-200 
      shadow-xl shadow-slate-200/50 
      p-8 
      max-w-sm 
      mx-10 
      hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 
      transition-all duration-300 ease-out
      overflow-hidden
    ">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 to-purple-500" />
      
      {children}
    </div>
  );
}

export default Card;