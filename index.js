const chalk = require("chalk");
const path = require("path");
const saludo = require("./utilidades/archivo");

if (process.argv.slice(2)) {
  saludo(process.argv[2].split("=")[1]);
} else {
  console.log(chalk.yellow("No has escrito ningun parametro en la consola"));
  process.exit(1);
}
