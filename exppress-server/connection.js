const mongoose = require('mongoose');

async function connectMongoDb(url){
    return mongoose.connect(url).then(()=> console.log('mongoDb concceted!!'));
}

module.exports = {connectMongoDb,};