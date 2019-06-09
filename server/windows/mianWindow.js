"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var MainWindow = /** @class */ (function () {
    function MainWindow() {
    }
    MainWindow.prototype.createWindow = function () {
        var _this = this;
        this.serve = process.argv.slice(1).some(function (val) { return val === '--serve'; });
        var electronScreen = electron_1.screen;
        var size = electronScreen.getPrimaryDisplay().workAreaSize;
        // Create the browser window.
        this.mainWindow = new electron_1.BrowserWindow({
            x: 0,
            y: 0,
            width: 800,
            height: size.height,
            minWidth: 350,
            minHeight: 650,
            webPreferences: {
                nodeIntegration: true
            }
        });
        if (this.serve) {
            require('electron-reload')(__dirname, {
                electron: require(__dirname + "/../../node_modules/electron")
            });
            this.mainWindow.loadURL('http://localhost:4200');
        }
        else {
            this.mainWindow.loadURL(url.format({
                pathname: path.join(__dirname, '/../../', 'dist/index.html'),
                protocol: 'file:',
                slashes: true
            }));
        }
        if (this.serve) {
            this.mainWindow.webContents.openDevTools();
        }
        this.mainWindow.webContents.on('did-finish-load', function () { });
        // Emitted when the window is closed.
        this.mainWindow.on('closed', function () {
            _this.mainWindow = null;
        });
    };
    return MainWindow;
}());
exports.MainWindow = MainWindow;
//# sourceMappingURL=mianWindow.js.map