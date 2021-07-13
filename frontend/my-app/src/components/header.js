import PropTypes from 'prop-types'
import Tasks from './cards'
// import { useLocation } from 'react-router-dom'
// import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
          <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
