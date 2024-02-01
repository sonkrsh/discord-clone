import React from "react";
import { SignUp } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex justify-center h-full items-center">
      <SignUp />
    </div>
  );
};

export default page;
