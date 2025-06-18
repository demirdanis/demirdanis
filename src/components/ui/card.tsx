import React from "react";

interface CardProps {
  className?: string;
  hover?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
  onClick,
}) => (
  <div
    className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 ${
      hover
        ? "hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-300"
        : ""
    } ${className}`}
    onClick={onClick}
    style={onClick ? { cursor: "pointer" } : {}}
  >
    {children}
  </div>
);

export default Card;
