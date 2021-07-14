import { FaTimes } from 'react-icons/fa'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const Task = ({ participants, func, setParticipants, tasks, onDelete}, index) => {


    return (
            <Draggable key={tasks.id} draggableId={JSON.stringify(tasks.id)} index={eval(index)}>
            {(provided) => (
                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={`task ${tasks.reminder ? 'reminder' : ' '}`}>
            <table>
            <td>
            <h3> {tasks.text}{'  '} </h3>
            <p>{tasks.day}</p>
            <p>{tasks.status}</p>
              <p className="subtitle">Participants: </p> {tasks.members.length > 1 ? tasks.members.map((participants, index) => (<p> {participants.participant} </p>)) : <p>Only you</p>}
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
