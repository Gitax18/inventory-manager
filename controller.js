// function to render index page with get request
exports.getIndex = (req,res) =>{
    res.render('index',{
        pageTitle: 'Invento'
    })
}