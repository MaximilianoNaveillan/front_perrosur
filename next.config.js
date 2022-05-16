/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MAPBOX_TOKEN:
      'pk.eyJ1IjoibWF4bmF2ZWlsbGFuIiwiYSI6ImNsMGlpcGg3ODAyejgzcGtjcXE3NW5lMTkifQ.zBrBdAmdc22oepPkr1cdqA',
    BASE_URL: process.env.URL,
    SERVER_URL: process.env.SERVER_URL,
  },
  images: {
    domains: [process.env.SERVER_DOMAIN, 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
