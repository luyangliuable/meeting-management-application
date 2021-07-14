import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from  "react-select";

const selectOptions = [
    {
        value: "Complete",
        label: "Complete"
    },
    {
        value: "In-Progress",
        label: "In-Progress"
    },
    {
        value: "Scheduled",
        label: "Scheduled"
    }
];

export function MeetingCreation(props) {
    const [meetingName, setMeetingName] = useState();
    const [meetingDateTime, setMeetingDateTime] = useState(new Date());
    return (
        <div>
            <form>
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
                    options = {selectOptions}
                />

            </form>
        </div>
    );
}