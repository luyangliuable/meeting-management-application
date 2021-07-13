import { FaTimes } from 'react-icons/fa'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const Task = ({ tasks, onDelete, onToggle }, index) => {
    return (
            <Draggable key={tasks.id} draggableId={JSON.stringify(tasks.id)} index={eval(index)}>
            {(provided) => ( 
            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={`task ${tasks.reminder ? 'reminder' : ' '}`} onDoubleClick={() => onToggle(tasks.id)}
            >
            <table>
            <td>
            <h3> {tasks.text}{'  '} </h3>
            <p>{tasks.day}</p>
            <p>{tasks.status}</p>
            <p>Participants: {tasks.members}</p>
            </td>
            <td>
            <FaTimes className='poo'
        style={{float: 'right', 'color': 'rgb(220,10,110)', cursor: 'pointer' }}
        onClick={() => onDelete(tasks.id)}
            />
            </td>
            </table>
            </div>
            )}
         </Draggable>
    )
}

export default Task
