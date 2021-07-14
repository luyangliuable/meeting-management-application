import Task from './card'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import { useState } from 'react'

const Tasks = ({tasks, setTasks, participants, setParticipants, func, onDelete, onToggle }) => {

    const [index, UpdateIndexval] = useState([tasks, setTasks])



    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const item = Array.from(index);
        const [reorderedItem] = item.splice(result.source.index, 1);
        item.splice(result.destination.index, 0, reorderedItem);

        UpdateIndexval(item);
    }

    return (
        <DragDropContext onDragEnd = { handleOnDragEnd }>
                <Droppable droppableId = 'agendalist'>
                    {(provided) => (
                            <ul {...provided.droppableProps} ref={provided.innerRef}>
                              {tasks.map(( tasks , index) => (
                                    <Task index={ index } func={ func } participants={ participants } setParticipants = { setParticipants } tasks={ tasks } />
                                ))}
                        {provided.placeholder}
                            </ul>
                    )}
                </Droppable>
            </DragDropContext>
    )
}

export default Tasks
