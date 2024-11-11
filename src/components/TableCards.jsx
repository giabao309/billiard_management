import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import TableImage from "@/assets/table.png";
import { useToast } from "@/hooks/use-toast";

export default function TableCards({ tables }) {
  const { toast } = useToast();

  const handleCardClick = (table) => {
    toast({
      title: "Thông báo",
      description: `Đã chọn ${table.name} `,
    });
  };

  return (
    <div className="flex gap-6 max-w-[85%] max-h-[65vh] flex-wrap overflow-auto">
      {tables && tables.length > 0 ? (
        tables.map((table) => {
          let statusDot;
          if (table.status === "Đang sử dụng") {
            statusDot = "green";
          } else if (table.status === "Đã đặt") {
            statusDot = "red";
          } else if (table.status === "Bảo trì") {
            statusDot = "gray";
          } else {
            statusDot = "white";
          }
          return (
            <Card
              key={table.id}
              className="bg-no-repeat bg-cover w-[10rem] h-[7.5rem] border-none flex items-center justify-center cursor-pointer"
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
            </Card>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
