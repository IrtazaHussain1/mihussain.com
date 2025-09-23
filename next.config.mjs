import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
		turbo: {
			rules: {
				"*.svg": {
					loaders: ["@svgr/webpack"],
					as: "*.js",
				},
			},
		},
	},
	// Enable React 19 features
	reactStrictMode: true,
	// Optimize for Node.js 22
	swcMinify: true,
	// Enable modern JavaScript features
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
};

export default withContentlayer(nextConfig);
