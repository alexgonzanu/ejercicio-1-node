const fs = require("fs");

fs.writeFile("saludo.txt", `Hola ${process.argv.slice(2).shift().split("=").slice(1)
  .toString()}, buenos dias`, (err) => {
    if (err) {
      console.log("No se ha podido escribir el archivo");
      return;
    }
    console.log("La escritura se ha hecho correctamente");
  });
