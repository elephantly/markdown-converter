var gulp     = require('gulp');
var nunjucks = require('gulp-nunjucks');
var marked   = require('gulp-marked');
var slugify  = require('slug');
var rename   = require('gulp-rename');
var data     = require('gulp-data');
var insert   = require('gulp-insert');


var myRenderer                        = {
    heading: function (text, level) {
        return '<h' + level + ' class ="anchor" id="' + slugify(text.toLowerCase()) + '">' + text + '</h' + level + '>';
    }
}

gulp.task('convert', function () {
    return gulp.src('README.md')
    .pipe(marked({
        renderer: myRenderer,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
    }))
    .pipe(rename("index.njk"))
    .pipe(gulp.dest('./'));
});

gulp.task('compile', function() {
    return gulp.src('index.njk')
    .pipe(data(
        function(file) {
          return require('./parameters.json');
        }
    ))
    .pipe(nunjucks.compile())
    .pipe(rename("index.html"))
    .pipe(gulp.dest('./'));
});

gulp.task('site', function() {
    return gulp.src('README.md')
    .pipe(marked({
        renderer: myRenderer,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
    }))
    .pipe(insert.wrap('{% extends \'layout.njk\' %}{% block content %}', '{% endblock %}'))
    .pipe(data(
        function(file) {
          return require('./parameters.json');
        }
    ))
    .pipe(nunjucks.compile())
    .pipe(rename("index.html"))
    .pipe(gulp.dest('./'));
});
