const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
// Import the custom helper methods

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3006;

// Incorporate the custom helper methods
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: { },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
};

// sess = session 
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json({ limit: '1mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
