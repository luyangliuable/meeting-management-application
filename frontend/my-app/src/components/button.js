import { FaTimes } from 'react-icons/fa'

const Button = ({ colour, text }, index) => {
    return (
            <div className="button">
            { text }
            </div>
    )
}

Button.defaultProps = {
    text: 'button',
}


export default Button

