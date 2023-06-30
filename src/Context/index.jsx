import { createContext, useState } from "react"
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

  const {
    note,
    saveNote,
  } = useLocalStorage('NOTES_V1', [])

  const [inputValue,setInputValue] = useState('');

  let error = false;

  const statusNote = (notes) => {
    const newNotes = [...note];
    const statusIndex = newNotes.findIndex(
      status => status.note === notes 
    );

    const noteStatus = {
      'false' : 'true',
      'true' : 'false',
    }

    newNotes[statusIndex].status = noteStatus[newNotes[statusIndex].status]

    saveNote(newNotes);
  }

  const addNote = (newnote) => {
    const newNotes = [...note];
    if (newNotes.some((notes) => (notes.note == newnote)) || newnote == ''){
      
    } else {
      newNotes.push({
        note:newnote,
        status:false,
      });
      saveNote(newNotes);
    } 
  }

  const deleteNote = (notes) => {
    const newNotes = [...note];
    const delIndex = newNotes.findIndex(
      del => del.note === notes
    );

    newNotes[delIndex].status == true & (newNotes.splice(delIndex,1))
    
    saveNote(newNotes);
  }

  return(
    <TodoContext.Provider value={{
      note,
      inputValue,
      setInputValue,
      addNote,
      statusNote,
      deleteNote,
      error
      }}>
      { children }
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoContextProvider }

/*

const defaultProjects = [
  { note: 'comprar comida', status: false  },
  { note: 'ir al gym', status: true  },
  { note: 'ver TBBT', status: false  },
];


const projectStringified = JSON.stringify(defaultProjects);

localStorage.setItem('NOTES_V1', projectStringified)

*/
