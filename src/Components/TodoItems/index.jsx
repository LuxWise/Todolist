import { FaRegCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineCheckCircle as Complete } from "react-icons/ai";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration : 1.5
    }
  }

}


const TodoItems = ({note, status, onStatus, onDelete}) => {

  const Notestatus = {
    'true' : <Complete className='text-2xl text-emerald-500 cursor-pointer' onClick={onStatus}/>,
    'false' : <FaRegCircle className='text-2xl text-emerald-500 cursor-pointer' onClick={onStatus} />
  };


  return(
    
    <motion.div className='flex items-center justify-between w-3/4 px-6 pb-4 pt-4 bg-white rounded-md ring-1 ring-gray-100 shadow-md shadow-blue-300 group lg:w-1/2'
      layoutId={note}
    >
      <motion.div className='flex gap-5 '
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={variants}
      >
        { Notestatus[status] }
        <p className={`${status == 'true' ? 'line-through text-gray-500' : '' }`}>
          {note}
        </p>
      </motion.div>
      <div>
         <RxCross1 className="hidden group-hover:block text-red-600 cursor-pointer" onClick={onDelete}/>
      </div>
    </motion.div>
  
  )
}

export { TodoItems }
