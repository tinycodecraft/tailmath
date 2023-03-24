/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["@mui/system", "@mui/material", "@mui/icons-material"],
}

module.exports = nextConfig
