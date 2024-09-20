// Наш герой.
const Boomerang = require('./Boomerang.js');
const chalk = require("chalk");
class Hero {

  constructor({ position } = {}) {

    this.skin = '🦊'; // можете использовать любые emoji '💃'
    this.position = position || 0;
    // this.boomerang = boomerang;
    this.scores = 0;

  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // this.boomerang.position = this.position + 1;
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log(chalk.red.bold('YOU ARE DEAD!💀'));
    process.exit();
  }
  // --------------------------------------------------------------------------
  
}


module.exports = Hero;
