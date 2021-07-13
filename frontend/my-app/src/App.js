import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import React from 'react'
import nav from './components/nav'
import Textarea from './components/agendatxt'
import Tasks from './components/cards'
import Togglebutton from './components/toggle.js'


const App = () => {
    const name = 'Meeting Agenda'


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
            members: ["Jeremy", "Lucas"],
            status: 'Upcoming'
        },
    ])


    return (
        <>
            <div className = 'container'>
                <h1 className = 'appName'>{name}: </h1>
                <Tasks tasks={tasks} />
            </div>
            <Textarea agendaName={ name } />
            <Togglebutton agendaName={ name } />
        </>
    )
}


export default App
