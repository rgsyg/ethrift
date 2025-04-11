import SearchBar from "./search";
import { Button } from "./ui/button";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  const links = [
    {
      title: "",
      url: "",
    },
  ];

  return (
    <header className="bg-red-500 h-28 px-32">
      <nav className="flex items-center h-full justify-between">
        <h1 className="text-4xl font-bold">eThrift</h1>
        <SearchBar />
        <div className="flex gap-4 items-center">
          <Button>Login</Button>
          <Button>Register</Button>
          <FaCartShopping className="size-auto w-8" />
        </div>
      </nav>
    </header>
  );
}
