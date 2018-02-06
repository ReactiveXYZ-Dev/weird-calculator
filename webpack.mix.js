let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining webpack based tasks.
 */

mix.js('src/js/app.js', 'public/assets/js')
   .sass('src/sass/app.scss', 'public/assets/css');
