import React, { useState } from "react";
import { useGetTableStatus } from "@/APIs/TablesApi";
import { Button } from "@/components/ui/button";

export default function TableStatus({ setStatus }) {
  const { status } = useGetTableStatus();

  const handleClick = (statusName) => {
    setStatus(statusName);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <Button
        variant="ghost"
        className="border"
        onClick={() => handleClick("all")}
      >
        Tất cả
      </Button>

      {status.map((st) => (
        <Button
          key={st.id}
          variant="ghost"
          className="border"
          onClick={() => handleClick(st.id)}
        >
          {st.name}
        </Button>
      ))}
    </div>
  );
}
