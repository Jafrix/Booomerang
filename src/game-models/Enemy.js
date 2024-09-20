// Враг.
const chalk = require("chalk");
class Enemy {
  constructor() {
    this.generateSkin();

    this.positionX = 100;
    this.positionY = 2;

  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    if (this.positionX === 0) {
      this.positionX = 40;
    } else {
      this.positionX -= 1;
    }
  }

  die() {
    this.positionX += 1;
    // this.positionY = '?';
    console.log(chalk.red.bold('Enemy is dead!🐒🐒🐒'));
    // console.log(`\n\n`)
    process.exit();
  }
}

module.exports = Enemy;
