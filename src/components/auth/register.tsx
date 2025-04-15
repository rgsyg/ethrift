"use client";

import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";

export default function Register() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-10 flex flex-col gap-8">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Register</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex items-center border-b-2">
              <FaUser />
              <Input
                type="text"
                placeholder="First Name"
                className="border-0 focus-visible:ring-0"
                name="firstName"
                required
              />
            </div>
            <div className="flex items-center border-b-2">
              <FaUser />
              <Input
                type="text"
                placeholder="Last Name"
                className="border-0 focus-visible:ring-0"
                name="lastName"
              />
            </div>
          </div>
          <div className="flex items-center border-b-2">
            <FaUser />
            <Input
              type="text"
              placeholder="Username"
              className="border-0 focus-visible:ring-0"
              name="username"
              required
            />
          </div>
          <div className="flex items-center border-b-2">
            <MdEmail />
            <Input
              type="email"
              placeholder="Email Address"
              className="border-0 focus-visible:ring-0"
              name="email"
              required
            />
          </div>
          <div className="flex items-center border-b-2">
            <FaLock />
            <Input
              type="password"
              placeholder="Password"
              className="border-0 focus-visible:ring-0"
              name="password"
              required
            />
          </div>
          <div className="flex items-center border-b-2">
            <FaLock />
            <Input
              type="password"
              placeholder="Confirm Password"
              className="border-0 focus-visible:ring-0"
              name="confirmPassword"
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
