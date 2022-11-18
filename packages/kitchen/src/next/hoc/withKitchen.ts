import { NextConfig } from "next/types";

const withKitchen = (nextConfig: NextConfig | any = {}) => {
  return {
    ...nextConfig,
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  };
};

export default withKitchen;
