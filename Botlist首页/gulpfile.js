var gulp = require("gulp")
var cssmin = require("gulp-cssmin")
var htmlmin = require("gulp-htmlmin")
var rename = require("gulp-rename")


// css 压缩
gulp.task("cssMin",function(){
	gulp.src("src/css/index.css")
		.pipe(cssmin())
		.pipe(rename({suffix:".min"}))
		.pipe(gulp.dest("desk/css"))
})

// html 压缩
gulp.task("htmlMin",function(){
	gulp.src("view/index.html")
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(rename({suffix:".min"}))
		.pipe(gulp.dest("desk"))
})