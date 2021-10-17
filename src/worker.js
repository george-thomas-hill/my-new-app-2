const chokidar = window.require("chokidar");

const watcher = chokidar.watch(".", {
    // ignored: /(^|[\/\\])\../, // ignore dotfiles
});
