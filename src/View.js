// Сделаем отдельный класс для отображения игры в консоли.
const { EOL } = require('os');

class View {
  render(track, hero) {
    const yourTeamName = 'Elbrus';
    // Тут всё рисуем.
    console.clear();
    console.log(track.map((el) => el.join('')).join(EOL));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}


module.exports = View;
