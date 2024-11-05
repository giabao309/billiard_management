import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableStatus from "@/components/TableStatus";
import TableCards from "@/components/TableCards";
import { useGetFloor } from "@/APIs/ServiceApi";

export default function TableTabs() {
  const floors = useGetFloor();

  return (
    <Tabs defaultValue="all-floor">
      <TabsList className="flex justify-around w-3/5  bg-[#5181F5] text-black">
        {floors.map((floor) => (
          <TabsTrigger className="w-full" value={floor.value}>
            {floor.name}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent className="flex flex-row gap-x-4" value="all-floor">
        <TableStatus />
        <TableCards />
      </TabsContent>
    </Tabs>
  );
}
