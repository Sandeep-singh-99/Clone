import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Treat these packages as external on the server so they don't
  // get bundled into the SSR bundle (they only run on the client)
  serverExternalPackages: ['three'],
};

export default nextConfig;
