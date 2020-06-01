const express = require('express');

const router = express.Router();

const speakersRoute = require('./speakers.js');
const feedbackRoute = require('./feedback.js');

module.exports = (params) => {
  const { speakerService } = params;

  router.get('/', async (request, response, next) => {
    try {
      const topspeakers = await speakerService.getList();
      const artwork = await speakerService.getAllArtwork();
      return response.render('layout', {
        pageTitle: 'Welcome',
        template: 'index',
        showJumbotron: true,
        topspeakers,
        artwork,
      });
    } catch (err) {
      return next(err);
    }
  });

  router.get('/next', (request, response, next) => next(new Error('Something went wrong!')));

  router.use('/speakers', speakersRoute());
  router.use('/feedback', feedbackRoute());
  return router;
};
