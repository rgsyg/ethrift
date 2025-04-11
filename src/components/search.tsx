"use client";

import { FaSearch } from "react-icons/fa";
import { Input } from "./ui/input";

function handleSubmit(e: React.MouseEvent) {
  e.preventDefault();
}

export default function SearchBar() {
  return (
    <div className="flex w-8/12 h-12">
      <Input
        type="search"
        placeholder="Search..."
        className="bg-white rounded-r-none h-full"
      />
      <FaSearch
        className="bg-amber-300 size-auto w-11 p-1 px-3 rounded-r-md cursor-pointer"
        onClick={handleSubmit}
      />
    </div>
  );
}
