import path from 'path';

/** @type {import('next').NextConfig} */
const baseConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // Disable parallel build options
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },
  output: 'export',  // <-- Add this line for static export
};

let userConfig = undefined;

try {
  // Try ESM config first
  userConfig = (await import('./v0-user-next.config.mjs')).default;
} catch (esmError) {
  try {
    // Fallback to CommonJS
    userConfig = (await import('./v0-user-next.config')).default;
  } catch (cjsError) {
    console.warn('⚠️ No custom user Next.js config found. Using base configuration.');
  }
}

const mergeDeep = (target, source) => {
  for (const key of Object.keys(source)) {
    if (
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      typeof target[key] === 'object'
    ) {
      target[key] = mergeDeep({ ...target[key] }, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
};

// Use `import.meta.url` to get the current directory in an ESM environment
const getDirname = (url) => {
  const fileURL = new URL(url);
  return path.dirname(fileURL.pathname);
};

const finalConfig = userConfig ? mergeDeep(baseConfig, userConfig) : baseConfig;

// Add the webpack alias setup to resolve the @ alias
finalConfig.webpack = (config, { isServer }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(getDirname(import.meta.url)), // Use import.meta.url to resolve path
  };
  return config;
};

console.log(finalConfig);

export default finalConfig;
