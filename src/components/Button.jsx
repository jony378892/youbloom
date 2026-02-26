import React from "react";

export default function Button({ text, handleClick, className }) {
  return (
    <button
      onClick={handleClick}
      className={`bg-blue-500 text-white rounded-md cursor-pointer py-2 px-5 ${className}`}
    >
      {text}
    </button>
  );
}
