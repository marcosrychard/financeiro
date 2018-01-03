let gulp = require('gulp');
let del = require('del');
let concat = require('gulp-concat');
let mainBowerFiles = require('main-bower-files');
let exists = require('path-exists').sync;
let gulpFilter = require('gulp-filter');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');

let path = "src/main/resources/static/";

//Deleta tudo dentro da pasta build
function clean() {
    return del([
        'src/main/resources/static/build/**/*'
    ])
}

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: path// Change this to your web root dir
        }
    });
    gulp.watch(path + "**/*.js", ['customJS']);
    gulp.watch(path + "**/*.css", ['customCSS']);
    gulp.watch(path + "**/*.scss", ['customCSS']);
    gulp.watch(path + "**/*.html").on("change", browserSync.reload);
});

gulp.task('customJS', () => {
    return gulp
        .src([
            path + 'views/*.module.js',
            path + 'views/shared/scripts/*.js',
            path + 'views/shared/**/*.factory.js',
            path + 'views/modules/**/*.module.js',
            path + 'views/shared/**/*.module.js',
            path + 'views/**/*.config.js',
            path + 'views/modules/**/*.service.js',
            path + 'views/modules/**/*.factory.js',
            path + 'views/shared/**/*.service.js',
            path + 'views/**/*.ctrl.js',
            path + 'views/**/*.component.js',
            path + 'views/shared/**/*.directive.js',
            path + 'views/shared/**/*.filter.js',
            path + 'views/financeiro.app.configs.js',
            path + 'views/financeiro.interceptor.factory.js',
            path + 'app.js'
        ])
        .pipe(concat('custom.js'))
        .pipe(gulp.dest(path + 'build/js'))
        .pipe(browserSync.stream());
});

//Carrega bibliotecas de JS
gulp.task('libsJS', () => {
    let jsFilter = gulpFilter([
        '**/*.js'
    ]);

    let bowerWithMin = mainBowerFiles().map(function (path) {
        let newPath = path.replace(/.([^.]+)$/g, '.min.js');
        return exists(newPath) ? newPath : path;
    });

    return gulp
        .src(bowerWithMin, {base: path + 'bower_components'})
        .pipe(jsFilter)
        .pipe(concat('appLibs.js'))
        .pipe(gulp.dest(path + 'build/js'))
        .pipe(browserSync.stream());
});

// Move font-awesome fonts folder to css compiled folder
gulp.task('icons', () => {
    return gulp.src('bower_components/components-font-awesome/fonts/**.*')
        .pipe(gulp.dest(path + 'build/fonts'));
});

//Carrega CSS alterados
gulp.task('customCSS', function () {

    return gulp
        .src([
            path + 'app.scss',
            path + 'views/*.scss',
            path + 'views/**/*.scss',
            path + 'views/*.css',
            path + 'views/**/*.css'
        ])
        .pipe(concat('custom.css'))
        .pipe(sass())
        .pipe(gulp.dest(path + 'build/css'))
        .pipe(browserSync.stream());

});

//Carrega bibliotecas Scss
gulp.task('libsScss', () => {
    gulp
        .src([
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/components-font-awesome/css/font-awesome.css'
        ])
        .pipe(sass())
        .pipe(gulp.dest(path + 'build/css'))
        .pipe(browserSync.stream());
});

gulp.task('chart', () => {
    gulp
        .src([
            'bower_components/chart.js/dist/Chart.min.js',
            'bower_components/angular-chart.js/dist/angular-chart.min.js'
        ])
        .pipe(concat('chart.js'))
        .pipe(gulp.dest(path + 'build/js'))
        .pipe(browserSync.stream());
});

//Carrega as fontes
gulp.task('fonts', () => {

    return gulp
        .src([
            'bower_components/bootstrap/dist/fonts/**/*.*'
        ])
        .pipe(gulp.dest(path + 'build/fonts'))
        .pipe(browserSync.stream());

});

//Execulta o Gulp
gulp.task('build', () => {
    clean().then(() => {
        gulp.run('customJS', 'libsJS', 'customCSS', 'libsScss', 'fonts', 'icons', 'chart');
    });
});

