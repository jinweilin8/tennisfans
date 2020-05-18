const express = require('express');
const router = express.Router();

// @route    GET api/users
// @desc     test
// @access   Public
router.get('/', (req, res) => res.send('users route'));

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/', (req, res) => {
    console.log('in user route');
  });

module.exports = router;
