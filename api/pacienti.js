const express = require('express');
const router = express.Router();

const { retrievePacienti, insertPacienti,addNewPatient, updatePatient, deletePatient, retrievePatient } = require('../services/pacientiService');
const { data } = require('jquery');

// router.get('/save', async (req, res) => {
//   const pacienti = await insertPacienti();
//   res.send({
//     data: pacienti
//   });
// });

router.get('/pacienti', async (req, res) => {
  const pacienti = await retrievePacienti();
  res.send({
    data: pacienti
  });
});

router.post('/pacienti', async (req, res) => {
  const newPatient = req.body;
  const result = await addNewPatient(newPatient);
  res.status(201).json({ message: 'Patient added successfully', patient: result });
});

router.put('/pacienti', async (req, res) => {
  const idPatient = req.body._id;
  console.log(req.body);
  const myObject = req.body;
  delete myObject._id; 
  const result = await updatePatient(idPatient, { ...myObject });

  res.send(result);
});

router.delete('/pacient/:_id', async (req, res) => {
  console.log(req.params._id);
  const result = await deletePatient(req.params._id);
  res.send(result);
});

router.get('/pacient/:_id', async (req, res) => {
  const patient = await retrievePatient(req.params._id);
  res.send({
    data: patient
  });
});


module.exports = router;