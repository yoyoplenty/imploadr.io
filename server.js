const express = require('express');
const app = express();
const path = require('path')
const routes = require('./routes')
const exphbs = require('express-handlebars');
const moment = require('moment')
const multer = require('multer');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(routes);





let PORT = process.env.PORT || 3000

//app.engine('handlebars', exphbs());

app.engine('handlebars', exphbs.create({
    defaultLayout: 'main',
    layoutsDir: app.get('views') + '/layouts',
    partialsDir: [app.get('views') + '/partials'],
    helpers: {
        timeago: function (timestamp) {
            return moment(timestamp).startOf('minute').fromNow();
        }
    }
}).engine);

app.set('view engine', 'handlebars');
app.use(express.json());
app.use(routes);
app.use(express.static(path.join(__dirname, './public')));



app.listen(PORT, () => {
    console.log(`server up and running at port ${PORT}`)
})