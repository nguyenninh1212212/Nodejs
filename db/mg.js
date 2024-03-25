const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/data1');
        console.log('Connect success');
    } catch (error) {
        console.error('Connect fail ', error);
    }
}
module.exports = { connect };
