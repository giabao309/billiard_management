import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TableImage from "@/assets/table.png";
import { useToast } from "@/hooks/use-toast";
import { useState, useContext } from "react";
import { TableContext } from "@/Context/TableContext";

export default function TableCards({ tables }) {
  const { toast } = useToast();

  const { setSelectedTable } = useContext(TableContext);

  const handleCardClick = (table) => {
    setSelectedTable(table);
    // toast({
    //   title: "Thông báo",
    //   description: `Đã chọn ${table.name} `,
    // });
  };

  return (
    <div className="flex gap-6 max-w-[85%] max-h-[65vh] flex-wrap overflow-auto">
      {tables && tables.length > 0 ? (
        tables.map((table) => {
          let statusDot;
          if (table.status_id === 2) {
            statusDot = "green";
          } else if (table.status_id === 3) {
            statusDot = "red";
          } else if (table.status_id === 4) {
            statusDot = "gray";
          } else {
            statusDot = "white";
          }
          return (
            <Button
              key={table.id}
              className="bg-no-repeat bg-cover bg-white text-black hover:bg-white w-[10rem] h-[7.5rem] border-none flex items-center justify-center cursor-pointer"
              style={{ backgroundImage: `url(${TableImage})` }}
              onClick={() => handleCardClick(table)}
            >
              <CardHeader>
                <CardTitle>{table.name}</CardTitle>
              </CardHeader>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: statusDot }}
              ></div>
            </Button>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
