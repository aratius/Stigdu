const gulp = require("gulp")
const webpackStream = require("webpack-stream")
const webpack = require("webpack")

const CONFIG = require("./config")
const webpackConfig = require("./webpack.config")

const bundle = () => {
  console.log('bundle start')
  return webpackStream(webpackConfig, webpack)
  .pipe(gulp.dest(CONFIG.PATHS.js.dest))
}

gulp.task("default", bundle)