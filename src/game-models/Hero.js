// Наш герой.

class Hero {
  constructor() {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
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
    if (this.positionY === 30) {
      this.positionY === 30;
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
    if (this.positionY === 4) {
      this.positionY === 4;
    } else {
      this.positionY += 1;
    }
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
