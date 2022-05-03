/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAPBOX_ACCESS_TOKEN:
      "pk.eyJ1IjoibWF4bmF2ZWlsbGFuIiwiYSI6ImNsMGlpcGg3ODAyejgzcGtjcXE3NW5lMTkifQ.zBrBdAmdc22oepPkr1cdqA",
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
