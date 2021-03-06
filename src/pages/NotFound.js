import React, { useEffect } from "react";
import { RiEmotionSadLine } from "react-icons/ri";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page not found | Cinemify";
  }, []);

  return (
    <div className="bg-slate-800 flex justify-center items-center h-[80vh]">
      <div>
        <h1 className="text-center font-bold text-[4rem] sm:text-[5rem] text-yellow-500  ">
          4<RiEmotionSadLine className="inline-block" />4
        </h1>
        <h1 className="text-center font-bold text-[2rem] sm:text-[3rem] text-yellow-200">
          Page Not Found!
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
