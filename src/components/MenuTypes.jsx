import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function TableStatus({ types }) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="all" />
        <label
          htmlFor="all"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Tất cả
        </label>
      </div>
      {types.map((type) => (
        <div className="flex items-center space-x-2">
          <Checkbox id={type.name} />
          <label
            htmlFor={type.name}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {type.name}
          </label>
        </div>
      ))}
    </div>
  );
}
