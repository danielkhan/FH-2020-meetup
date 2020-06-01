const express = require('express');

const { check, validationResult } = require('express-validator/check');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.render('layout', { template: 'feedback', pageTitle: 'Feedback' });
  });

  router.post('/', [
    check('name')
      .isLength({ min: 3 })
      .escape()
      .withMessage('A name is required'),
    check('email')
      .isEmail(),
  ], (request, response) => {
    const errors = validationResult(request);
    console.log(errors);
    response.send('POST Feedback');
  });

  return router;
};
