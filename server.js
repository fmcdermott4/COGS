const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3006;

const sess = {
    secret: 'ARC will get it done',
    cookie: {},

    resave: false,

    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),

};
sess.cookie.maxAge = 288000000;

app.use(session(sess));

const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
        console.log("Server listening on: http://localhost:" + PORT)
    );
});