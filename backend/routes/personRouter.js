const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

const getCallback = (response, err, results) => {
    if (err) {
        res.send(400).send(err);
    };
    res.status(200).json(results);
}

router.post("/", (req, res) => {
    const person = new Person({
        personFirstName: req.body.personFirstName,
        personLastName: req.body.personLastName,
        personEmail: req.body.personEmail,
        personMobile: req.body.personMobile
    });
})

router.get("/", (req, res) => {
    Person.find().exec((err, results) => getCallback(res, err, results));
});