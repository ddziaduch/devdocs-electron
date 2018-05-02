const {app, BrowserWindow, Menu, MenuItem} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
  win = new BrowserWindow({ width: 1024, height: 768 });

  win.loadURL('https://devdocs.io');

  win.on('closed', () => {
    win = undefined;
  });

  const menu = new Menu();
  menu.append(new MenuItem({
    label: 'Find',
    accelerator: 'Cmd+F',
    click: () => { document.querySelector('input[name=q]').focus(); }
  }));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!win) {
    createWindow();
  }
});
