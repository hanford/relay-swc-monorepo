const baseConfig = {
  experimental: {
    // allowing import typescript from outside of the rootDir (types)
    // https://github.com/vercel/next.js/issues/9474#issuecomment-810212174
    externalDir: true,
    esmExternals: "loose",
  },
};

module.exports = baseConfig;
