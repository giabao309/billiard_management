import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableStatus from "@/components/TableStatus";
import TableCards from "@/components/TableCards";
import { useState, useContext } from "react";
import { TableContext } from "@/Context/TableContext";

export default function TableTabs({ setSelectedTable }) {
  const { floors, tables } = useContext(TableContext);
  const [datastatus, setDataStatus] = useState("all");
  const filteredTables =
    datastatus === "all"
      ? tables
      : tables.filter((table) => table.status_id === datastatus);

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
        <TableStatus setStatus={setDataStatus} />
        <TableCards tables={filteredTables} status={datastatus} />
      </TabsContent>

      {floors.map((floor) => (
        <TabsContent
          key={floor.id}
          className="flex flex-row gap-x-4 mt-0"
          value={floor.id}
        >
          <TableStatus setStatus={setDataStatus} />
          <TableCards
            tables={filteredTables.filter(
              (table) => table.floor_id === floor.id
            )}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
