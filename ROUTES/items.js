import express from 'express';

import ItemsController from '../controllers/items.js';

const router = express.Router();

// seperation of concerns

router.get('/', ItemsController.getAllItems);

router.post('/', ItemsController.createItem);

router.get('/:id', ItemsController.getATask);

router.patch('/:id', ItemsController.upDated);

router.delete('/:id', ItemsController.deleteItem);

export default router;
