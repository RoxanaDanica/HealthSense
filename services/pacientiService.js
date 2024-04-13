const db = require('./persistenceService').getDatabase();

// Read all the patients in the db
async function retrievePacienti() {
    const col = db.collection('restaurants');
    const res = await col.findOne();

    return res;
}

module.exports = {
    retrievePacienti
};
