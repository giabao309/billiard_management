import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useGetMenuTypes,
  useGetMenuItems,
  useGetMenuCategories,
} from "@/APIs/ServiceApi";
import { useGetTableByBranch } from "@/APIs/TablesApi";
import { useGetFloorByBranch } from "@/APIs/BilliardApi";
import TableTabs from "@/components/TableTabs";
import MenuServices from "@/components/MenuServices";
import Invoices from "@/components/Invoices";
import { useState } from "react";

export default function ManageService() {
  const branch_id = localStorage.getItem("branchID");

  //floor data
  const { floors } = useGetFloorByBranch(branch_id);

  //table data
  const { tables } = useGetTableByBranch(branch_id);

  //selected table
  const [selectedTable, setSelectedTable] = useState("");

  //menu data
  const { categories } = useGetMenuCategories();
  const { types } = useGetMenuTypes();
  const { items } = useGetMenuItems();

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
            <TableTabs
              floors={floors}
              tables={tables}
              setSelectedTable={setSelectedTable}
            />
          </TabsContent>
          <TabsContent value="menu">
            <MenuServices items={items} types={types} categories={categories} />
          </TabsContent>
        </Tabs>
      </div>
      <div className="w-2/5 m-2 p-2 rounded-md bg-white">
        <Invoices selectedTable={selectedTable} />
      </div>
    </div>
  );
}
