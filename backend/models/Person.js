const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
    personFirstName: {
        type: String
    },
    personLastName: {
        type: String,
    },
    personEmail: {
        type: String
    },
    personMobile: {
        type: String,
        length: 12
    }
});

module.exports = mongoose.model("person", personSchema);