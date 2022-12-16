const { globalShortcut } = require('electron');
const useRobot = require('./robot');
const robot = useRobot();

 function registerGlobalShortcut(key = '`') {
    let run = false;
    const ret = globalShortcut.register(key, () => {
        console.log(key +'is pressed')
        run = !run;
        if(run === true) {
            console.log('start')
            robot.start()
            robot.run()
        } else {
            console.log('stop')
            robot.stop();
        }
      })
    
      if (!ret) {
        console.log('registration failed')
      }
    
      // Check whether a shortcut is registered.
      console.log(globalShortcut.isRegistered(key))
}
 
 function unregisterGlobalShortcut() {
     // Unregister a shortcut.
     globalShortcut.unregister(key)
  
     // Unregister all shortcuts.
     globalShortcut.unregisterAll()
}


module.exports = {
    unregisterGlobalShortcut,
    registerGlobalShortcut
}