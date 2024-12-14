/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_API_URL: process.env.BACKEND_API_URL,
  },
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: '/uploads/:path*',
          destination: `${process.env.BACKEND_API_URL}/uploads/:path*`,
        },
      ],
    }
  },
}

export default nextConfig
