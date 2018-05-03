const {app, BrowserWindow, Menu, MenuItem} = require('electron')

let window

app.setName('DevDocs.app')

function createMenu(window) {
  const template = [
    {
      label: app.getName(),
      submenu: [
        {
          label: 'Find',
          accelerator: 'CmdOrCtrl+F',
          click () {
            window.webContents.executeJavaScript(`document.querySelector('input[name=q]').focus()`)
          },
        },
        {role: 'quit'},
      ],
    },
  ]
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

function createWindow() {
  window = new BrowserWindow({
    width: 1024,
    height: 768,
    center: true,

  })

  window.loadURL('https://devdocs.io')
  createMenu(window)

  window.on('closed', () => {
    window = undefined
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (!window) {
    createWindow()
  }
})
