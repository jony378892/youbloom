import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center h-96 pt-36">
      <AiOutlineLoading className="animate-spin size-11" />
    </div>
  );
}
