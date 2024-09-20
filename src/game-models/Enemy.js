// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.positionX = 60;
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
    console.log('Enemy is dead!');
    process.exit();
  }
}

module.exports = Enemy;
