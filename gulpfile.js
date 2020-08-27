let gulp = require("gulp");
let less = require("gulp-less");
let plumber = require("gulp-plumber");
let postcss = require("gulp-postcss");
let posthtml = require("gulp-posthtml");
let include = require("posthtml-include");
let autoprefixer = require("autoprefixer");
let minify = require("gulp-csso");
let imagemin = require("gulp-imagemin");
let webp = require("gulp-webp");
let svgstore = require("gulp-svgstore");
let svgmin = require("gulp-svgmin");
let rename = require("gulp-rename");
let server = require("browser-sync").create();
let del = require("del");

gulp.task("watch", function () {
  server.init({
    server: "docs",
  });

  gulp.watch("src/less/**/*.less", gulp.parallel("style"));
  gulp.watch("src/*.html", gulp.parallel("html"));
});

gulp.task("style", function () {
  return gulp
    .src("src/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("docs/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("docs/css"))
    .pipe(server.reload({ stream: true }));
});

gulp.task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(posthtml([include()]))
    .pipe(gulp.dest("docs"))
    .pipe(server.reload({ stream: true }));
});

gulp.task("images", function () {
  return gulp
    .src("src/img/raster/*.{png,jpg}")
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.mozjpeg({ quality: 95, progressive: true }),
      ])
    )
    .pipe(gulp.dest("docs/img"));
});

gulp.task("svg", function () {
  return gulp
    .src("src/img/vector/*.svg")
    .pipe(
      svgmin({
        plugins: [
          { cleanupNumericValues: { floatPrecision: 0 } },
          { convertColors: { names2hex: true, rgb2hex: true } },
          { cleanupAttrs: true },
          { inlineStyles: true },
          { removeDoctype: true },
          { removeXMLProcInst: true },
          { removeComments: true },
          { removeMetadata: true },
          { removeTitle: true },
          { removeDesc: true },
          { removeUselessDefs: true },
          { removeXMLNS: false },
          { removeEditorsNSData: true },
          { removeEmptyAttrs: true },
          { removeHiddenElems: true },
          { removeEmptyText: true },
          { removeEmptyContainers: true },
          { removeViewBox: true },
          { cleanupEnableBackground: true },
          { minifyStyles: true },
          { convertStyleToAttrs: true },
          { convertPathData: true },
          { convertTransform: true },
          { removeUnknownsAndDefaults: true },
          { removeNonInheritableGroupAttrs: true },
          { removeUselessStrokeAndFill: true },
          { removeUnusedNS: true },
          { prefixIds: false },
          { cleanupIDs: false },
          { cleanupListOfValues: true },
          { moveElemsAttrsToGroup: true },
          { moveGroupAttrsToElems: true },
          { collapseGroups: true },
          { removeRasterImages: true },
          { mergePaths: true },
          { convertShapeToPath: true },
          { convertEllipseToCircle: true },
          { sortAttrs: true },
          { sortDefsChildren: true },
          { removeDimensions: false },
          { removeAttrs: false },
          { removeAttributesBySelector: false },
          { removeElementsByAttr: false },
          { addClassesToSVGElement: false },
          { addAttributesToSVGElement: false },
          { removeOffCanvasPaths: false },
          { removeStyleElement: false },
          { removeScriptElement: false },
          { reusePaths: true },
        ],
      })
    )
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(gulp.dest("docs/img"));
});

gulp.task("webp", function () {
  return gulp
    .src("src/img/raster/*.{png,jpg}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("docs/img"));
});

gulp.task("sprite-advantages", function () {
  return gulp
    .src("src/img/sprite/advantage-*.svg")
    .pipe(
      svgstore({
        inlineSvg: true,
      })
    )
    .pipe(rename("advantages-sprite.svg"))
    .pipe(gulp.dest("docs/img"));
});

gulp.task("sprite-models", function () {
  return gulp
    .src("src/img/sprite/model-*.svg")
    .pipe(
      svgstore({
        inlineSvg: true,
      })
    )
    .pipe(rename("models-sprite.svg"))
    .pipe(gulp.dest("docs/img"));
});

gulp.task("sprite-services", function () {
  return gulp
    .src("src/img/sprite/service-*.svg")
    .pipe(
      svgstore({
        inlineSvg: true,
      })
    )
    .pipe(rename("services-sprite.svg"))
    .pipe(gulp.dest("docs/img"));
});

gulp.task("sprite-socials", function () {
  return gulp
    .src("src/img/sprite/social-*.svg")
    .pipe(
      svgstore({
        inlineSvg: true,
      })
    )
    .pipe(rename("socials-sprite.svg"))
    .pipe(gulp.dest("docs/img"));
});

gulp.task(
  "sprites",
  gulp.series(
    "sprite-advantages",
    "sprite-models",
    "sprite-services",
    "sprite-socials"
  )
);

gulp.task("clean", function () {
  return del("docs");
});

gulp.task("copy", function () {
  return gulp
    .src(["src/fonts/**/*.{woff,woff2}", "src/js/**", "src/css/**"], {
      base: "src",
    })
    .pipe(gulp.dest("docs"));
});

gulp.task(
  "build",
  gulp.series(
    "clean",
    "copy",
    "images",
    "webp",
    "svg",
    "sprites",
    gulp.parallel("style", "html")
  )
);
