import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import React from 'react'
import nav from './components/nav'
import Textarea from './components/agendatxt'
import Button from './components/button'
import Tasks from './components/cards'
import Togglebutton from './components/toggle.js'
import SideBar from './components/sidebar.js'

const App = () => {
    const name = 'Meeting Agenda'
    const participant_title = "Participants"

    const JoinMeeting = ( participants, tasks, setParticipants, id) => {
        // let people = participants.map((member) => ({member.participant}));
        let some = tasks.filter((member) => member.id === id ).map((team) => team.members); // concise syntax
        window.alert();
        setParticipants([...participants, "sa"])
    }


    const [participants, setParticipants] = useState([
        {
            id: 1,
            participant:"Lucas"
        },

        {
            id: 2,
            participant: "Jeremy"
        }

    ]);

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doctor's appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true,
            members: [{participant: "Lucas"}],
            priority: 1,
            status: 'Missed'
        },

        {
            id: 2,
            text: "Meeting with team mates",
            day: "Jul 14th at 11:00am",
            reminder: true,
            members: [{participant: "William"}, {participants: "Praty"}, {participant: "Jeremy"}, {participant: "Lucas"}],
            priority: 2,
            status: 'Upcoming'
        },
    ])


    return (
        <>
          <Button text="NormalButton"/>
          <div className = 'container'>
                <h1 className = 'appName'>{name}: </h1>
            <Tasks func={ JoinMeeting} tasks={tasks} setTasks = {setTasks} participants={ participants } setParticipants = { setParticipants } />
            </div>
            <Textarea agendaName={ name } />
          <SideBar participants = { participants } title = { participant_title + ":"} />
          <Togglebutton agendaName={ name } />
        </>
    )
}


export default App
