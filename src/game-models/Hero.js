// Наш герой.
const Boomerang = require('./Boomerang.js');
const chalk = require("chalk");
class Hero {


  constructor({ position } = {}) {

    this.skin = '🦊'; // можете использовать любые emoji '💃'

    this.positionX = 0;
    this.positionY = 2;

  }

  moveLeft() {
    // Идём влево.
    if (this.positionX === 0) {
      this.positionX === 0;
    } else {
      this.positionX -= 1;
    }
  }

  moveRight() {
    // Идём вправо.
    if (this.positionY === 50) {
      this.positionY === 50;
    } else {
      this.positionX += 1;
    }
  }

  moveUp() {
    // Идём вверх.
    if (this.positionY === 0) {
      this.positionY === 0;
    } else {
      this.positionY -= 1;
    }
  }

  moveDown() {
    // Идём вниз.
    if (this.positionY === 9) {
      this.positionY === 9;
    } else {
      this.positionY += 1;
    }
  }

  attack() {
    // this.boomerang.position = this.position + 1;
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log(chalk.red.bold('YOU ARE DEAD!🥃🥃🥃'));
    process.exit();
  }
}

module.exports = Hero;
