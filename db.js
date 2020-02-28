const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

async function getRates(){
    const client = await MongoClient.connect(config.MONGOLAB_URI, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = client.db('babloved');
    const historyCollection = db.collection("history");
    const result = await historyCollection.find().toArray();
    
    client.close();

    return result;
}

module.exports = {
    getRates,
}