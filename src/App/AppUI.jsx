import { useContext } from 'react';
import { TodoAdd } from '../Components/TodoAdd'
import { TodoItems } from '../Components/TodoItems'
import { TodoList } from '../Components/TodoList';
import { TodoContext } from '../Context';

const AppUI = () => {

  const {
    note,
    statusNote,
    deleteNote,
  } = useContext(TodoContext)


  return (
    <>
      <TodoAdd/>
      <TodoList>
        {note.map((todo) => (
          <TodoItems
            key={todo.note}
            note={todo.note}
            status={todo.status}
            onStatus={() => statusNote(todo.note)}
            onDelete={() => deleteNote(todo.note)}
          />
          ))}
      </TodoList>
    </>
  )
}

export { AppUI }
