import React from "react";

interface SelectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function SelectionBadge({
  children,
  className = "",
}: SelectionBadgeProps) {
  return (
    <div
      className={`relative inline-flex items-center border-[1.5px] border-[#00D67E] bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#0D0D0D] select-none ${className}`}
    >
      {/* Top handles */}
      <span className=" -top-[4.5px] -left-[4.5px] absolute h-[7px] w-[7px] bg-[#00D67E] border border-[#111111]" />
      <span className="-top-[4.5px] left-1/2 -translate-x-1/2 absolute h-[7px] w-[7px] bg-[#00D67E] border border-[#111111]" />
      <span className="-top-[4.5px] -right-[4.5px] absolute h-[7px] w-[7px] bg-[#00D67E] border border-[#111111]" />

      {/* Bottom handles */}
      <span className="-bottom-[4.5px] -left-[4.5px] absolute h-[7px] w-[7px] bg-[#00D67E] border border-[#111111]" />
      <span className="-bottom-[4.5px] left-1/2 -translate-x-1/2 absolute h-[7px] w-[7px] bg-[#00D67E] border border-[#111111]" />
      <span className="-bottom-[4.5px] -right-[4.5px] absolute h-[7px] w-[7px] bg-[#00D67E] border border-[#111111]" />

      {children}
    </div>
  );
}
