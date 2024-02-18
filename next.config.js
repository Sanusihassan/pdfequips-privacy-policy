/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["pdfequips-navbar"]);

const nextConfig = withTM({
  reactStrictMode: true,
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/privacy-policy" : "",
});

module.exports = nextConfig;