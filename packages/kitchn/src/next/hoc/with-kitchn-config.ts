import { NextConfig } from "next/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withKitchnConfig = (nextConfig: NextConfig | any = {}) => {
  return {
    ...nextConfig,
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  };
};

export default withKitchnConfig;
