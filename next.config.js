/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
// module.exports = {
//   rewrites() {
//     return [
//       {
//         source: "/edge/api/authentication/:path*",
//         destination: "/api/auth/:path*",
//       },
//     ];
//   },
// };
module.exports = nextConfig;
