// Modules to control application life and create native browser window
const { createPublicKey } = require('crypto')
const { app, BrowserWindow, Menu, Accelerator } = require('electron')
const path = require('path')

function createMainWindow () {
	// Create the main browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

	// and load the index.html of the app.
  win.loadFile('index.html')
  win.on('closed', function(){
    app.quit();
  })

  //build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  //Insert menu
  win.setMenu(mainMenu);
}

function createWindow (pathHtml) {
	// Create the main browser window.
  win = new BrowserWindow({
    width: 600,
    height: 450,
  })

	// and load the index.html of the app.
  win.loadFile(pathHtml)

  // Garbage collection
  win.on('close', function(){
    win = null;
  })

  // Remove menu bar
  win.setMenu(null)
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
})

// Create menu template
const mainMenuTemplate = [
  {
    label:'Tab maken',
    click(){
      // Create tab window.
      createWindow('views/tab.html');
    }
  },
  {
    label: 'Section maken',
    click(){
      // Create section window
      createWindow('views/section.html');
    }
  },
  {
    label: 'Graph maken',
    submenu:[
      {
        label: 'Demographic Chart',
        click(){
          // Create Demographic Chart
          createWindow('views/Charts/chartDemographic.html');
        }
      },
      {
        label: 'Densityplots Chart',
        click(){
          // Create Density plot Chart
          createWindow('views/Charts/chartDensityplots.html');
        }
      },
      {
        label: 'Distribution Chart',
        click(){
          // Create Distribution Chart
          createWindow('views/Charts/chartDistribution.html');
        }
      },
      {
        label: 'Dyads Chart',
        click(){
          // Create Dyads Chart
          createWindow('views/Charts/chartDyads.html');
        }
      },
      {
        label: 'List Chart',
        click(){
          // Create List Chart
          createWindow('views/Charts/chartList.html');
        }
      },
      {
        label: 'Multiplechoicebar Chart',
        click(){
          // Create Multiple choice bar Chart
          createWindow('views/Charts/chartMultiplechoicebar.html');
        }
      },
      {
        label: 'Multipletopicbar Chart',
        click(){
          // Create Multiple topic bar Chart
          createWindow('views/Charts/chartMultipletopicbar.html');
        }
      },
      {
        label: 'Simplebar Chart',
        click(){
          // Create Simple bar Chart
          createWindow('views/Charts/chartSimplebar.html');
        }
      },
      {
        label: 'Traffic Chart',
        click(){
          // Create Traffic Chart
          createWindow('views/Charts/chartTraffic.html');
        }
      },
      {
        label: 'Triads Chart',
        click(){
          // Create Triads Chart
          createWindow('views/Charts/chartTriads.html');
        }
      },
      {
        label: 'Wordcloud Chart',
        click(){
          // Create Wordcloud Chart
          createWindow('views/Charts/chartWordcloud.html');
        }
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
];

// If mac, add empty object to menu and set menu
if(process.platform == 'darwin'){
  mainMenuTemplate.unshift({});
  Menu.setApplicationMenu(mainMenu);
}

// Add develop tools
if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? 'Command+I' :
        'Ctrl+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      },
      {
        role:'reload'
      }
    ]
  });
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})