import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetMenuCategories, useGetMenuItems } from "@/APIs/ServiceApi";
import { useGetTable } from "@/APIs/TablesApi";
import { useGetFloor } from "@/APIs/BilliardApi";
import TableTabs from "@/components/TableTabs";
import MenuServices from "@/components/MenuServices";
import Invoices from "@/components/Invoices";

export default function ManageService() {
  //floor data
  const floors = useGetFloor();

  //table data
  const { tables } = useGetTable();

  //selected table
  // const [selectedTable, setSelectedTable] = useState(null);

  //menu data
  const categories = useGetMenuCategories();
  const items = useGetMenuItems();

  return (
    <div className="flex min-h-[60vh] bg-gray-300">
      <div className="w-3/5 m-2 mr-0 p-2 rounded-sm bg-white">
        <Tabs defaultValue="table">
          <TabsList className="grid w-1/2 grid-cols-2 h-12">
            <TabsTrigger className="h-full font-bold text-xl" value="table">
              Bàn
            </TabsTrigger>
            <TabsTrigger className="h-full font-bold text-xl" value="menu">
              Thực đơn
            </TabsTrigger>
          </TabsList>
          <TabsContent value="table">
            <TableTabs floors={floors} tables={tables} />
          </TabsContent>
          <TabsContent value="menu">
            <MenuServices categories={categories} items={items} />
          </TabsContent>
        </Tabs>
      </div>
      <div className="w-2/5 m-2 p-2 rounded-md bg-white">
        <Invoices />
      </div>
    </div>
  );
}
