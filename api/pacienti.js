const express = require('express');
const router = express.Router();

const { retrievePacienti } = require('../services/pacientiService');

router.get('/pacienti', async (req, res) => {
  const pacienti = await retrievePacienti();
  res.send({
    metadata: 'asdasd',
    data: pacienti
  });
});

router.post('/pacient', (req, res) => {
  
});

module.exports = router;