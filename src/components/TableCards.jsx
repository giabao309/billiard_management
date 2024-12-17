import { Button } from "@/components/ui/button";
import TableImage from "@/assets/table.png";
import { useState, useContext } from "react";
import { TableContext } from "@/Context/TableContext";
import { Check } from "lucide-react";

export default function TableCards() {
  const { setSelectedTable, getTable, toast } = useContext(TableContext);

  // Trạng thái để theo dõi bàn đang chọn
  const [selectedTableId, setSelectedTableId] = useState(null);

  const handleCardClick = (table) => {
    setSelectedTable(table);
    setSelectedTableId(table.id);
    toast({
      title: "Thông báo",
      description: `Đã chọn ${table.name} `,
    });
  };

  return (
    <div className="flex gap-6 max-w-[85%] max-h-[65vh] flex-wrap overflow-auto">
      {getTable && getTable.length > 0 ? (
        getTable.map((table) => {
          let statusDot;
          if (table.status_id === 2) {
            statusDot = "#66CC66";
          } else if (table.status_id === 3) {
            statusDot = "#FF3333";
          } else if (table.status_id === 4) {
            statusDot = "rgb(156 163 175)";
          } else {
            statusDot = "white";
          }

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
              <div
                className="flex items-center justify-center w-full h-full rounded-lg"
                style={{
                  backgroundColor: statusDot,
                }}
              >
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
  );
}
