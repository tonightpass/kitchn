import { NextConfig } from "next/types";

const withKitchenConfig = (nextConfig: NextConfig | any = {}) => {
  return {
    ...nextConfig,
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  };
};

export default withKitchenConfig;
