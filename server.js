const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const createError = require('http-errors');
const bodyParser = require('body-parser');

const SpeakerService = require('./services/SpeakerService');

const speakerService = new SpeakerService('./data/speakers.json');

const app = express();
const port = 3000;

function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({ nope: true });
  } else {
    next();
  }
}

const routes = require('./routes');

app.locals.sitename = 'ROUX Meetups';

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: 'session',
    keys: ['fewz3459fer686g68re', 'djewrzowqertz7889f', '96fd796sa7dffdsa'],
  }),
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, './static')));
app.use(ignoreFavicon);

app.use(async (request, response, next) => {
  try {
    const names = await speakerService.getNames();
    response.locals.speakerNames = names;
    return next();
  } catch (err) {
    return next(err);
  }
});

app.use('/', routes({
  speakerService,
}));

app.use((request, response, next) => {
  next(createError(404, 'Page not found!'));
});

app.use((error, request, response, next) => {
  response.locals.message = error.message;
  const status = error.status || 500;
  response.locals.status = status;
  response.locals.error = app.get('env') === 'development' ? error : false;
  response.status(status);
  return response.render('error');
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
