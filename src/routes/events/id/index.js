const express = require('express');

const router = express.Router();

router.route('/:id')
  .get((req, res) => {
    res.send(req.params.id);
  });

module.exports = router;
