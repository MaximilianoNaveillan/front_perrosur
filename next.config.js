/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MAPBOX_TOKEN:
      'pk.eyJ1IjoibWF4bmF2ZWlsbGFuIiwiYSI6ImNsMGlpcGg3ODAyejgzcGtjcXE3NW5lMTkifQ.zBrBdAmdc22oepPkr1cdqA',
    BASE_URL: process.env.URL,
    SERVER_URL: process.env.SERVER_URL,
  },
  images: {
    domains: [
      process.env.SERVER_DOMAIN,
      'lh3.googleusercontent.com',
      'localhost',
      'tallerperrosur.cl',
    ],
    disableStaticImages: true,
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
};

module.exports = nextConfig;
