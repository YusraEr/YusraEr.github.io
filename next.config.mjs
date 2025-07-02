import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  webpack: (config, { isServer }) => {
    // Handle PrismJS components loading
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    
    // Ignore optional PrismJS components that might cause issues
    config.resolve.alias = {
      ...config.resolve.alias,
      'prismjs/components': false,
    };
    
    return config;
  },
  // GitHub Pages configuration
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Uncomment and set if deploying to a subdirectory
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
};

export default withMDX(nextConfig);
