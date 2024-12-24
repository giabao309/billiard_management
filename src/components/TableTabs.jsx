import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableStatus from "@/components/TableStatus";
import TableCards from "@/components/TableCards";
import { useContext } from "react";
import { TableContext } from "@/Context/TableContext";

import { useSelector, useDispatch } from "react-redux";
import { fetchFloors } from "@/Redux/tables/tablesSlice";

export default function TableTabs() {
  const { setFloor, branch_id } = useContext(TableContext);

  const dispatch = useDispatch();
  const floors = useSelector((state) => state.tables.floors);

  useEffect(() => {
    dispatch(fetchFloors(branch_id));

    const interval = setInterval(() => {
      dispatch(fetchFloors(branch_id));
    }, 100);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <Tabs defaultValue="all" className="flex flex-col">
      <TabsList className="flex justify-around w-3/4 bg-[#5181F5] text-black mb-2">
        <TabsTrigger
          key="all"
          className="w-full"
          value="all"
          onClick={() => setFloor("all")}
        >
          Tất cả
        </TabsTrigger>
        {floors.map((floor) => (
          <TabsTrigger
            key={floor.id}
            className="w-full"
            value={floor.id}
            onClick={() => setFloor(floor.id)}
          >
            {floor.name}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent key="all" className="flex flex-row gap-x-4 mt-0" value="all">
        <TableStatus />
        <TableCards />
      </TabsContent>

      {floors.map((floor) => (
        <TabsContent
          key={floor.id}
          className="flex flex-row gap-x-4 mt-0"
          value={floor.id}
        >
          <TableStatus />
          <TableCards />
        </TabsContent>
      ))}
    </Tabs>
  );
}
