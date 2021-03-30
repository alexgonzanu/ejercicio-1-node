const fs = require("fs");

const guardarSaludo = (nombre) => {
  fs.writeFile("saludo.txt", `Hola, ${nombre}. Encantado de conocerte`, (err) => {
    if (err) {
      return console.log("No se ha podido escribir el archivo");
    }
    console.log("La escritura se ha hecho correctamente");
  });
};
