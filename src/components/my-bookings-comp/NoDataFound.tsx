import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const NoDataFound = () => {
  return (
    <div className="h-[20vh] w-full flex justify-center items-center flex-col">
      <h2 className="text-xl">No Data Found</h2>
      <p className="text-green-400 mt-3">
      <ArrowBigLeft className="inline size-4 mr-1"/>
        <Link href={'/explore-all-destinations'}>
      Go to Destinations to select
      </Link>
      </p>
    </div>
  );
};

export default NoDataFound;
