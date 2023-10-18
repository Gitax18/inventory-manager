const Seq = require('sequelize');

const seqEnv = require('./database');

/* Models structure
* Model 'Category': id, title, description.
* Model 'Item': id, title, description, price, category.
*/

// building model for category.
const category = seqEnv.define('category', {
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
        type: Seq.STRING,
        allowNull: false
    }
});


// building model for item.
const item = seqEnv.define('item', {
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

exports.category = category;
exports.item = item;