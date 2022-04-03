// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    exclude: [
        '**/package-lock.json',
        '**/renovate.json',
        '**/yarn.lock',
        '**/yarn-error.log',
        '**/postcss.config.js',
        '**/tailwind.config.js',
        '**/snowpack.config.js',
        '**/node_modules/**/*',
        '**/LICENSE',
        '**/.idea/**/*',
    ],
    mount: {
        './assets': '/assets',
        './locales': '/locales',
        './': '/'
    },
    plugins: [
        '@snowpack/plugin-postcss'
    ],
    packageOptions: {
    },
    devOptions: {
        tailwindConfig: './tailwind.config.js',
    },
    buildOptions: {
        out: './dist',
        clean: false
    },
    optimize: {
        bundle: true,
        minify: true,
        target: 'es2018',
        entrypoints: ['./assets/js/index.js']
    },
};