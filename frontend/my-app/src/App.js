import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import React from 'react'
import nav from './components/nav'
import Textarea from './components/agendatxt'
import Tasks from './components/cards'
import Togglebutton from './components/toggle.js'
import SideBar from './components/sidebar.js'


const App = () => {
    const name = 'Meeting Agenda'
    const participant_title = "Participants"

    const joinMeeting = ({ id }) => {
        setParticipants([...participants, tasks.filter((members) => tasks.id == id)])
    }

    const [participants, setParticipants] = useState([{participant:"Lucas"}, {participant: "Jeremy"}]);

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doctor's appointment",
            day: "Feb 5th of 2:30pm",
            reminder: true,
            members: ["Lucas"],
            status: 'Missed'
        },
        {
            id: 2,
            text: "Meeting with team mates",
            day: "Jul 14th of 11:00am",
            reminder: true,
            members: [{participant: "Jeremy"}, {participant: "Lucas"}],
            status: 'Upcoming'
        },
    ])


    return (
        <>
            <div className = 'container'>
                <h1 className = 'appName'>{name}: </h1>
                <Tasks tasks={tasks} onClick="joinMeeting()" />
            </div>
            <Textarea agendaName={ name } />
          <SideBar onClick = "" participants = { participants } title = { participant_title + ":"} />
            <Togglebutton agendaName={ name } />
        </>
    )
}


export default App
