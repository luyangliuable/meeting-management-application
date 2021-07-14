import Task from './card'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const Tasks = ({ tasks, participants, setParticipants, func, onDelete, onToggle }) => {
    return (
            <DragDropContext>
                <Droppable droppableId = 'agendalist'>
                    {(provided) => (
                            <ul {...provided.droppableProps} ref={provided.innerRef}>
                                {tasks.map((tasks, index) => (
                                    <Task func={ func } participants={participants} setParticipants = { setParticipants } tasks={tasks} />
                                ))}
                        {provided.placeholder}
                            </ul>
                    )}
                </Droppable>
            </DragDropContext>
    )
}

export default Tasks
