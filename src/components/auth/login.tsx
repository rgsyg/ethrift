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
      <DialogContent className="sm:max-w-md p-10 flex flex-col gap-8">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Login</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4">
          <div className="flex items-center border-b-2">
            <FaUser />
            <Input
              type="text"
              placeholder="Username"
              className="border-0 focus-visible:ring-0"
              required
            />
          </div>
          <div className="flex items-center border-b-2">
            <FaLock />
            <Input
              type="password"
              placeholder="Password"
              className="border-0 focus-visible:ring-0"
              required
            />
          </div>
          <Link href="" className="hover:text-gray-600 text-sm w-fit">
            Forgot Password?
          </Link>
          <Button className="w-full bg-amber-300 hover:bg-amber-400! mt-4">
            Login
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
