import { useContext } from "react";
import { FaChevronLeft as Arrow } from "react-icons/fa6";
import { TodoContext } from "../../Context";
import toast, { Toaster } from 'react-hot-toast';

const TodoAdd = () => {

  const notify = () => toast('Here is your toast.');
 
  const {
    addNote,
    inputValue,
    setInputValue,
  } = useContext(TodoContext)

return(
  <div className='relative flex min-w-screen justify-center items-center p-4 gap-2 bg-indigo-50'>
    <div 
      className='flex justify-center items-center w-7 h-7 rounded-full bg-white shadow-sm shadow-blue-300 ring-1 hover:shadow-md hover:shadow-blue-300 ring-blue-300 duration-400'
    >
      <Arrow className="text-sm text-blue-900" onClick={notify}/>
    </div>
    <input 
      className="w-1/3 px-3 py-2 ring-1 ring-blue-200 rounded-lg outline-none hover:shadow-md hover:shadow-blue-300 duration-400"
      placeholder="What needs to be done?" 
      value={inputValue} 
      onChange={(event) => {
        notify
        setInputValue(event.target.value);
      }}
      onKeyDown={ (event) => {
        if(event.key === 'Enter'){
            addNote(inputValue);
            setInputValue('');
            
          }
        }}
    />
      
    <Toaster
      position="top-left"/>
    </div>
  )

}

export { TodoAdd }
