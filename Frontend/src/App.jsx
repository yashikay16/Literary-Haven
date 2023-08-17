import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Browse from "./Components/Browse";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Addbooks from "./Components/Addbooks";
import { UserProvider } from "./UserContext";
import UserAuth from "./UserAuth";
import Profile from "./Components/UpdateUser";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={ <Navigate to="/home" /> } />
            <Route path='home' element={ <Home /> } />
            <Route path='home/signup' element={ <SignUp /> } />
            <Route path='home/login' element={ <Login /> } />
            <Route path='home/login/signup' element={ <SignUp /> } />
            <Route path='login/signup' element={ <SignUp /> } />
            <Route path='signup/login' element={ <Login /> } />
            <Route path='signup/login/signup' element={ <SignUp /> } />
            <Route path='browse' element={ <Browse/>} />
            <Route path='home/browse' element={ <Browse/>} />
            <Route path='addbooks' element={<UserAuth><Addbooks/></UserAuth>} />
            <Route path='profile' element={<UserAuth><Profile/></UserAuth>} />
            <Route path='login' element={<Login/>} />
            <Route path='signup' element={<SignUp/>} />
          </Routes>
        </UserProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
