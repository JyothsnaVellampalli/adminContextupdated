
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard';
import AllStudents from './components/AllStudents';
import AddStudents from './components/AddStudents';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React,{ useState } from 'react';
import EditStudent from './components/EditStudent';

export const StudentContext=React.createContext();
function App() {
  
  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26
  };
  let [students, setStudents]=useState([
    {
      name:"Jyothsna",
      email:"Jyothsna@gmail.com",
      mobile:"123456",
      class:"B30WD"
    },
    {
      name:"smith",
      email:"smith@gmail.com",
      mobile:"23467899",
      class:"B30WE"
    },
    {
      name:"John",
      email:"john@gmail.com",
      mobile:"4567832",
      class:"B30WR"
    }
  ])
  return<>  
    <BrowserRouter>
    <div style={{display:"grid",gridTemplateColumns:"18% 82%"}}>
          <div><Sidebar/></div>
          <div>
            <StudentContext.Provider value={{students,setStudents}}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard data={data}/>}/>
              <Route path="/allstudents" element={<AllStudents/>}/>
              <Route path="/addstudents" element={<AddStudents/>}/>
              <Route path='/editstudent/:id' element={<EditStudent/>}/>
              <Route path="/" element={<Dashboard data={data}/>}/>
            </Routes>
            </StudentContext.Provider>
          </div>
    </div>
    </BrowserRouter>
  </>
  
  
}

export default App;
