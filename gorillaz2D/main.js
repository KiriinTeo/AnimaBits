const { app, BrowserWindow, screen, globalShortcut } = require('electron');
const path = require('path');

function createWindow() {
  const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;
  const windowWidth = 300;
  const windowHeight = 300;

  const win = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    x: screenWidth - windowWidth,
    y: screenHeight - windowHeight,
    frame: false,
    transparent: true,
    resizable: false,
    skipTaskbar: true,
    hasShadow: false,
    focusable: true,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.setAlwaysOnTop(false, 'normal');
  win.setVisibleOnAllWorkspaces(true);
  win.setIgnoreMouseEvents(false);
  win.loadFile('index.html');

  globalShortcut.register('Escape', () => {
    if (!win.isDestroyed()) win.close();
  });
}
const AutoLaunch = require('auto-launch');

const gorillazAutoLauncher = new AutoLaunch({
  name: 'Gorrilaz2D',
  path: app.getPath('exe'),
});

gorillazAutoLauncher.isEnabled().then((isEnabled) => {
  if (!isEnabled) {
    gorillazAutoLauncher.enable();
  }
}).catch((err) => {
  console.error('Erro ao configurar auto-launch:', err);
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
