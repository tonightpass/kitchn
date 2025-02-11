import { SpeedInsights } from "@vercel/speed-insights/next";
import NextScript from "next/script";

const Script: React.FC = () => (
  <>
    <NextScript
      defer
      src={"https://eu.umami.is/script.js"}
      data-website-id={"e0f4f54b-03aa-4ac6-8d5f-577800efcea8"}
    />
    <SpeedInsights />
  </>
);

export default Script;
