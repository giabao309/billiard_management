import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo() {
  return (
    <Dialog className="p-8">
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-lg shadow-lg border border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Edit Profile
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Gmail Field */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Gmail
            </Label>
            <Input id="email" className="border rounded-md p-2" />
          </div>

          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Tên
            </Label>
            <Input id="name" className="border rounded-md p-2" />
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone" className="text-gray-700 font-medium">
              SĐT
            </Label>
            <Input id="phone" className="border rounded-md p-2" />
          </div>

          {/* Branch Field with Select */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="branch" className="text-gray-700 font-medium">
              Chi nhánh
            </Label>
            <Select>
              <SelectTrigger className="border rounded-md p-2 w-full">
                <SelectValue placeholder="Chon ca làm viêc" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Ca làm viêc</SelectLabel>
                  <SelectItem value="branch1">Branch 1</SelectItem>
                  <SelectItem value="branch2">Branch 2</SelectItem>
                  <SelectItem value="branch3">Branch 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Work Shift Field with Select */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="workShift" className="text-gray-700 font-medium">
              Ca làm việc
            </Label>
            <Select>
              <SelectTrigger className="border rounded-md p-2 w-full">
                <SelectValue placeholder="Chon Chi Nhánh" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Chi nhánh</SelectLabel>
                  <SelectItem value="morning">Morning</SelectItem>
                  <SelectItem value="afternoon">Afternoon</SelectItem>
                  <SelectItem value="evening">Evening</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Salary Field */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="salary" className="text-gray-700 font-medium">
              Lương
            </Label>
            <Input id="salary" className="border rounded-md p-2" />
          </div>
        </div>

        <DialogFooter className="pt-4">
          <Button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-4 py-2"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
