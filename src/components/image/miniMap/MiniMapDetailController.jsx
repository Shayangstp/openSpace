import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Expand, Minimize } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const MiniMapDetailController = () => {
  return (
    <div id="container" className="flex border-b items-center gap-5">
      <div id="selectSheets">
        <Select>
          <SelectTrigger className="w-[120px] rounded-none">
            <SelectValue placeholder="sheets" />
          </SelectTrigger>
          <SelectContent>
            {/* edit the selectItems for the sheets and the name  */}
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div id="expand" className="">
        <Expand />
      </div>
      <div id="minimize" className="">
        <Minimize />
      </div>
    </div>
  );
};

export default MiniMapDetailController;
