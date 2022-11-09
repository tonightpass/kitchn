import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const IndexPage: NextPage = () => {
  const ref = React.useRef(null);

  console.log("ref", ref);

  return (
    <div>
      <Link ref={ref} href={"/button"}>
        Button
      </Link>
    </div>
  );
};

export default IndexPage;
