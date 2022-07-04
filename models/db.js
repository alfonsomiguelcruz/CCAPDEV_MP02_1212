const dotenv   = require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mp-db';
const options = {
    useNewURLParser: true,
    useUnifiedTopology: true
};

const database =  {
    connection: url,
     
    connect: () => {
        mongoose.connect(url, options, (err) => {
            if(err) throw err;
            console.log('Connected to: ' + url);
        }); 
    },

    create: (model, doc, callback) => {
        model.create(doc, (err, res) => {
            if(err) return callback(false);
            console.log('Created ' + res);
            return callback(true);
        });
    },

    findOne: (model, query, projection, callback) => {
        model.findOne(query, projection, (err, res) => {
            if(err) return callback(false);
            console.log("Found");
            return callback(res);
        });
    },

    find: (model, query, projection, callback) => {
        model.find(query, projection, (err, res) => {
            if(err) return callback(false);
            return callback(res);
        });
    },

    updateOne: (model, filter, update) => {
        model.updateOne(filter, update, (err, res) => {
            if(err) return callback(false);
            console.log('Document modified: ' + res);
            return callback(true);
        });
    },

    deleteOne: (model, conditions) => {
        model.deleteOne(conditions, (err, res) => {
            if(err) return callback(false);
            console.log('Document deleted: ' + res);
            return callback(true);
        });
    }
};

module.exports = database;
