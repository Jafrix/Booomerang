// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 0;
  }

 
  // -------------------------------------------------------------------------------
  

  fly() {
    // Запускаем движение бумеранга
    this.move();
  }

  move() {
    // Здесь можно добавить логику для перемещения
    setInterval(() => {
      if (this.position < this.trackLength - 1 && this.direction === 1) {
        this.moveRight();
      } else if (this.position > 0 && this.direction === -1) {
        this.moveLeft();
      } else {
        // Меняем направление движения
        this.direction *= -1;
      }

      console.log(`Бумеранг на позиции: ${this.position} ${this.skin}`);
      
      // Здесь можно добавить логику для проверки столкновения с врагом
    }, 500); // останавливается на 0.5 секунды между движениями
  }

  moveLeft() {
    this.position -= 1; // Двигаем влево
  }

  moveRight() {
    this.position += 1; // Двигаем вправо
  }
}

module.exports = Boomerang;
