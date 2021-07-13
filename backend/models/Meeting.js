const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
    meetingName: {
        type: String
    },
    meetingDateTime: {
        type: Date
    },
    meetingStatus: {
        type: String,
        enum: ["Complete", "In-Progress", "Scheduled"]
    }
});

module.exports = mongoose.model("meeting", meetingSchema);