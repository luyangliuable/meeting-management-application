const express = require("express");
const router = express.Router();
const Meeting = require("../models/Meeting");

router.post("/", (req, res) => {
    const name = req.body.meetingName;
    const datetime = req.body.meetingDateTime;
    const status = req.body.meetingStatus;

    const meetingInstance = new Meeting({
        meetingName: name,
        meetingDateTime: datetime,
        meetingStatus: status
    });
    meetingInstance.save((err) => {
        if (err) { 
            return handleError(err);
        }
    });
    res.redirect("/meeting/" + meetingInstance.id);
});

router.get("/", (req, res) => {
    Meeting.find().exec((err, results) => {
        if (err) {
            res.send(400).send(err);
        };
        res.status(200).json(results);
    });
});

router.get("/:id/", (req, res) => {
    const id = req.params.id;
    Meeting.findById(id)
    .exec((err, results) => {
        if (err) res.status(400).json(err);
        res.status(200).json(results);
    })
});

router.put("/:id/", (req, res) => {
    const id = req.params.id;
    Meeting.findByIdAndUpdate(id, req.body, {new: true}, (err, result) => {
        if (err) res.status(400).json(err);
        res.json(result);
    });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Meeting.findByIdAndDelete(id, (err, results) => {
        if (err) res.status(400).json(err);
        res.json(results);
    })
    
})

module.exports = router;