const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

const guardarSaludo = (nombre) => {
  fs.writeFile(path.join(".", "textos", "saludos.txt"), `Hola, ${nombre}. Encantado de conocerte`, (err) => {
    if (err) {
      console.log(chalk.bold.red("No se ha podido escribir el archivo"));
      process.exit(1);
    }
    console.log("La escritura se ha hecho correctamente");
  });
};

module.exports = guardarSaludo;
