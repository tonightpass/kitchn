const withKitchen = (nextConfig = {}) => {
  return {
    ...nextConfig,
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  };
};

export default withKitchen;
