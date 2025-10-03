const fs = require("fs");
const path = require("path");

// CREATE DIRECTORY

fs.mkdir(path.join(__dirname, "/test"), (error) => {
    if (error) {
        return console.log("Erro: ", error);
    }

    console.log("Pasta criada com sucesso!");
});

// FILE CREATION

fs.writeFile(path.join(__dirname, "/test", "test.txt"), "hello node!", (error) => {
    if (error) {
        return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso!");

    // ADD TO FILE

    fs.appendFile(path.join(__dirname, "/test", "test.txt"), "hello world", (error) => {
        if (error) {
            return console.log("Erro: ", error);
        }

        console.log("Arquivo modificado com sucesso!");
    });

    // READ FILE

    fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf-8", (error, data) => {
        if (error) {
            return console.log("Erro: ", (error));
        }

        console.log(data);
    })
});
