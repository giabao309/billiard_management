import { useState, useEffect, useContext } from "react";
import { Input } from "@/components/ui/input";
import MenuItems from "@/components/MenuItems";
import MenuTypes from "@/components/MenuTypes";
import { useSearchService } from "@/APIs/ServiceApi";
import { TableContext } from "@/Context/TableContext";

export default function MenuServices() {
  const { setGetItem } = useContext(TableContext);
  const [query, setQuery] = useState("");
  const { service } = useSearchService(query);
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    if (service) {
      setGetItem(service);
    }
  }, [service]);
  return (
    <div className="flex flex-col gap-y-2">
      <div>
        <Input
          type="text"
          placeholder="Tìm kiếm"
          value={query}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row gap-x-4 mt-0">
        <MenuTypes />
        <MenuItems />
      </div>
    </div>
  );
}
