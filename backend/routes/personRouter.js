const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

const getCallback = (response, err, results) => {
    if (err) {
        response.send(400).send(err);
    };
    response.status(200).json(results);
}

router.post("/", (req, res) => {
    const personInstance = new Person({
        personFirstName: req.body.personFirstName,
        personLastName: req.body.personLastName,
        personEmail: req.body.personEmail,
        personMobile: req.body.personMobile
    });
    personInstance.save((err) => {
        if (err) { 
            console.error(err);
        }
    });
    res.redirect("/person/" + personInstance.id);
});

router.get("/", (req, res) => {
    Person.find().exec((err, results) => getCallback(res, err, results));
});

router.get("/:id/", (req, res) => {
    const id = req.params.id;
    Person.findById(id).exec((err, results) => getCallback(res,err,results));
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Person.findByIdAndDelete(id, (err, results) => getCallback(res, err, results))
});

module.exports = router;