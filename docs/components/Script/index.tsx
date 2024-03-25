import NextScript from "next/script";

const Script: React.FC = () => (
  <>
    <NextScript
      defer
      src={"https://eu.umami.is/script.js"}
      data-website-id={"5be27e80-d091-4dfb-982f-86086f9f716e"}
    />
  </>
);

export default Script;
