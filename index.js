// run `node index.js` in the terminal
const cols = require('./config.js');
console.log('initiallizing...');

var sun = {
    mass: 9.4,
    name: 'sun',
}

class planet {
  constructor(speed, mass, name) {
    this.name = name;
    this.speed = speed;
    this.mass = mass
    this.periapsis = Math.floor(speed/sun.mass*50-this.speed)
    this.apoapsis = Math.floor(speed/sun.mass*50+this.speed)
    this.distAwayFromSun = this.periapsis;
  }
  //calculating pull
  init(thing){
    while(thing != mes){
      var mes = 0
      for(i = this.periapsis; i != this.apoapsis; i++){
        this.distAwayFromSun++
        console.table( this.distAwayFromSun)
        console.clear()
      }
      for(i = this.apoapsis; i != this.periapsis; i--){
        this.distAwayFromSun--
        console.table( this.distAwayFromSun)
        console.clear()
      }
    }
    mes++
  }
}

var kerbin = new planet(100, 3, 'kerbin')
kerbin.init(2)
