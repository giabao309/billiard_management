import React, { useContext } from "react";
import { useGetTableStatus } from "@/APIs/TablesApi";
import { Button } from "@/components/ui/button";
import { TableContext } from "@/Context/TableContext";

export default function TableStatus() {
  const { status, setStatus } = useContext(TableContext);

  return (
    <div className="flex flex-col gap-y-4">
      <Button
        variant="ghost"
        className="border"
        onClick={() => setStatus("all")}
      >
        Tất cả
      </Button>

      {status.map((st) => (
        <Button
          key={st.id}
          variant="ghost"
          className="border"
          onClick={() => setStatus(st.id)}
        >
          {st.name}
        </Button>
      ))}
    </div>
  );
}
