const express = require("express");
const { engine } = require("express-handlebars");
const methodOverride = require('method-override')
const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(methodOverride('_method'))
app.use(express.json())
app.engine('.hbs',engine({extname: '.hbs'}));
app.set('view engine','.hbs');

app.use(
  express.urlencoded({ extended: true })
);
  
app.use(express.json());
const router = require('./routes')
const db = require('./config/db');
db.connect();
router(app)

// app.get("/", (req, res) => {
//     res.render("home");
//   });

// app.get("/home", (req, res) => {
//     return res.send('Hello Home!');
//   });


app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);