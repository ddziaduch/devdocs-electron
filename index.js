const {app, BrowserWindow, Menu, MenuItem} = require('electron')

function createMenu(window) {
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Find',
          accelerator: 'CmdOrCtrl+F',
          click () {
            window.webContents.executeJavaScript(`document.querySelector('input[name=q]').focus()`)
          },
        },
      ],
    },
  ]
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

function createWindow() {
  const window = new BrowserWindow({
    width: 1024,
    height: 768,
  })

  window.loadURL('https://devdocs.io')
  createMenu(window);
}

app.on('ready', createWindow)
