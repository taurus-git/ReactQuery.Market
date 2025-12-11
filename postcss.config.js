const { MODE } = require( './config/types' );
module.exports = (ctx) => {
    const isProd = ctx.env === MODE.PROD;

    const common = [
        require('postcss-import'),
        require('autoprefixer'),
        require('postcss-preset-env')({stage: 1}),
    ];

    const dev = [];

    const prod = [
        require('cssnano'),
    ];

    return {
        plugins: [
            ...common,
            ...(isProd ? prod : dev),
        ]
    };
};