// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require("keypress");

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  q: (hero) => hero.moveRight(),
  w: (hero) => hero.moveLeft(),
  e: () => console.log("e"),
  r: () => console.log("r"),
  t: () => console.log("t"),
  y: () => console.log("y"),
};

// Какая-то функция.

function runInteractiveConsole(hero) {
  keypress(process.stdin);
  process.stdin.on("keypress", (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name](hero);
      }
      // Прерывание программы.
      if (key.ctrl && key.name === "c") {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

module.exports = { runInteractiveConsole };
// Давай попробуем запустить этот скрипт!

// runInteractiveConsole();
﻿
