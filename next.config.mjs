/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env : {
    NEXT_APIURL : "http://localhost:8080"
  }
};

export default nextConfig;
