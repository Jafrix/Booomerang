// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(trackLength) {
    this.skin = '🌀';

    this.positionX = 0;
    this.positionY = 2;

  }
   
  fly() {
  }

  moveLeft() {
    this.positionX -= 1; // Двигаем влево
  }

  moveRight() {
    this.positionX += 1; // Двигаем вправо
  }
}

module.exports = Boomerang;



