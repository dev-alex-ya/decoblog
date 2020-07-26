"use strict";

let gulp = require("gulp");
let server = require("browser-sync");

gulp.task("serve", function(){
    server.init({
        server: ".",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("**", server.reload);
});