import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import DtPicker from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";

const checkBoxData = [
  {
    id: "videos",
    label: "ویدیو ها",
    sub: "360°",
  },
  {
    id: "photos",
    label: "عکس ها",
    sub: "360°",
  },
  {
    id: "scans",
    label: "اسکن ها",
    sub: "3D",
  },
  {
    id: "feildNotes",
    label: "یاداشت ها",
    sub: "",
  },
];

const SheetsFilterModal = () => {
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div
            id="filter-btn"
            className="border px-4 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100"
          >
            <span>
              <SlidersHorizontal className="w-4 h-4" />
            </span>
            <span className="text-[15px]">فیلتر</span>
          </div>
        </DialogTrigger>
        <DialogContent>
          <>
            {checkBoxData.map((item, index) => {
              return (
                <div id={item.id} className="flex justify-start items-center gap-5 border-b py-3">
                  <Checkbox id={item.id} />
                  <label
                    htmlFor={item.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-2"
                  >
                    <span>{item.label}</span>
                    <span>{item.sub}</span>
                  </label>
                </div>
              );
            })}
            <div>
              {/* <DtPicker onChange={setDate} type="single" local="en" withTime showWeekend /> */}
            </div>
          </>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SheetsFilterModal;
