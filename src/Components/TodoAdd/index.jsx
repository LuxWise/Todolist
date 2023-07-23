import { useContext } from "react";
import { AiOutlineCheck as Check } from "react-icons/ai";
import { RxCross1 as Cross } from "react-icons/rx";
import { TodoContext } from "../../Context";
import { Toaster } from 'react-hot-toast';
import { motion } from "framer-motion";

const TodoAdd = () => {

  const {
    addNote,
    inputValue,
    setInputValue,
    positionToast,
    fullDelete,
    fullCheck,
  } = useContext(TodoContext);

return(
  <div className='relative flex min-w-screen justify-center items-center p-4 gap-3 bg-indigo-50'>
    <motion.div className='flex justify-center items-center w-7 h-7 rounded-full bg-white shadow-sm shadow-blue-300 ring-1 hover:shadow-md hover:shadow-blue-300 ring-blue-300 duration-400'
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.9 }}
      onClick={fullCheck}
    >
      <Check className="text-sm text-blue-900"/>

    </motion.div>
    <input className="w-2/3 px-3 py-2 ring-1 ring-blue-200 rounded-lg outline-none hover:shadow-md hover:shadow-blue-300 duration-400 lg:w-1/3"
      placeholder="What needs to be done?" 
      value={inputValue} 
      onChange={(event) => {
        setInputValue(event.target.value);
      }}
      onKeyDown={ (event) => {
        if(event.key === 'Enter'){
          addNote(inputValue);
          setInputValue('');
      }}}
    />

    <motion.div className='flex justify-center items-center w-7 h-7 rounded-full bg-white shadow-sm shadow-blue-300 ring-1 hover:shadow-md hover:shadow-red-400 ring-red-400 duration-400'
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.9 }}
      onClick={fullDelete}
      >
      <Cross className="text-sm text-red-700"/>
    </motion.div> 

    <Toaster position={positionToast.position} duration='2000'/>
      
    </div>
  )

}

export { TodoAdd }
