/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,
  swcMinify:true,
  experimental: {
    appDir: true,
  },
  transpilePackages: ["@mui/system", "@mui/material", "@mui/icons-material"],
}

module.exports = nextConfig
