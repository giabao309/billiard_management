import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuItems from "@/components/MenuItems";
import MenuTypes from "@/components/MenuTypes";
import { TableContext } from "@/Context/TableContext";
import { useState, useContext } from "react";

export default function MenuServices({ items, types }) {
  const { categories } = useContext(TableContext);
  return (
    <Tabs defaultValue="all" className="flex flex-col">
      <TabsList className="flex justify-around w-3/4 bg-[#5181F5] text-black mb-2">
        <TabsTrigger key="all" className="w-full" value="all">
          Tất cả
        </TabsTrigger>
        {categories.map((categories) => (
          <TabsTrigger
            key={categories.name}
            className="w-full"
            value={categories.name}
          >
            {categories.name}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent key="all" value="all" className="flex flex-row gap-x-4 mt-0">
        <MenuTypes types={types} />
        <MenuItems items={items} categories={"all"} />
      </TabsContent>

      {/* {categories
        .filter((category) => category.id !== "all")
        .map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <MenuItems items={items} categories={category.id} />
          </TabsContent>
        ))} */}
    </Tabs>
  );
}
