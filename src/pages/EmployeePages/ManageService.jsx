import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableTabs from "@/components/TableTabs";
import MenuServices from "@/components/MenuServices";
import Invoices from "@/components/Invoices";
import { TableProvider } from "@/Context/TableContext";

export default function ManageService() {
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
              <TableTabs />
            </TabsContent>
            <TabsContent value="menu">
              <MenuServices />
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-2/5 m-2 p-2 rounded-md bg-white">
          <Invoices />
        </div>
      </TableProvider>
    </div>
  );
}
