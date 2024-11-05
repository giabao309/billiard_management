import * as React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import TableImage from "@/assets/table.png";
import { useToast } from "@/hooks/use-toast";

export default function CardWithForm() {
  const { toast } = useToast();

  const handleCardClick = (table) => {
    toast({
      title: "Thông báo",
      description: `Đã chọn ${table}`,
    });
  };

  const tables = [
    { id: 1, name: "Bàn 1", status: "in-use" },
    { id: 2, name: "Bàn 2", status: "available" },
    { id: 3, name: "Bàn 3", status: "booked" },
  ];

  return (
    <div className="flex gap-4 mt-4">
      {tables.map((table) => (
        <Card
          className=" bg-no-repeat bg-cover w-[10rem] h-[7.5rem] border-none flex items-center justify-center cursor-pointer"
          style={{ backgroundImage: `url(${TableImage})` }}
          onClick={() => handleCardClick(table.name)}
        >
          <CardHeader>
            <CardTitle>{table.name}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
