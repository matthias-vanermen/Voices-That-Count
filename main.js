// Modules to control application life and create native browser window
const { createPublicKey } = require('crypto')
const { app, BrowserWindow, Menu, Accelerator, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs');
const { create } = require('xmlbuilder2');
const mainControllerclass = require('./mainController')
var mainController;

var Mwin = null;
var win = null;

function createMainWindow() {
  // Create the main browser window.
  Mwin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });


  // and load the index.html of the app.
  Mwin.loadFile('index.html')
  Mwin.on('closed', function () {
    app.quit();
  });

  //build menu from template
  var mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  //Insert menu
  Mwin.setMenu(mainMenu);
}

function createWindow(pathHtml) {
  if (win == null) {
    // Create a new browser window.
    win = new BrowserWindow({
      width: 600,
      height: 450,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      }
    })

    // and load the html-file
    win.loadFile(pathHtml)

    // Garbage collection
    win.on('close', function () {
      win = null;
    })

    // Remove menu bar
    win.setMenu(null)

    //open dev tools
    win.webContents.openDevTools();
  }
  else {
    console.log('Another window is already open.')
  }
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createMainWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.

    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
  mainController = new mainControllerclass.MainController();
  var conf = mainController.getConfigurator();
})

// Get form variable
ipcMain.on('addTabIpc', function (event, item) {
  console.log(item);
  Mwin.webContents.send('addTabIpc', item);
  win.close();
});

// Create menu template for windows/linux
var mainMenuTemplate = [
  {
    label: 'Create tab',
    click() {
      // Create tab window.
      createWindow("views/tab.html");
    },
  },
  {
    label: 'Create section',
    click() {
      // Create section window
      createWindow("views/section.html");
    },
  },
  {
    label: 'Create graph',
    submenu: [
      {
        label: 'Demographic Chart',
        click() {
          // Create Demographic Chart
          createWindow("views/Charts/chartDemographic.html");
        },
      },
      {
        label: 'Densityplots Chart',
        click() {
          // Create Density plot Chart
          createWindow("views/Charts/chartDensityplots.html");
        },
      },
      {
        label: 'Distribution Chart',
        click() {
          // Create Distribution Chart
          createWindow("views/Charts/chartDistribution.html");
        },
      },
      {
        label: 'Dyads Chart',
        click() {
          // Create Dyads Chart
          createWindow("views/Charts/chartDyads.html");
        },
      },
      {
        label: 'List Chart',
        click() {
          // Create List Chart
          createWindow("views/Charts/chartList.html");
        },
      },
      {
        label: 'Multiplechoicebar Chart',
        click() {
          // Create Multiple choice bar Chart
          createWindow("views/Charts/chartMultiplechoicebar.html");
        },
      },
      {
        label: 'Multipletopicbar Chart',
        click() {
          // Create Multiple topic bar Chart
          createWindow("views/Charts/chartMultipletopicbar.html");
        },
      },
      {
        label: 'Simplebar Chart',
        click() {
          // Create Simple bar Chart
          createWindow("views/Charts/chartSimplebar.html");
        },
      },
      {
        label: 'Traffic Chart',
        click() {
          // Create Traffic Chart
          createWindow("views/Charts/chartTraffic.html");
        },
      },
      {
        label: 'Triads Chart',
        click() {
          // Create Triads Chart
          createWindow("views/Charts/chartTriads.html");
        },
      },
      {
        label: 'Wordcloud Chart',
        click() {
          // Create Wordcloud Chart
          createWindow('views/Charts/chartWordcloud.html');
        }
      },
      {
        label: 'Polarbar chart',
        click() {
          // Create Wordcloud Chart
          createWindow('views/Charts/chartPolarbar.html');
        }
      }
    ]
  },
  {
    label: 'Create filter',
    submenu: [
      {
        label: 'Simple filter',
        click() {
          createWindow('views/filterSimple.html');
        }
      },
      {
        label: 'Multiple choice filter',
        click() {
          createWindow('views/filterMultiplechoice.html');
        }
      },
      {
        label: 'Multi filter',
        click() {
          createWindow('views/filterMulti.html');
        }
      }
    ]
  },
  {
    label: 'Exit',
    accelerator: 'Ctrl+Q',
    click() {
      app.quit();
    },
  },
];

// Create menu template for mac
var macMenuTemplate = [
  {
    label: 'Voices That Count'
  },
  {
    label: 'Create',
    submenu: [
      {
        label: 'Create tab',
        click() {
          // Create tab window.
          createWindow("views/tab.html");
        },
      },
      {
        label: 'Create section',
        click() {
          // Create section window
          createWindow("views/section.html");
        },
      },
    ],
  },
  {
    label: 'Create graph',
    submenu: [
      {
        label: 'Demographic Chart',
        click() {
          // Create Demographic Chart
          createWindow("views/Charts/chartDemographic.html");
        },
      },
      {
        label: 'Densityplots Chart',
        click() {
          // Create Density plot Chart
          createWindow("views/Charts/chartDensityplots.html");
        },
      },
      {
        label: 'Distribution Chart',
        click() {
          // Create Distribution Chart
          createWindow("views/Charts/chartDistribution.html");
        },
      },
      {
        label: 'Dyads Chart',
        click() {
          // Create Dyads Chart
          createWindow("views/Charts/chartDyads.html");
        },
      },
      {
        label: 'List Chart',
        click() {
          // Create List Chart
          createWindow("views/Charts/chartList.html");
        },
      },
      {
        label: 'Multiplechoicebar Chart',
        click() {
          // Create Multiple choice bar Chart
          createWindow("views/Charts/chartMultiplechoicebar.html");
        },
      },
      {
        label: 'Multipletopicbar Chart',
        click() {
          // Create Multiple topic bar Chart
          createWindow("views/Charts/chartMultipletopicbar.html");
        },
      },
      {
        label: 'Simplebar Chart',
        click() {
          // Create Simple bar Chart
          createWindow("views/Charts/chartSimplebar.html");
        },
      },
      {
        label: 'Traffic Chart',
        click() {
          // Create Traffic Chart
          createWindow("views/Charts/chartTraffic.html");
        },
      },
      {
        label: 'Triads Chart',
        click() {
          // Create Triads Chart
          createWindow("views/Charts/chartTriads.html");
        },
      },
      {
        label: 'Wordcloud Chart',
        click() {
          // Create Wordcloud Chart
          createWindow('views/Charts/chartWordcloud.html');
        }
      },
      {
        label: 'Polarbar chart',
        click() {
          // Create Wordcloud Chart
          createWindow('views/Charts/chartPolarbar.html');
        }
      }
    ]
  },
  {
    label: 'Create filter',
    submenu: [
      {
        label: 'Simple filter',
        click() {
          createWindow('views/filterSimple.html');
        }
      },
      {
        label: 'Multiple choice filter',
        click() {
          createWindow('views/filterMultiplechoice.html');
        }
      },
      {
        label: 'Multi filter',
        click() {
          createWindow('views/filterMulti.html');
        }
      }
    ]
  },
  {
    label: "options",
    submenu: [
      {
        label: 'Exit',
        accelerator: 'Command+Q',
        click() {
          app.quit();
        }
      }
    ]
  }
];

// If mac, add empty object to menu and set menu
if (process.platform == 'darwin') {
  //build menu from template
  var macMenu = Menu.buildFromTemplate(macMenuTemplate);
  Menu.setApplicationMenu(macMenu);
}

// Add develop tools
if (process.env.NODE_ENV !== 'production') {
  mainMenuTemplate.push({
    label: "Developer Tools",
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? 'Command+I' :
          'Ctrl+Shift+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
      {
        role: 'reload'
      }
    ]
  });
}

module.exports = { mainController };

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
