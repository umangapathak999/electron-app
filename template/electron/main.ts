import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

// ESM __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow: BrowserWindow | null = null;

const isDev = process.env.NODE_ENV === "development";

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      sandbox: false,
      preload: path.join(__dirname, "preload.js"), // load compiled CommonJS preload
      contextIsolation: true,
      nodeIntegration: false
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    const indexUrl = pathToFileURL(path.resolve(__dirname, "../dist/index.html")).toString();
    mainWindow.loadURL(indexUrl);  
  }
};

app.commandLine.appendSwitch("no-sandbox");

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

