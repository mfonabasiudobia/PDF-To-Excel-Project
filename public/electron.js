const { BrowserWindow, app, Menu } = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow(){
	win = new BrowserWindow({
		webPreferences : {
			nodeIntegration : false
		},
		fullscreenale : true,
		resizable : false,
		transparent : false
	});

	win.maximize();

	if(app.isPackaged){
		win.loadFile(path.join(__dirname, '../build/index.html'))
	}else{
		win.loadURL("http://localhost:3000");
	}
	
	// win.webContents.openDevTools();

	win.on("closed", () => {
		win = null;
	});

}


app.whenReady().then(() => {
	createWindow();
});

app.on("window-all-closed", () => {
	if(process.platform != 'darwin')
		 app.quit();
})

app.on("activate", () => {
	if(win === null)
		 createWindow();
})