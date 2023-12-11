const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");
const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    icon: './download.png',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      // worldSafeExecuteJavaScript:true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  isDev && win.webContents.openDevTools();
  win.loadFile("index.html");
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("notify", (e, message) => {
  new Notification({ title: "chat app", body: message }).show();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows.length === 0) {
    createWindow();
  }
});
