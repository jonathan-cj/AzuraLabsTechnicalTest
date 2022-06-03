const { Router } = require('express');
const ItemController = require('../controller/ItemController.js');

const router = Router();

router.get('/item', ItemController.getItems);
router.post('/item', ItemController.createNewItem);
router.put('/item/update', ItemController.updateItem);
router.put('/item/delete', ItemController.deleteItem);

module.exports = router;
