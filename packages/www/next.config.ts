import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: 'export',
	transpilePackages: ["@t5mm-com/shared"],
};

export default nextConfig;
