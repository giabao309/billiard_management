import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

export default function TableTabs() {
  return (
    <Tabs defaultValue="all-floor">
      <TabsList className="flex justify-around w-3/5  bg-[#5181F5] text-black">
        <TabsTrigger className="w-full" value="all-floor">
          Tất cả
        </TabsTrigger>
        <TabsTrigger className="w-full" value="floor-1">
          Lầu 1
        </TabsTrigger>
        <TabsTrigger className="w-full" value="floor-2">
          Lầu 2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all-floor">
        <div className="flex w-3/5 gap-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="all-status" />
            <label
              htmlFor="all-status"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tất cả
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="available" />
            <label
              htmlFor="available"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Còn trống
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="in-use" />
            <label
              htmlFor="in-use"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Đang sử dụng
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="booked" />
            <label
              htmlFor="booked"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Đã đặt
            </label>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
