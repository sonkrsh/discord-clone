import React from "react";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
const page = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />

      <ModeToggle />
    </div>
  );
};

export default page;
