import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useGetMenuTypes,
  useGetMenuItems,
  useGetMenuCategories,
} from "@/APIs/ServiceApi";
import TableTabs from "@/components/TableTabs";
import MenuServices from "@/components/MenuServices";
import Invoices from "@/components/Invoices";
import { useState } from "react";
import { TableProvider } from "@/Context/TableContext";

export default function ManageService() {
  //selected table
  const [selectedTable, setSelectedTable] = useState({});

  //menu data
  const { categories } = useGetMenuCategories();
  const { types } = useGetMenuTypes();
  const { items } = useGetMenuItems();

  return (
    <div className="flex min-h-[60vh] bg-gray-300">
      <TableProvider>
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
              <TableTabs
                setSelectedTable={setSelectedTable}
                selectedTable={selectedTable}
              />
            </TabsContent>
            <TabsContent value="menu">
              <MenuServices items={items} types={types} />
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-2/5 m-2 p-2 rounded-md bg-white">
          <Invoices selectedTable={selectedTable} />
        </div>
      </TableProvider>
    </div>
  );
}
