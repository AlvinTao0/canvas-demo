var gulp = require("gulp")
var cssmin = require("gulp-cssmin")
var htmlmin = require("gulp-htmlmin")
var rename = require("gulp-rename")
var jsmin = require("gulp-uglify")


// css 压缩
gulp.task("cssMin",function(){
	gulp.src("src/css/*.css")
		.pipe(cssmin())
		.pipe(rename({suffix:".min"}))
		.pipe(gulp.dest("desk/css"))
})

// html 压缩
gulp.task("htmlMin",function(){
	gulp.src("view/*.html")
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(rename({suffix:".min"}))
		.pipe(gulp.dest("desk"))
})

// js 压缩
gulp.task("jsMin",function(){
	gulp.src("src/js/*.js")
		.pipe(jsmin())
		.pipe(rename({suffix:".min"}))
		.pipe(gulp.dest("desk/js"))
})