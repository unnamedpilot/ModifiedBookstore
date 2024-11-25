import express from 'express';
import { getBooks, getBooksById } from '../controller/bookController.js';

const router = express.Router();

router.route('/books/').get(getBooks);

router.route('/books/:id').get(getBooksById);

export default router;
