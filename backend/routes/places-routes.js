const express = require('express');
const router = express.Router();

router.get('/', (req, res, nex) => {
  console.log('get req in places');
  res.json({ message: 'works' });
});

module.exports = router;
