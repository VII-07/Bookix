module.exports = {
    plugins: process.env.NODE_ENV === 'production'
      ? [
          'postcss-flexbugs-fixes',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009', 
                grid: true, 
              },
              stage: 3,
              features: {
                'custom-properties': false, 
                'keyframes': true, 
              },
            },
          ],
        ]
      : [
          // No transformations in development
        ],
  }
  