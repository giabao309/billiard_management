import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableStatus from "@/components/TableStatus";
import TableCards from "@/components/TableCards";

export default function TableTabs({ floors, tables }) {
  return (
    <Tabs defaultValue="all" className="flex flex-col">
      <TabsList className="flex justify-around w-3/4 bg-[#5181F5] text-black mb-2">
        <TabsTrigger key="all" className="w-full" value="all">
          Tất cả
        </TabsTrigger>
        {floors.map((floor) => (
          <TabsTrigger key={floor.id} className="w-full" value={floor.id}>
            {floor.name}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent key="all" className="flex flex-row gap-x-4 mt-0" value="all">
        <TableStatus />
        <TableCards tables={tables} />
      </TabsContent>

      {/* {floors
        .filter((floor) => floor.id !== "all") // Lọc ra tab "Tất cả"
        .map((floor) => (
          <TabsContent
            key={floor.id}
            className="flex flex-row gap-x-4 mt-0"
            value={floor.id}
          >
            <TableStatus />
            <TableCards floor={floor} tables={tables} />
          </TabsContent>
        ))} */}
    </Tabs>
  );
}
