import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useUserContext from "../UserContext";
import Swal from "sweetalert2";


const Navbar = () => {
  const { loggedIn, logout } = useUserContext();
  console.log(loggedIn);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/user/delete/'+id, {method : 'DELETE'});

        if(res.status === 200){
          Swal.fire({
          icon : 'success',
          title : 'User Deleted Successfully!!'
          });
          {logout()};
          navigateLogin();
        } else {
          Swal.fire({
          icon : 'error',
          title : 'Oops!!',
          text: 'Some Error Occured'
        });
      }
  }


  console.log(currentUser);

  const showLoginOption = () => {
    if(loggedIn===true){
      return (
        <>
          <div className="d-flex align-items-center">
            
          <button type="button" className="btn fs-6 me-1 mt-1 mb-2 " onClick={navigateAddBooks}>
                Add Book
              </button>
              <button type="button" className="btn fs-6 me-1 mt-1 mb-2 " onClick={navigateProfile}>
                Profile
              </button>
              <button type="button" className="btn btn-secondary fs-6 me-1 mt-1 mb-2 fw-bold" onClick={logout}>
                LogOut
              </button>
           
              {/* <button type="button" className="btn btn-secondary fs-6 me-1 mt-1 mb-2  fw-bold" onClick={() => { deleteUser(currentUser._id) }}>
                Delete
              </button> */}

              <img width={40} height={40} className=" rounded-circle" src={"http://localhost:5000/"+currentUser.avatar} alt="" />
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="d-flex align-items-center">
              <button type="button" className="btn btn-secondary fs-6 me-1 mt-1 mb-2 fw-bold" onClick={navigateLogin}>
                Login
              </button>

              <button type="button" className="btn btn-secondary fs-6 ms-1 mt-1 mb-2 fw-bold" onClick={navigateSignUp}>
                <i class="fa-solid fa-right-to-bracket"></i> SignUp
              </button>
          </div>
        </>
      )
    }
  }
 
  const navigate = useNavigate();
  const navigateHome = () => {
    // navigate to home
    navigate("home");
  };
  const navigateCol = () => {
    // navigate to home
    navigate("browse");
  };

  const navigateLogin = () => {
    // navigate to home
    navigate("login");
  };

  const navigateSignUp = () => {
    // navigate to home
    navigate("signup");
  };
  const navigateAddBooks = () => {
    // navigate to home
    navigate("addbooks");
  };
  const navigateProfile = () => {
    // navigate to home
    navigate("profile");
  };

  return (
    <div>
      <>
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light shadow"
          style={{ color: "yellowgreen" }}
        >
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Navbar brand */}
            <button
              type="button"
              className="btn btn-secondary fs-6"
              onClick={navigateHome}
            >
              <i className="fas fa-book"></i> Literary Haven
            </button>
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarButtonsExample">
              <div className="">
                <ul className="d-flex align-items-start navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  {/* <li className="nav-item">
                    <NavLink className="nav-link fs-5" to="/home">
                      Home
                    </NavLink>
                  </li> */}
                   <button type="button" className="btn btn-warning fs-6 me-1 mt-1 mb-2 " onClick={navigateCol}>
                Our Collection
              </button>
                  {/* <li className="nav-item">
                    <NavLink
                      className="nav-link fs-5"
                      aria-current="page"
                      to="/browse"
                    >
                      Our Collection
                    </NavLink>
                  </li> */}
                 
                  {showLoginOption()}
                  {/* <li className="nav-item dropdown">
                    <NavLink className="nav-link fs-5" to="/addbook">
                      Add Books
                    </NavLink>
                  </li> */}
                  {/* <li>
                  <button
                  type="button"
                  className="btn btn-secondary fs-6 me-2 mb-1"
                  onClick={navigateLogin}
                >
                  Login
                </button>
                  </li>
                  <li>
                  <button
                  type="button"
                  className="btn btn-secondary fs-6 "
                  onClick={navigateSignUp}
                >
                  <i class="fa-solid fa-right-to-bracket"></i> SignUp
                </button>
                  </li> */}
                </ul>
                {/* <button
                  type="button"
                  className="btn btn-secondary fs-5 me-1"
                  onClick={navigateLogin}
                >
                  Login
                </button> */}

                {/* <button
                  type="button"
                  className="btn btn-secondary fs-5 ms-1"
                  onClick={navigateSignUp}
                >
                  <i class="fa-solid fa-right-to-bracket"></i> SignUp
                </button> */}
              </div>
            </div>
            {/* Collapsible wrapper */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </>
    </div>
  );
};

export default Navbar;
