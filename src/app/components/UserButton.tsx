"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  id: string;
  children?: ReactNode | string;
}

const Button: React.FC<ButtonProps> = ({ id, children }) => {
  const router = useRouter();

  const handleClickFollower = () => {
    router.push(`/users/${id}`);
  };

  return (
    <button
      className="cursor-pointer w-full h-full p-4 border border-slate-300 rounded-md text-xl text-center whitespace-normal hover:scale-105 hover:text-emerald-500 hover:shadow-2xl hover:border-emerald-500 transition-all"
      onClick={handleClickFollower}
    >
      {children}
    </button>
  );
};

export default Button;
