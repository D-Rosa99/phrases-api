const express = require('express');
const router = express.Router();
const {
  getAllData,
  postData,
  deleteData,
  updateData,
} = require('../controller');

router.get('/', getAllData);

router.post('/', postData);

router.delete('/:key/:fieldToSearch', deleteData);

router.put('/:key/:fieldToSearch/:fieldToUpdate', updateData);

module.exports = router;
