const chalkAnimation = require('chalkercli');
let str = String.raw`DũngKon`;
let logo = String.raw`
 __      __   _      _        _ 
 \ \    / /__| |__  /_\  _ __(_)
  \ \/\/ / -_) '_ \/ _ \| '_ \ |
   \_/\_/\___|_.__/_/ \_\ .__/_|
                        |_|     
`;
const karaoke = chalkAnimation.karaoke(str);
const rainbow = chalkAnimation.rainbow(logo);
setTimeout(async () => {
  await karaoke.start()
  await rainbow.start()
  console.clear()
}, 1000);
setTimeout(async() => {
    karaoke.stop()
    rainbow.stop()
    require('./app/main.js')
}, 3650);