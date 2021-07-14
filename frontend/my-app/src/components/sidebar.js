import PropTypes from 'prop-types'

// import { useLocation } from 'react-router-dom'
// import Button from './Button'

const SideBar = ({ title, participants }) => {

    return (
        <div className='SideBar'>
        <div className="grabber">Hello</div>
            <h3>{ title }</h3>
            {participants.map((participants, index) => (
                    <li> {participants.participant} </li>
            ))}

        </div>
    )
}

// SideBar.defaultProps = {
//     title: 'Task Tracker',
// }

// SideBar.propTypes = {
//     title: PropTypes.string.isRequired,
// }

SideBar.propTypes = {
    participants: PropTypes.string.isRequired,
}


// CSS in JS
const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}

export default SideBar
