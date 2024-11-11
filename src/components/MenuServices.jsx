import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuItems from "@/components/MenuItems";

export default function MenuServices({ categories, items }) {
  return (
    <Tabs defaultValue="all" className="flex flex-col">
      <TabsList className="flex justify-around w-3/5 bg-[#5181F5] text-black mb-2">
        {categories.map((category) => (
          <TabsTrigger key={category.id} className="w-full" value={category.id}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent key="all" value="all" className="mt-0">
        <MenuItems items={items} categories={"all"} />
      </TabsContent>

      {categories
        .filter((category) => category.id !== "all")
        .map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <MenuItems items={items} categories={category.id} />
          </TabsContent>
        ))}
    </Tabs>
  );
}
