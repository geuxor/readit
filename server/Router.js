const express = require('express');
const router = express.Router();
const getBooks = require('./controllers/getBooks');
const deleteLikedBook = require('./controllers/deleteLikedBook');
const postBook = require('./controllers/postBook');

router.get('/books', getBooks);

router.post('/books', postBook);
//changed
router.delete('/books/:id', deleteLikedBook);

module.exports = router;
