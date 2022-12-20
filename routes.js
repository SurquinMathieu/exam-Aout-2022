let express = require('express');
let router = express.Router();

let itemController = require('./controllers/itemController')

router.get('/',itemController.redirectToItemList)
router.get('/itemList',itemController.itemList)
router.get('/addItem',itemController.addItemTemplate)
router.post('/addItem',itemController.addItemToList)

router.get('/strikeThrough/:index',itemController.strikeThrough)
router.get('/removeItem/:index',itemController.removeItem)
module.exports = router;