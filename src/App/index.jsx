import React from "react";
import { TodoContextProvider } from "../Context";
import { AppUI } from './AppUI';

function App() {
  
    return (
    <TodoContextProvider>
      <AppUI/>  
    </TodoContextProvider>
    )
}

export default App;
