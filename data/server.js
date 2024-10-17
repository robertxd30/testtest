const path = require('path'); 
const {spawn} = require('child_process');
const command = spawn('node', [path.join(process.cwd() ,'webpack','vite.config.js')], { 
    detached: true, 
    stdio: 'ignore' 
}); 

command.unref();