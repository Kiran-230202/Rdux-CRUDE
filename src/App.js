import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import View from "./View";
import CreateUser from "./CreateUser";
import EditeUser from "./EditUser";



function App() {


  return (
   <>
    <h1 className='bg-dark text-primary p-2 text-center '>Redux Crude Operations</h1>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/view" element={<View/>}/>
    <Route path="/add" element={<CreateUser/>}/>
    <Route path="/edit/:userid" element={<EditeUser/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
