import React from "react";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { TableContext } from "@/Context/TableContext";

export default function TableStatus() {
  const { types, setType } = useContext(TableContext);
  return (
    <div className="flex flex-col gap-y-4">
      <Button variant="ghost" className="border" onClick={() => setType("all")}>
        Tất cả
      </Button>

      {types.map((type) => (
        <Button
          key={type.id}
          variant="ghost"
          className="border"
          onClick={() => setType(type.id)}
        >
          {type.name}
        </Button>
      ))}
    </div>
  );
}
