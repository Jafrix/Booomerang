javascript
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const View = require('./View');

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(); // Можно передать бумеранг как аргумент, если необходимо
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие) в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin; // Помещаем героя на трек
    this.track[this.enemy.position] = this.enemy.skin; // Помещаем врага на трек
  }

  checkCollision() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
      console.log(`${this.enemy.name} победил! Игра окончена.`);
      clearInterval(this.gameInterval); // Останавливаем игру
    }
  }

  updateGame() {
    this.checkCollision();
    this.regenerateTrack();
    this.view.render(this.track);
  }

  play() {
    this.gameInterval = setInterval(() => {
      this.updateGame();
    }, 1000); // Обновляем игру каждую секунду
  }
}

module.exports = Game;


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



