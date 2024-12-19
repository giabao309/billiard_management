import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { TableContext } from "@/Context/TableContext";

export default function MenuItems() {
  const { getItem, invoice, selectedTable, addOrUpdateItem } =
    useContext(TableContext);
  const { toast } = useToast();

  const handleItemsClick = (item) => {
    if (!invoice || invoice.length === 0 || invoice.status === 1) {
      toast({
        title: "Thông báo",
        description: "Vui lòng chọn bàn trước khi thêm sản phẩm.",
        status: "warning",
      });
      return;
    } else if (selectedTable.status_id !== 2) {
      toast({
        title: "Thông báo",
        description: "Vui lòng mở bàn trước khi thêm sản phẩm.",
        status: "warning",
      });
      return;
    }

    // Nếu invoices hợp lệ, hiển thị thông báo thêm thành công
    addOrUpdateItem(invoice.id, item.id);
    toast({
      title: "Thông báo",
      description: `Thêm thành công ${item.name}, HD00${invoice.id}`,
      status: "success",
    });
  };

  return (
    <div className="flex gap-4 max-w-[85%] max-h-[65vh] flex-wrap overflow-auto">
      {getItem && getItem.length > 0 ? (
        getItem.map((item) => (
          <div className="flex flex-col items-center justify-center gap-y-2 p-2 w-[13rem] h-[20rem] border rounded-md">
            <div>
              <img
                src={item.img}
                alt=""
                className="w-[12rem] h-[12rem] rounded-md border"
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="flex font-bold">{item.name}</span>
              <span className="font-bold text-xl">
                {item.price.toLocaleString()}
              </span>
            </div>
            <Button
              onClick={() => handleItemsClick(item)}
              className="bg-[#5181F5]"
            >
              Thêm món
            </Button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
