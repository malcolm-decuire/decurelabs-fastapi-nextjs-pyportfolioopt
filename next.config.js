// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   rewrites: async () => {
//     return [
//       {
//         source: "/api/py/:path*",
//         destination:
//           process.env.NODE_ENV === "development"
//             ? "http://127.0.0.1:8000/api/py/:path*"
//             : "/api/",
//       },
//       {
//         source: "/docs",
//         destination:
//           process.env.NODE_ENV === "development"
//             ? "http://127.0.0.1:8000/api/py/docs"
//             : "/api/py/docs",
//       },
//       {
//         source: "/openapi.json",
//         destination:
//           process.env.NODE_ENV === "development"
//             ? "http://127.0.0.1:8000/api/py/openapi.json"
//             : "/api/py/openapi.json",
//       },
//     ];
//   },
// };

// module.exports = nextConfig;






/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/py/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/py/:path*"
            : "/api/",
      },
      {
        source: "/docs",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/py/docs"
            : "/api/py/docs",
      },
      {
        source: "/openapi.json",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/py/openapi.json"
            : "/api/py/openapi.json",
      },
    ];
  },
  webpack: (config) => {
    // Add polyfill for buffer
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      })
    );

    // Ensure fallback for Node.js modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      buffer: require.resolve("buffer/"),
    };

    return config;
  },
};

module.exports = nextConfig;
