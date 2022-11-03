const mongoose = require('mongoose');

const getDBConnect = () => {
    mongoose.connect(process.env.DB_URL).then(res => {
        console.log('DB Connected');
    }).catch(err => {
        console.log('DB not connected', err);       
    });
}

module.exports = {getDBConnect};