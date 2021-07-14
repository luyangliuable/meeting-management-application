import axios from "axios";
export function addNewMeeting(meeting) { 
    axios.post("http://localhost:8081/meeting", meeting).then((response) => {
        return true;
    }).catch((error) => {
        console.log(error);
        return false;
    })
};