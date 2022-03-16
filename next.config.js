/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["res.cloudinary.com"]
  },
  i18n: {
    locales: ['en-US', 'de'],
    defaultLocale: 'en-US',
  }
}

module.exports = nextConfig
