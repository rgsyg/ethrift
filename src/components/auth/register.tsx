import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";

export default function Register() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-10 flex flex-col gap-8">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Register</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex items-center border-b-2">
              <FaUser />
              <Input
                type="text"
                placeholder="First Name"
                className="border-0 focus-visible:ring-0"
                required
              />
            </div>
            <div className="flex items-center border-b-2">
              <FaUser />
              <Input
                type="text"
                placeholder="Last Name"
                className="border-0 focus-visible:ring-0"
              />
            </div>
          </div>
          <div className="flex items-center border-b-2">
            <MdEmail />
            <Input
              type="email"
              placeholder="Email Address"
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
          <Button
            className="w-full bg-amber-300 hover:bg-amber-400! mt-4"
            type="submit"
          >
            Register
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
