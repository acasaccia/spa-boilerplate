var gulp = require("gulp");
var util = require("gulp-util");
var rename = require("gulp-rename");
var run_sequence = require("run-sequence");

const PORT = process.env.PORT || 8080;

gulp.task("prebuild", (callback) => {
    run_sequence("copy_index", callback);
});

gulp.task("build", (callback) => {
    run_sequence("prebuild", "webpack", callback);
});

gulp.task("dev", (callback) => {
    run_sequence("prebuild", "webpack_dev_server", callback);
});

gulp.task("copy_index", () => {
    return gulp.src("src/index.html").pipe(gulp.dest("build"));
});

gulp.task("webpack", (callback) => {
    var webpack = require("webpack");
    var config = require("./webpack.config");
    webpack(config, (err, stats) => {
        if (err) {
            throw new util.PluginError("webpack", err);
        }
        util.log("[webpack]", stats.toString());
        callback();
    });
});

gulp.task("webpack_dev_server", (callback) => {
    var webpack = require("webpack");
    var webpack_dev_server = require("webpack-dev-server");
    var config = require("./webpack.config");
    config.entry.app.unshift("webpack-dev-server/client?http://localhost:" + PORT + "/");
    var compiler = webpack(config);
    var server = new webpack_dev_server(compiler, {
        contentBase: "build",
        publicPath: config.output.publicPath,
        filename: config.output.filename,
        stats: { colors: true },
        historyApiFallback: true
    }).listen(PORT, "localhost", (err) => {
        if (err) {
            throw new util.PluginError("webpack-dev-server", err);
        }
        callback();
    });
});
