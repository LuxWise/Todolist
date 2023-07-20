import {AnimatePresence} from "framer-motion"

const TodoList = ({children}) => {
  return(
    <div className="relative flex min-h-screen gap-3 flex-col items-center overflow-hidden bg-sky-200/60 py-4 ">
      <AnimatePresence>
        {children}
      </AnimatePresence>
    </div>
  )
}

export { TodoList }
