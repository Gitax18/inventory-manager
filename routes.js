//  importing modules and libraries
const express = require('express');
const multer = require('multer');

// Storage Engine
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
       return cb(null, 'uploads');
    },
    filename: function (req, file, cb)  {
       return cb(null, `${Date.now()}#${file.originalname}`)
    }
  })

const upload = multer({ storage });

// controller files
const controller = require('./controller');

// building router
const router = express.Router();

// getting incoming request and calling proper controller logic 
router.get('/', controller.getIndex);
// Product CRUD Routes
router.get('/add-product', controller.getForm);
router.get('/details/:productId', controller.getDetails);
router.post('/admin/add-product', upload.single('image'), controller.postAddProduct);
router.get('/admin/edit-product/:productId', upload.single('image'), controller.getEditProduct);
router.post('/admin/edit-product/:productId', upload.single('image'), controller.postEditProduct);
router.post("/admin/delete",  controller.postDeleteProduct);

// Category CRUD Routes
router.get('/show-categories', controller.getCategories);
router.get('/add-category', controller.getAddCategory);
router.post('/admin/add-category', controller.postAddCategory);
router.get('/admin/edit-category/:categoryId', controller.getEditCategory);
router.post('/admin/edit-category/:categoryId', controller.postEditCategory)
router.post('/admin/delete-category', controller.postDeleteCategory)



module.exports = router;