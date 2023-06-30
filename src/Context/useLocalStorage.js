import {useEffect, useState} from "react"

const useLocalStorage = (notesName, initialNote) => {

  const [note, setNote] = useState(initialNote); 

  useEffect(() => {

    const localStorageNote = localStorage.getItem(notesName);
    let parcedItem;

    if( !localStorageNote ){
      localStorage.setItem(notesName, JSON.stringify(initialNote));
      parcedItem = initialNote;

    } else {
      parcedItem = JSON.parse(localStorageNote);
      setNote(parcedItem);
    }
  },[])

  const saveNote = (newNote) => {
    localStorage.setItem(notesName, JSON.stringify(newNote));
    setNote(newNote);
  }

  return{
    note,
    saveNote,
  };
}

export { useLocalStorage }
