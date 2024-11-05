import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableTabs from "@/components/TableTabs";

export default function ManageService() {
  return (
    <div>
      <Tabs defaultValue="table" className="w-3/5 p-4 rounded-sm border-">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="table">Bàn</TabsTrigger>
          <TabsTrigger value="menu">Thực đơn</TabsTrigger>
        </TabsList>
        <TabsContent value="table">
          <TableTabs />
        </TabsContent>
        <TabsContent value="menu"></TabsContent>
      </Tabs>
    </div>
  );
}
