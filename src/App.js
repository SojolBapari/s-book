import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import News from './Component/News/News';
import SchoolList from './Component/ScloolList/SchoolList';
import idPasss from './Component/fakedata/idPass.json';
import { useState } from 'react';
import SchoolDetails from './Component/SchoolDetails/SchoolDetails';

function App() {
  const [idPass, setIdPass]=useState(idPasss);
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="*" element={<Login idPass={idPass}></Login>}></Route>
        <Route path="/home" element= {<News></News>} ></Route>
        <Route path="/schoools" element= {<SchoolList></SchoolList>} ></Route>
        <Route path="/schoool/:schoolCode" element= {<SchoolDetails></SchoolDetails>} ></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
