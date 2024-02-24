import Image from "next/image";
import React from "react";
import error from "@/assets/images/error/frame.png";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div>
        <Image src={error} alt="error" width={500} height={500} />
      </div>
    </div>
  );
};

export default NotFound;
