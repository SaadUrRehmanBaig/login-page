import React, {useState} from "react";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {

  const [First,setFirst] = useState("");
  const [Last,setLast] = useState("");
  const [User,setUser] = useState("");
  const [Pass,setPass] = useState("");
  const [shouldLogin ,setShouldLogin]= useState(false);


  return (
    <BrowserRouter>
      <Routes>
          <Route index element={shouldLogin? (<Welcome First = {First} Last = {Last} setShouldLogin = {setShouldLogin} User ={User}/>):(<LoginPage User = {User} Pass = {Pass} setShouldLogin = {setShouldLogin} />)} />
          <Route path="signup" element={<SignUp setFirst = {setFirst} setLast = {setLast} setPass={setPass} setUser = {setUser}/>} />
          <Route path="*" element = {<div>error 404</div>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
