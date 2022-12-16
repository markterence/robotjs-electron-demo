const robot = require('@jitsi/robotjs');

function immediateSetInterval(func, interval) {
    func();
    return setInterval(func, interval);
}
function wait(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t);
    });
}

function keyDown(key) {
    robot.keyToggle(key, 'down')
}
function keyUp(key) {
    robot.keyToggle(key, 'up')
}

module.exports = function useRobot () {
    let isRunning = false;
    function start () {
        isRunning = true;
    }
    function run() { 
        robot.setKeyboardDelay(0)
        immediateSetInterval(async () => {
            if(isRunning){ 
                // robot.mouseToggle('down');
        
                // setTimeout(function() {
                //     robot.mouseToggle('up')
                //     // robot.keyTap(String.fromCharCode(100))
                // }, 800)
                
                console.log('Press "A" Start')
                console.time('[Press "A"]')
                keyDown('a')
                await wait(2000);
                keyUp('a')
                console.log('Press "A" End')
                console.timeEnd('[Press "A"]')
            
                console.time('[pause]')
                await wait(800);
                console.timeEnd('[pause]')

                console.log('Press "D" Start')
                console.time('[Press "D"]')
                keyDown('d')
                await wait(2000);
                keyUp('d')
                console.log('Press "D" End')
                console.timeEnd('[Press "D"]')
            }
        }, 2000+2000+800+1000)
    }

    function stop() {
        isRunning = false;
    }

    return {
        run, 
        stop,
        start
    }
}