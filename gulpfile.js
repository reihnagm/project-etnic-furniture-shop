const gulp = require("gulp"),
      concat = require("gulp-concat"),
      sass = require("gulp-sass"),
      connect = require("gulp-connect"),
      imagemin = require("gulp-imagemin"),
      uglify = require("gulp-uglify-es");

gulp.task("styles", ()  => {
  return gulp.src("public/assets-dev/sass/**/*")
  .pipe(sass({
    outputStyle: "compressed"
  }))
  .pipe(concat("main.min.css"))
  .pipe(gulp.dest("public/assets/css/"))
  .pipe(connect.reload());
});
gulp.task("pug", ()  => { 
  return gulp.src("functions/views/index.pug")
  .pipe(connect.reload());
});
gulp.task("connect", () =>  {
  connect.server({
    livereload: true
  });
  connect.serverClose();
});
gulp.task("compressedImg", () => {
  return gulp.src("public/assets-dev/images/*")
  .pipe(imagemin())
  .pipe(gulp.dest("public/assets/images"))
  .pipe(connect.reload());
});
gulp.task("watch",()  => {
  gulp.watch("public/assets-dev/sass/**/*", gulp.parallel("styles"));
  gulp.watch("functions/views/index.pug", gulp.parallel("pug"));
});
gulp.task("serve",
  gulp.parallel(
    "styles",
    "pug",
    "compressedImg",
    "connect",
    "watch"
  )
);
gulp.task("default", gulp.series("serve"));
