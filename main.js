var _a = require("electron"), app = _a.app, BrowserWindow = _a.BrowserWindow;
var createWindow = function () {
    var win = new BrowserWindow({
        width: 800,
        height: 600,
    });
    win.loadFile("index.html");
};
app.whenReady().then(function () {
    createWindow();
});
