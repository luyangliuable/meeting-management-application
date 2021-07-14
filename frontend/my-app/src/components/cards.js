import Task from './card'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const Tasks = ({ tasks, joinMeeting, onDelete, onToggle }) => {
    return (
            <DragDropContext>
                <Droppable droppableId = 'agendalist'>
            {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks.map((tasks, index) => (
                            <Task tasks={tasks} joinMeeting="joinMeeting()" />
                        ))}
                {provided.placeholder}
                    </ul>
            )}
                </Droppable>
            </DragDropContext>
    )
}

export default Tasks
