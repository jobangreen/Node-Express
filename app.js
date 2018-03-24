const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const handlebars = require("express-handlebars").create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
 


app.get('/', (request, response) => {
    response.render('beginning');
});

app.get('/middle', (request, response) => {
    response.render('middle');
});

app.get('/end', (request, response) => {
    response.render('end');
});

app.listen(3000, () => {
  console.log("servers running")
});