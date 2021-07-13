import { FaTimes } from 'react-icons/fa'

const Textarea = ({ agendaName, tasks, onDelete, onToggle }, index) => {
    return (
            <div className="textContainer">
            <h1>{agendaName} (meeting minutes) :</h1>

            <textarea>
            </textarea>
            </div>
    )
}

export default Textarea
