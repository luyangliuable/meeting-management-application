import axios from "axios";
export function addNewMeeting(meeting) { 
    axios.post("localhost:8081/meeting", meeting).then((response) => {
        return (response.status === 200) ? true : false;
    }).catch((error) => {
        console.log(error);
        return false;
    })
};