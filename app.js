const express = require("express");

const config = {
    "dirname": __dirname,
    "name": "node-express-template",
    "title": "node express template",
    "http": {
        port: 8001
    }
};

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use('/assets', express.static(config.dirname + '/public/assets/'));
app.use(express.static(config.dirname + '/public/'));

app.use((req, res, next) => {
    res.locals.title = config.title;
    return next();
});
app.get("/", (req, res) => {
    return res.render("home/index");
});

app.listen(config.http.port);
console.log('%s started on %s | port:%d', config.name, new Date(Date.now()).toISOString(), config.http.port);