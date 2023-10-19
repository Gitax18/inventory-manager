const Seq = require('sequelize');

const seqEnv = require('./database');

/* Models structure
* Model 'Category': id, title, description.
* Model 'Item': id, title, image, description, price, category.
*/

// building model for category.
const category = seqEnv.define('categories', {
    id: {
        type: Seq.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Seq.STRING,
        allowNull: false
    },
    description: {
        type: Seq.TEXT('medium'),
        allowNull: false
    }
});


// building model for item.
const product = seqEnv.define('products', {
    id: {
        type: Seq.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Seq.STRING,
        allowNull: false
    },
    image: {
        type: Seq.TEXT('medium'),
        // allowNull: false
    },
    description: {
        type: Seq.STRING,
        allowNull: true
    },
    price: {
        type: Seq.DECIMAL,
        allowNull: false
    },
    category: {
        type: Seq.STRING,
        allowNull: false
    }
});

exports.Category = category;
exports.Product = product;