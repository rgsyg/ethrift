import Link from "next/link";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export default function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-10 space-y-4">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Login</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex items-center border-b-2">
            <FaUser />
            <Input
              type="text"
              placeholder="Username"
              className="border-0 focus-visible:ring-0"
            ></Input>
          </div>
          <div className="flex items-center border-b-2">
            <FaLock />
            <Input
              type="password"
              placeholder="Password"
              className="border-0 focus-visible:ring-0"
            ></Input>
          </div>
          <Link href="" className="hover:text-gray-600 text-sm w-fit">
            Forgot Password?
          </Link>
        </div>
        <DialogFooter>
          <Button className="w-full bg-amber-300 hover:bg-amber-400!">
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
