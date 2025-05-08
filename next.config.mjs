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
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    // webpackBuildWorker: true, // ❌ Removed due to instability
  },
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

const finalConfig = userConfig ? mergeDeep(baseConfig, userConfig) : baseConfig;

export default finalConfig;
