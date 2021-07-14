import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from  "react-select";
import { addNewMeeting } from "../clients/meetingClient";

const selectOptions = [
{
    value: "Scheduled",
    label: "Scheduled"
},
{
    value: "Complete",
    label: "Complete"
},
{
    value: "In-Progress",
    label: "In-Progress"
}
];

export function MeetingCreation(props) {
    const [meetingName, setMeetingName] = useState();
    const [meetingDateTime, setMeetingDateTime] = useState(new Date());
    const [meetingStatus, setMeetingStatus] = useState(selectOptions[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewMeeting({
            meetingName: meetingName,
            meetingDateTime: meetingDateTime,
            meetingStatus: meetingStatus.value
        });
    }
    return (
        <div>
            <p>{meetingStatus !== undefined ? meetingStatus.value : ""}</p>
            <form onSubmit = {handleSubmit}>
                <label>Meeting Name {meetingName}</label>
                <input 
                    value  = {meetingName} 
                    onChange = {event => setMeetingName(event.target.value)}/>
                <br />
                <label>Meeting Date & Time</label>
                <DatePicker 
                    selected = {meetingDateTime} 
                    onChange = {date => setMeetingDateTime(date)} 
                    dateFormat="MMMM d, yyyy h:mm aa"
                    showTimeSelect/>
                <label>Meeting Status</label>
                <Select
                    defaultValue = {selectOptions}
                    options = {selectOptions}
                    onChange = {setMeetingStatus}
                />
                <button type = "submit">Submit</button>
            </form>
        </div>
    );
}