import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function MenuItems({ items, categories }) {
  const { toast } = useToast();

  const filteredItems =
    categories !== "all"
      ? items.filter((item) => item.category === categories)
      : items;

  const handleItemsClick = (item) => {
    toast({
      title: "Thông báo",
      description: `Thêm thành công ${item.name}`,
    });
  };

  return (
    <div className="flex gap-6 max-w-[85%] max-h-[65vh] flex-wrap overflow-auto">
      {filteredItems && filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <Card className="w-[13rem] h-[15rem] flex flex-col justify-center items-center">
            <CardContent>
              <span className="font-bold text-xl">{item.name}</span>
              <CardTitle>{item.price.toLocaleString()}</CardTitle>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleItemsClick(item)}
                className="bg-[#5181F5]"
              >
                Thêm món
              </Button>
            </CardFooter>
          </Card>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
