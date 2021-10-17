// const chokidar = window.require("chokidar");
const chokidar = require("chokidar");

/*
import chokidar from "chokidar";
import fs from "fs";
import path from "path";
import os from "os";
*/

/*
const watcher = chokidar.watch(".", {
    // ignored: /(^|[\/\\])\../, // ignore dotfiles
});
*/

chokidar.watch('.').on('all', (event, path) => {
    console.log(event, path);
});
