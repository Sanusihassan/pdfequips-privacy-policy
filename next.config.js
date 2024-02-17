/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["pdfequips-navbar"]);

const nextConfig = withTM({
  reactStrictMode: true,
  output: "export",
});

module.exports = nextConfig;