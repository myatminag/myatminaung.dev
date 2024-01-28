/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'myatminag.s3.ap-southeast-1.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
