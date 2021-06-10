// Modules to control application life and create native browser window
const { createPublicKey } = require('crypto')
const { app, BrowserWindow, Menu, Accelerator } = require('electron')
const path = require('path')

function createWindow () {
	// Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

	// and load the index.html of the app.
  win.loadFile('index.html')
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  //build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  //Insert menu
  Menu.setApplicationMenu(mainMenu);
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

//Handle create tab
function createTabWindow(){
  	// Create tab window.
    const win = new BrowserWindow({
      width: 600,
      height: 450,
    })
  
    // and load the index.html of the app.
    win.loadFile('views/tab.html')
}

//Handle create section
function createSectionWindow(){
  // Create section window.
  const win = new BrowserWindow({
    width: 600,
    height: 450,
  })

  // and load the index.html of the app.
  win.loadFile('views/section.html')
}

// Create menu template
const mainMenuTemplate = [
  {
    label:'Tab maken',
    click(){
      createTabWindow();
    }
  },
  {
    label: 'Section maken',
    click(){
      createSectionWindow();
    }
  },
  {
    label: 'Graph maken',
    submenu:[
      {
        label: 'Graph 1'
      },
      {
        label: 'Graph 2'
      },
      {
        label: 'Graph 3'
      }
    ]
  },
  {
    label:'Sluiten',
    accelerator: process.platform == 'darwin' ? 'Command+Q' :
    'Ctrl+Q',
    click(){
      app.quit();
    }
  }
]

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

