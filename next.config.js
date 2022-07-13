/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: {
		images: {
			unoptimized: true,
		},
	},
}

module.exports = nextConfig;
