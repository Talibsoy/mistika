import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@google/generative-ai", "bcryptjs"],
};

export default nextConfig;
