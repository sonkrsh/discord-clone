import React from "react";
import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex justify-center h-full items-center">
      <SignIn />
    </div>
  );
};

export default page;
