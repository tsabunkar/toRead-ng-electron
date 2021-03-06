import { app } from 'electron';
import { MainWindow } from './windows/mianWindow';

try {
  const mainWindow = new MainWindow();

  app.on('ready', mainWindow.createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow.mainWindow === null) {
      console.log('Now your app will start');
      mainWindow.createWindow();
    }
  });
} catch (e) {
  // Catch Error
  // throw e;
}
