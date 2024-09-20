// Сделаем отдельный класс для отображения игры в консоли.
const { EOL } = require('os');


const chalk = require("chalk");
const figlet = require("figlet");


class View {

  render(track) {
    const yourTeamName = 'Pirozhki';
// console.log(message)

    // Тут всё рисуем.
    
    console.clear();

    console.log(chalk.green.bold(figlet.textSync(`${yourTeamName} wishes you good evening!`, { horizontalLayout: "full" })));

    console.log(track.map((el) => el.join('')).join(EOL));

    console.log('\n\n');
   
  }
}


module.exports = View;



