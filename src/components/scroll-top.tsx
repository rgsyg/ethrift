"use client";

import useMounted from "@/hooks/useMounted";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {
  function handleScroll(e: React.MouseEvent) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!useMounted) return <h1>Loading...</h1>;

  return (
    <FaArrowUp
      className="rounded-full size-16 p-3.5 fixed bottom-10 right-10 bg-secondary cursor-pointer hover:bg-[#ece4d9]"
      onClick={handleScroll}
    />
  );
}
