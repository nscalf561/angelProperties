require('use-strict');
let express           = require('express'),
    app               = module.exports = express(),
    bodyParser        = require('body-parser'),
    hbs               = require('hbs'),
    mongoose          = require('mongoose'),
    cors              = require('cors'),
    morgan            = require('morgan'),
    secrets           = require('./secrets'),
    apiController     = require('./controllers/apiController'),
    config            = require('./config/config'),
    routes            = require('./config/routes');

// TODO: configure a development and deployment strategy for cross origin
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Log to console
app.use(morgan('dev'));

// Set default to serve static files from public folder
app.use(express.static(__dirname + '/public'));

// TODO: revisit how the front end will be rendered, using handlebars
app.set('view engine', 'hbs');

// TODO: determine database strategy for deployment vs local development
// mongoose.connect( process.env.MONGOLAB_URI ||
//                  process.env.MONGOHQ_URL ||
//                  config.database);

app.listen(process.env.PORT || 3000, () => {});
mongoose.connect(config.database);
app.set('secrets', secrets);

app.use(routes);
