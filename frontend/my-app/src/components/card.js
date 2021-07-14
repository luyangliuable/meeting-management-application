import { FaTimes, FaTimesCircle } from 'react-icons/fa'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const Task = ({ participants, func, setParticipants, tasks, onDelete, index}) => {


    // func(participants, tasks, setParticipants, 1)

    return (

            <Draggable key={tasks.id} draggableId={JSON.stringify(tasks.id)} index={eval(index)}>
            {(provided) => (
                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={`task ${tasks.reminder ? 'reminder' : ' '} `}>
            <table>
            <td>
            <h3> {tasks.text}{'  '} </h3>
            <p>{tasks.day}</p>
            <p>{tasks.status}</p>
              <p>Priority: {index}</p>
              <p className="subtitle">Participants: </p> {tasks.members.length > 1 ? tasks.members.map((members, index) => (<p> {members.participant} </p>)) : <p>Only you {index}</p>}
            </td>
            <td>

              <FaTimes className='poo' style={{width: '25px', height: '25px', float: 'right', 'color': 'black', cursor: 'pointer' }} onClick={() => onDelete(tasks.id)} />
            </td>
            </table>
            </div>
            )}
         </Draggable>
    )
}

export default Task
