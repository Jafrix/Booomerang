// Сделаем отдельный класс для отображения игры в консоли.
const { EOL } = require('os');


const chalk = require("chalk");
const figlet = require("figlet");


class View {

  render(track) {
    const yourTeamName = '         = Tomatoes WarZ=';
// console.log(message)

    // Тут всё рисуем. wishes you good evening!
    
    console.clear();

    console.log(chalk.red.bold(figlet.textSync(`${yourTeamName}` , { horizontalLayout: "full" })));

    console.log(track.map((el) => el.join('')).join(EOL));

    console.log('\n\n');
   
  }
}


module.exports = View;



