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

    const JoinMeeting = ( participants, tasks, id) => {
        // let people = participants.map((member) => ({member.participant}));
        let some = tasks.filter((member) => member.id === id ).map((team) => team.members); // concise syntax
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
            status: 'Missed'
        },

        {
            id: 2,
            text: "Meeting with team mates",
            day: "Jul 14th at 11:00am",
            reminder: true,
            members: [{participant: "Jeremy"}, {participant: "Lucas"}],
            status: 'Upcoming'
        },
    ])



    return (
        <>
          <div className = 'container'>
                <h1 className = 'appName'>{name}: </h1>
              <Tasks  tasks={ tasks } participants={ participants } setParticipants = { setParticipants } />
            </div>
            <Textarea agendaName={ name } />
          <SideBar participants = { participants } title = { participant_title + ":"} />
          <Togglebutton agendaName={ name } />
        </>
    )
}


export default App
