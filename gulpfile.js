// gulpfile.js

// Gulp File

// ----------------------------------------------------------------------------------------------------

// Folders

const srcFolder = './src';
const distFolder = './dist';

// ----------------------------------------------------------------------------------------------------

// Packages

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const del = require('del');
const gulpFileInclude = require('gulp-file-include');
const gulpSass = require('gulp-sass')(require('sass'));
const gulpAutoprefixer = require('gulp-autoprefixer');
const gulpGroupCSSMediaQueries = require('gulp-group-css-media-queries');
const gulpCleanCSS = require('gulp-clean-css');
const gulpBabel = require('gulp-babel');
const gulpUglify = require('gulp-uglify');
const gulpRename = require('gulp-rename');
const gulpImagemin = require('gulp-imagemin');
const gulpSVGO = require('gulp-svgo');
const gulpSVGStore = require('gulp-svgstore');
const gulpTTFtoWOFF = require('gulp-ttf2woff');
const gulpTTFtoWOFF2 = require('gulp-ttf2woff2');

// ----------------------------------------------------------------------------------------------------

// Synchronize

const synchronize = () => {
    browserSync.init({
        server: {
            baseDir: distFolder,
        },
        notify: false,
    });
};

// ----------------------------------------------------------------------------------------------------

// Clean

const clean = () => {
    return del(distFolder);
};

// ----------------------------------------------------------------------------------------------------

// Markup

const markup = () => {
    return gulp.src([
        srcFolder + '/*.html',
    ])
    .pipe(gulpFileInclude())
    .pipe(gulp.dest(distFolder + '/'))
    .pipe(browserSync.stream());
};

// ----------------------------------------------------------------------------------------------------

// Styles

const styles = () => {
    return gulp.src([
        srcFolder + '/assets/styles/style.scss',
    ])
    .pipe(gulpSass())
    .pipe(gulpAutoprefixer({
        overrideBrowserslist:  ['last 5 versions'],
        cascade: true,
    }))
    .pipe(gulpGroupCSSMediaQueries())
    .pipe(gulpCleanCSS())
    .pipe(gulpRename('style.min.css'))
    .pipe(gulp.dest(distFolder + '/assets/styles/'))
    .pipe(browserSync.stream());
};

// ----------------------------------------------------------------------------------------------------

// Scripts

const scripts = () => {
    return gulp.src([
        srcFolder + '/assets/scripts/script.js',
    ])
    .pipe(gulpFileInclude())
    /* .pipe(gulpBabel({
        presets: ['@babel/env'],
    }))
    .pipe(gulpUglify()) */
    .pipe(gulpRename('script.min.js'))
    .pipe(gulp.dest(distFolder + '/assets/scripts/'))
    .pipe(browserSync.stream());
};

// ----------------------------------------------------------------------------------------------------

// Images

const images = () => {
    return gulp.src([
        srcFolder + '/assets/images/**/*.{jpeg,jpg,png,gif,svg,ico}',
    ])
    .pipe(gulpImagemin())
    .pipe(gulp.dest(distFolder + '/assets/images/'))
    .pipe(browserSync.stream());
};

// ----------------------------------------------------------------------------------------------------

// SVG Icons

const SVGIcons = () => {
    return gulp.src([
        srcFolder + '/assets/svg-sprite/svg-icons/icons/*.svg',
    ])
    .pipe(gulpSVGO({
        plugins: [
            { removeXMLNS: true, },
            { removeViewBox: false, },
            { sortAttrs: true, },
            { sortDefsChildren: true, },
            { removeDimensions: true, },
            { removeStyleElement: true, },
            { removeScriptElement: true, },
            { removeAttrs: { attrs: '(id|class|style|stroke|fill|data-name)', }, },
        ],
    }))
    .pipe(gulpSVGStore({
        inlineSvg: false,
    }))
    .pipe(gulp.dest(srcFolder + '/assets/svg-sprite/svg-icons/'))
    .pipe(browserSync.stream());
};

// ----------------------------------------------------------------------------------------------------

// SVG Sprite

const SVGSprite = () => {
    return gulp.src([
        srcFolder + '/assets/svg-sprite/svg-sprite.svg',
    ])
    .pipe(gulpSVGStore({
        inlineSvg: true,
    }))
    .pipe(gulp.dest(distFolder + '/assets/images/svg-sprite/'))
    .pipe(browserSync.stream());
};

// ----------------------------------------------------------------------------------------------------

// Files

const files = () => {
    return gulp.src([
        srcFolder + '/assets/files/**/*.*',
    ])
    .pipe(gulp.dest(distFolder + '/assets/files/'))
    .pipe(browserSync.stream());
};

// ----------------------------------------------------------------------------------------------------

// Fonts

const fonts = () => {
    gulp.src([
        srcFolder + '/assets/fonts/**/*.ttf',
    ])
    .pipe(gulpTTFtoWOFF())
    .pipe(gulp.dest(distFolder + '/assets/fonts/'))
    return gulp.src([
        srcFolder + '/assets/fonts/**/*.ttf',
    ])
    .pipe(gulpTTFtoWOFF2())
    .pipe(gulp.dest(distFolder + '/assets/fonts/'))
    .pipe(browserSync.stream());
};

// ----------------------------------------------------------------------------------------------------

// Watch

const watch = () => {
    gulp.watch([
        srcFolder + '/*.html',
        srcFolder + '/templates/*.html',
    ], markup);
    gulp.watch([
        srcFolder + '/assets/styles/**/*.scss',
    ], styles);
    gulp.watch([
        srcFolder + '/assets/scripts/**/*.js',
    ], scripts);
    gulp.watch([
        srcFolder + '/assets/images/**/*.{jpeg,jpg,png,gif,svg,ico}',
    ], images);
    gulp.watch([
        srcFolder + '/assets/files/**/*.*',
    ], files);
    gulp.watch([
        srcFolder + '/assets/fonts/**/*.ttf',
    ], fonts);
    gulp.watch([
        srcFolder + '/assets/svg-sprite/svg-icons/icons/*.svg',
    ], SVGIcons);
    gulp.watch([
        srcFolder + '/assets/svg-sprite/svg-sprite.svg',
    ], SVGSprite);
};

// ----------------------------------------------------------------------------------------------------

// Exports

exports.default = gulp.parallel(synchronize, watch, gulp.series(clean, markup, styles, scripts, images, SVGIcons, SVGSprite, files, fonts));

// ----------------------------------------------------------------------------------------------------