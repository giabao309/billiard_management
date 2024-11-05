import * as React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import TableImage from "@/assets/table.png";
import { useToast } from "@/hooks/use-toast";
import { useGetTable } from "@/APIs/ServiceApi";

export default function TableCards() {
  const { toast } = useToast();
  const tables = useGetTable();

  const handleCardClick = (table) => {
    toast({
      title: "Thông báo",
      description: `Đã chọn ${table}`,
    });
  };

  return (
    <div className="flex gap-8 max-w-[85%] flex-wrap">
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
