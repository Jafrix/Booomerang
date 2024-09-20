// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(trackLength) {
    this.skin = '🌀';
    this.position = 0;
    this.trackLength = trackLength;
  }

  fly() {
    this.moveRight();
    this.moveLeft();
    const distance = 10; // дистанция полета бумеранга

    for (let i = 0; i <= distance; i += 1) {
      setTimeout(() => moveRight(1), 30 * i); // запускаем бумеранг на заданное расстояние
    }

    for (let i = 0; i <= distance; i += 1) {
      setTimeout(() => this.moveLeft(1), 30 * (distance + 1)); // возвращаем бумеранг на заданное расстояние
    }

    setTimeout(() => this.reset(), 30 * (distance * 2)); // сбрасываем позицию бумеранга после возвращения

  }


  reset() {
    this.position = -1; // сброс позиции бумеранга
  }
  
  moveLeft() {
    // Идём влево.
    this.position -= 1;
    this.position -= distance;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    this.position += distance;
  }
}

module.exports = Boomerang;



