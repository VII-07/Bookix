module.exports = {
    plugins: process.env.NODE_ENV === 'production'
      ? [
          'postcss-flexbugs-fixes',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009', // для підтримки старих версій flexbox
                grid: true, // додавання префіксів для CSS grid
              },
              stage: 3, // стадія підтримки CSS властивостей
              features: {
                'custom-properties': false, // вимикає підтримку custom properties
                'keyframes': true, // додавання префіксів для анімацій
              },
            },
          ],
        ]
      : [
          // No transformations in development
        ],
  }
  