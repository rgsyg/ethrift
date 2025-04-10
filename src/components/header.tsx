import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
        <Input
          type="search"
          placeholder="Search..."
          className="bg-white w-52"
        ></Input>
        <div className="">
          <Button />
        </div>
      </nav>
    </header>
  );
}
