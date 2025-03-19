/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_API_URL: process.env.BACKEND_API_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: '/uploads/:path*',
          destination: `${process.env.BACKEND_API_URL}/uploads/:path*`,
        },
        {
          source: '/rest/:path*',
          destination: `${process.env.BACKEND_API_URL}/rest/:path*`,
        }
      ],
    }
  },
}

export default nextConfig
