
(function InitializeNodeWebkitUI () {
  console.log('[ ] Init NodeWebkit')
  var gui = require('nw.gui');
  var tray = new gui.Tray({title: 'Pasteboard', icon: 'images/nwgui/tray-icon.png'});
  var trayMenu = new gui.Menu();
  trayMenu.append(new gui.MenuItem({type: 'checkbox', label: 'Always On Top'}));
  tray.menu = trayMenu;
})()
