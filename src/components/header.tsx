import SearchBar from "./search";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const links = [
    {
      title: "",
      url: "",
    },
  ];

  return (
    <header className="bg-red-500 h-28">
      <nav className="flex items-center h-full px-40 justify-between">
        <h1 className="text-4xl font-bold">eThrift</h1>
        <SearchBar />
        <div className="flex gap-2">
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
      </nav>
    </header>
  );
}
