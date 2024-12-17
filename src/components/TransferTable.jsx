import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { TbTransfer } from "react-icons/tb";
import TableImage from "@/assets/table.png";
import { useState, useContext } from "react";
import { Check } from "lucide-react";
import { TableContext } from "@/Context/TableContext";

export function TransferTable() {
  const {
    selectedTable,
    tableAvailable,
    invoices,
    transferTable,
    openTable,
    closeTable,
    toast,
  } = useContext(TableContext);

  const [selectedTableId, setSelectedTableId] = useState(null);
  const [availableTable, setAvailableTable] = useState({});
  const handleCardClick = (table) => {
    setAvailableTable(table);
    setSelectedTableId(table.id);
  };

  const handleTransfer = async () => {
    if (availableTable && availableTable.id) {
      await transferTable(availableTable.id, invoices.id);
      await closeTable(selectedTable.id);
      await openTable(availableTable.id);

      toast({
        title: "Thông báo",
        description: `Chuyển bàn thành công.`,
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      toast({
        title: "Thông báo",
        description: `Cần chọn bàn để chuyển.`,
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="outline"
          className="bg-[#5181F5] w-[15rem] h-[3.5rem] text-xl text-white"
        >
          Chuyển bàn <TbTransfer />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[65rem]">
        <DialogHeader>
          <DialogTitle>Chuyển bàn</DialogTitle>
        </DialogHeader>
        <div className="flex w-full gap-x-16 justify-around">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold mb-4">Bàn hiện tại</span>
            <Button
              className="bg-no-repeat bg-cover bg-white text-black hover:bg-white w-[10rem] h-[7.5rem] p-4 border-none flex items-center justify-center"
              style={{
                backgroundImage: `url(${TableImage})`,
              }}
            >
              <div
                className="flex items-center justify-center w-full h-full rounded-lg"
                style={{
                  backgroundColor: "#66CC66",
                }}
              >
                <div className="flex h-full w-[85%] items-center justify-center gap-x-2">
                  <div className="text-2xl">{selectedTable.name}</div>
                </div>

                <div className="h-full w-[15%] mt-4"></div>
              </div>
            </Button>
          </div>
          <div className="flex w-full flex-col gap-x-4 items-center">
            <span className="text-xl font-bold mb-4">
              Chuyển sang {availableTable.name}
            </span>
            <div className="flex gap-6 max-w-[50rem] max-h-[30rem] flex-wrap overflow-auto">
              {tableAvailable && tableAvailable.length > 0 ? (
                tableAvailable.map((table) => {
                  const isSelected = selectedTableId === table.id;
                  return (
                    <Button
                      key={table.id}
                      className="bg-no-repeat bg-cover bg-white text-black hover:bg-white w-[10rem] h-[7.5rem] p-4 border-none flex items-center justify-center"
                      style={{
                        backgroundImage: `url(${TableImage})`,
                      }}
                      onClick={() => handleCardClick(table)}
                    >
                      <div className="flex items-center justify-center w-full h-full rounded-lg">
                        <div className="flex h-full w-[85%] items-center justify-center gap-x-2">
                          <div className="text-2xl">{table.name}</div>
                        </div>

                        <div className="h-full w-[15%] mt-4">
                          {isSelected && <Check />}
                        </div>
                      </div>
                    </Button>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button
              className="bg-[#5181F5] hover:text-black hover:bg-gray-200"
              type="submit"
              onClick={handleTransfer}
            >
              Chuyển bàn
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
