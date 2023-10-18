const fs = require('fs');

const model = require('./model');

// function to render index page with get request
exports.getIndex = (req,res) =>{
    model.Product.findAll().then(products =>{
        console.log('data fetched')
        res.render('index',{
            pageTitle: 'Invento',
            data: products
        })
        console.log('data sent')
    }).catch(err => 'error while fetching data'+err)
    
}

// function to render form page with get request
exports.getForm = (req,res) =>{
    res.render('form',{
        pageTitle: 'Invento - admin form',
        mode: 'add',
        editing: false,
        pd: []
    })
}


exports.getDetails = (req, res) =>{
    const id = req.params.productId;
    model.Product.findByPk(id).then(pd => {
        res.render('details', {
            pageTitle: 'Invento',
            dt : pd
        })
        
    })
}


exports.postAddProduct = (req, res)=>{
    // console.log('incoming request', req.body);
    // console.log('incoming file', req.file);
    const filename = req.file.filename;
    fs.readFile('./uploads/'+filename, (err, data)=>{
        if(!err){
            // add data to db and redirect to '/'
            const img = 'data:image/*;base64,' + Buffer.from(data).toString('base64')
            const title = req.body.title;
            const description = req.body.description;
            const price = req.body.price;
            const category = req.body.category;

            // creating product model
            model.Product.create({
                title: title,
                image: img,
                description: description,
                price: price,
                category: category
            }).then(pd =>{
                console.log('Product Stored succesfully')
                res.redirect('/')

            }).catch(err =>{
                console.log('error occured while storing data: ', err)
            })

            // delete the uploaded file after storing it to database
            fs.unlinkSync(`uploads/${filename}`)
        }
        else console.log('error while loading file: ', err);
    })
}

exports.getEditProduct = (req, res) =>{
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const prodId = req.params.productId;
    console.log(prodId);
    model.Product.findByPk(prodId).then(pd => {
        console.table(pd.description)
        if(!pd){
            res.redirect('/')
        }
        res.render('form',{
            pageTitle: 'Invento - admin form',
            mode: 'edit',
            editing: true,
            pd: pd
        })
    })
}

exports.postEditProduct = (req, res) => {
    const body = req.body
    const id = req.params.productId;
        model.Product.findByPk(id)
            .then(pd => {
                pd.title = body.title;
                pd.description = body.description;
                pd.price = body.price;
                pd.category = body.category;
                return pd.save();
        }).then(result => {
            console.log('UPDATED!!!')
            res.redirect('/')
        })
}

exports.postDeleteProduct = (req, res)=>{
    const id = req.body.Id;
    model.Product.findByPk(id).then(pd=>{
        return pd.destroy()
    }).then(result =>{
        console.log('Deleted');
        res.redirect('/')
    }).catch(err => console.log('Error While Deleting product', err))
}