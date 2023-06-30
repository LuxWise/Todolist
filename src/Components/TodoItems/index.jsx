import { FaRegCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineCheckCircle as Complete } from "react-icons/ai";


const TodoItems = ({note, status, onStatus, onDelete}) => {

  const Notestatus = {
    'true' : <Complete className='text-2xl text-emerald-500 cursor-pointer' onClick={onStatus}/>,
    'false' : <FaRegCircle className='text-2xl text-emerald-500 cursor-pointer' onClick={onStatus} />
  };


  return(
    
      <div className='flex items-center justify-between w-3/4 bg-white px-6 pb-4 pt-4 rounded-md ring-1 ring-gray-100 shadow-md shadow-blue-300 group lg:w-1/2'>
        <div className='flex gap-5 '>
          { Notestatus[status] }
          <p className={`${status == 'true' ? 'line-through text-gray-500' : '' }`}>
            {note}
          </p>
        </div>
        <div>
          <RxCross1 className="hidden group-hover:block text-red-600 cursor-pointer" onClick={onDelete}/>
        </div>
      </div>
  
  )
}

export { TodoItems }
