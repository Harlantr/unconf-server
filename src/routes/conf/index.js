const express = require('express');

const router = express.Router();
const confConfig = require('../../constants/conf-cfg');

router.route('/')
  .get((req, res) => {
    res.send(confConfig);
  });

module.exports = router;
