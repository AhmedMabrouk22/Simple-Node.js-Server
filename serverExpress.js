import express from "express";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.listen(3000, () => {
    console.log("server run");
});

app.get('/',(req,res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about',(req,res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

app.use((req,res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
})