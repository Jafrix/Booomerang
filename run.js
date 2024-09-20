// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 70,
});

// console.log(game)

runInteractiveConsole(game.hero);
// Запуск игры.
game.play();
