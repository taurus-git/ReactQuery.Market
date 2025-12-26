module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false, // ✅ Масштабирование!
          cleanupIDs: false, // ✅ Sprite IDs
        },
      },
    },
    {
      name: 'convertColors',
      params: {
        currentColor: true, // ✅ CSS color!
      },
    },
    'removeXMLProcInst', // <?xml>
    'removeComments',
    'removeMetadata',
  ],
};
