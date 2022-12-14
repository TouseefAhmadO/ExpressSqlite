const express = require('express');
const ProductController = require('../controllers/productController');

const router = express.Router();

router.route('/all').get(ProductController.all);
router.route('/create').post(ProductController.create);
router.route('/single/:id').get(ProductController.one);
router.route('/update/:id').put(ProductController.update);
router.route('/delete/:id').delete(ProductController.delete);
router.route('/deleteall').delete(ProductController.deleteAll);

module.exports = router;