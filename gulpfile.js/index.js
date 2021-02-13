const gulp = require("gulp")
const hub = require("gulp-hub")

const tasks = new hub([
  "./tasks/bundle.js"
])
gulp.registry(tasks)

gulp.task("default", gulp.series(gulp.parallel("bundle")))