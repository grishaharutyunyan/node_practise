import { createServer } from 'http';
import fs from 'fs';
import path from 'path';

const mimeType = {
    ".html": 'text/html',
    ".css": 'text/css',
    ".js": 'text/javascript',
};

function fileMiddleware(req, res, next) {
    let url = req.url;
    if (url === "/") {
        url = "/index.html";
    }
    const filePath = path.resolve('public' + url);
    fs.promises.access(filePath)
        .then(() => {
            const ext = path.extname(filePath);
            res.writeHead(200, { 'Content-Type': mimeType[ext] });
            fs.createReadStream(filePath).pipe(res);
        })
        .catch(() => {
            next();
        });
}

const server = createServer((req, res) => {
    fileMiddleware(req, res, () => {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(path.resolve("public/index.html")).pipe(res);
        } else if (req.url === '/style.css') {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            fs.createReadStream(path.resolve("public/style.css")).pipe(res);
        } else if (req.url === "/hello") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("hello");
        } else {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("bye");
        }
    });
});

server.listen(3001, () => {
    console.log("Server running at http://localhost:3001/");
});
