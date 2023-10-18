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
router.get('/add-product', controller.getForm);
router.post('/admin/add-product', upload.single('image'), controller.postAddProduct);
router.get('/admin/edit-product/:productId', controller.getEditProduct);
router.post('/admin/edit-product/:productId', upload.single('image'), controller.postEditProduct);
router.post("/admin/delete",  controller.postDeleteProduct);


module.exports = router;