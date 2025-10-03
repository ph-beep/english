import express from "express";

const app = express();

// USING HTTP PROTOCOL METHODS
app.get("/home", (req, res) => {
    res.contentType("application/html");
    res.status(200).send('<h1>Hello, world!</h1>');
});

// GET THE USERS LIST
app.get("/users", (req, res) => {
    const users = [
        {
            name: "Pedro Bernardoni",
            email: "pedrobernardoni56@gmail.com",
        },
        {
            name: "Pamela Mendes",
            email:"mendespamela13@gmail.com",
        },
    ];

    res.status(200).json(users);
});

// DEFINING A PORT FOR THE SERVER
const port = 8080;
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});