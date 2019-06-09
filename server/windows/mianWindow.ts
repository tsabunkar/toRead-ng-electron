import { BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';

export class MainWindow {
  mainWindow;
  serve;

  createWindow() {
    this.serve = process.argv.slice(1).some(val => val === '--serve');

    const electronScreen = screen;
    const size = electronScreen.getPrimaryDisplay().workAreaSize;

    // Create the browser window.
    this.mainWindow = new BrowserWindow({
      x: 0,
      y: 0,
      width: 900,
      height: size.height,
      minWidth: 350,
      minHeight: 650,
      webPreferences: {
        nodeIntegration: true
      }
    });

    if (this.serve) {
      require('electron-reload')(__dirname, {
        electron: require(`${__dirname}/../../node_modules/electron`)
      });
      this.mainWindow.loadURL('http://localhost:4200');
    } else {
      this.mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, '/../../', 'dist/index.html'),
          protocol: 'file:',
          slashes: true
        })
      );
    }

    if (this.serve) {
      this.mainWindow.webContents.openDevTools();
    }

    this.mainWindow.webContents.on('did-finish-load', () => {});

    // Emitted when the window is closed.
    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });
  }
}
