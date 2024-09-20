// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const Boomerang = require("./game-models/Boomerang");
const View = require("./View");
const { runInteractiveConsole } = require("./keyboard");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.boomerang = new Boomerang();
    this.track = [];
    this.fillTrack();
  }

  fillTrack() {
    for (let i = 1; i <= 10; i += 1) {
      this.track.push(new Array(this.trackLength).fill("\x1b[42m \x1b[0m"));
    }
  }

  regenerateTrack() {
    this.track = [];
    this.fillTrack();
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных

    this.track[this.boomerang.positionY][
      this.boomerang.positionX
    ] = `\x1b[42m${this.boomerang.skin}\x1b[0m`;

    this.track[this.hero.positionY][
      this.hero.positionX
    ] = `\x1b[42m${this.hero.skin}\x1b[0m`;
    this.track[this.enemy.positionY][
      this.enemy.positionX
    ] = `\x1b[42m${this.enemy.skin}\x1b[0m`;

  }

  check() {
    if (
      this.hero.positionX === this.enemy.positionX &&
      this.hero.positionY === this.enemy.positionY
    ) {
      this.hero.die();
    }
    if (
      this.boomerang.positionX === this.enemy.positionX &&
      this.boomerang.positionY === this.enemy.positionY
    ) {
      this.enemy.die();
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.regenerateTrack();

      this.check();
      this.enemy.moveLeft();

      this.boomerang.moveRight();

      this.view.render(this.track);
    }, 100);
  }
}

module.exports = Game;
