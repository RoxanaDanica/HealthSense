const db = require('./persistenceService').getDatabase();
const { ObjectId } = require('mongodb');

// const pacienti =  [
//     {
//         nume: "John",
//         prenume: "Doe",
//         adresa: "123 Main St",
//         medicamentatie: "Aspirin",
//         istoric_al_bolii: "Flu",
//         varsta: 30
//     },
//     {
//         nume: "Jane",
//         prenume: "Smith",
//         adresa: "456 Elm St",
//         medicamentatie: "Tylenol",
//         istoric_al_bolii: "Migraine",
//         varsta: 25
//     },
//     {
//         nume: "Alice",
//         prenume: "Johnson",
//         adresa: "789 Oak St",
//         medicamentatie: "Insulin",
//         istoric_al_bolii: "Diabetes",
//         varsta: 40
//     },
//     {
//         nume: "Michael",
//         prenume: "Williams",
//         adresa: "101 Pine St",
//         medicamentatie: "Ibuprofen",
//         istoric_al_bolii: "Headache",
//         varsta: 35
//     },
//     {
//         nume: "Emily",
//         prenume: "Brown",
//         adresa: "202 Maple St",
//         medicamentatie: "Antibiotics",
//         istoric_al_bolii: "Pneumonia",
//         varsta: 45
//     },
//     {
//         nume: "David",
//         prenume: "Davis",
//         adresa: "303 Cedar St",
//         medicamentatie: "Acetaminophen",
//         istoric_al_bolii: "Fever",
//         varsta: 28
//     },
//     {
//         nume: "Sarah",
//         prenume: "Wilson",
//         adresa: "404 Birch St",
//         medicamentatie: "Antihistamine",
//         istoric_al_bolii: "Allergy",
//         varsta: 22
//     },
//     {
//         nume: "Matthew",
//         prenume: "Jones",
//         adresa: "505 Walnut St",
//         medicamentatie: "Steroids",
//         istoric_al_bolii: "Asthma",
//         varsta: 38
//     },
//     {
//         nume: "Jessica",
//         prenume: "Martinez",
//         adresa: "606 Spruce St",
//         medicamentatie: "Beta-blockers",
//         istoric_al_bolii: "Hypertension",
//         varsta: 50
//     },
//     {
//         nume: "Christopher",
//         prenume: "Anderson",
//         adresa: "707 Oak St",
//         medicamentatie: "Opioids",
//         istoric_al_bolii: "Chronic pain",
//         varsta: 60
//     }
// ];

async function insertPacienti() {
    const col = db.collection('users');
    const res = await col.insertMany(pacienti);
    return res;
}

// Read all the patients in the db
async function retrievePacienti() {
    const col = db.collection('users');
    const res = await col.find({});
    const allValues = await res.toArray();

    return allValues;
}

// add a new patient
async function addNewPatient(patient) {
    const col = db.collection('users');
    const res = await col.insertOne(patient);
}

// update patient
async function updatePatient(idPatient, updatedData) {
    const col = db.collection('users');
    const res = await col.updateOne(
        { _id: new ObjectId(idPatient) }, 
        { $set: {...updatedData} }
    );

    return res;
}

// Delete patient
async function deletePatient(_id) {
    const col = db.collection('users');
    const res = await col.deleteOne({_id: new ObjectId(_id)});

    return res;
}

//Read patient
async function retrievePatient(_id) {
    const col = db.collection('users');
    const res = await col.findOne({ _id: new ObjectId(_id) });

    return res;
}

module.exports = {
    retrievePacienti,
    insertPacienti,
    addNewPatient,
    updatePatient,
    deletePatient,
    retrievePatient
};
