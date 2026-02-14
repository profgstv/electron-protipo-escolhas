const { app, BrowserWindow, ipcMain } = require('electron');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        icon: './src/public/img/icon.png',
        autoHideMenuBar: true,
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    mainWindow.loadFile('./src/views/index.html');
}

ipcMain.on('close', () => {
    app.quit();
})

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})