const electron = require('electron');

const protocol = electron.protocol;
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

const SCHEMA = 'electron';
const SCHEMA_URL = `${SCHEMA}://local`;
const sqlite3 = require('sqlite3');

let mainWindow;

function createWindow() {
  protocol.registerFileProtocol(SCHEMA, (request, callback) => {
    const url = request.url.substr(SCHEMA_URL.length + 1);
    callback({ path: path.normalize(`${__dirname}/${url}`) })
  }, (error) => {
    if (error) console.error('Failed to register protocol')
  })

  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  mainWindow.loadURL(`${SCHEMA_URL}/index.html`);

  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  //if (process.platform === 'darwin') {
    app.quit()
  //}
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});

exports.sqlite3 = sqlite3;
