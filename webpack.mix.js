const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.options({
//     hmrOptions: {
//         host: "localhost",
//         port: "8081",
//     },
// });

// mix.webpackConfig({
//     devServer: {
//         port: "8079",
//     },
// });

mix.js("resources/js/app.js", "public/js").postCss(
    "resources/css/app.css",
    "public/css",
    [require("tailwindcss")]
);

mix.browserSync({
    proxy: "localhost:8000",
    // files: ['**/*.js', '**/*.vue', '**/*.blade.php', '**/*.css', '**/*.scss'],
    notify: false,
});
