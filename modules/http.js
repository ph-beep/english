import { createServer } from "http";

const port = 8080;
const server = createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end("<h1>Home page</h1>")
    }

    if (req.url === "/users") {
        const users = [
            {
                name: "Pedro Henrique",
                email: "pedrobernardoni56@gmail.com"
            },
            {
                name: "Pâmela Mendes",
                email: "mendespamela13@gmail.com"
            },
        ];

        res.writeHead(200, {"Content-Type": "application/JSON"});
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`Listening at port ${port}`));