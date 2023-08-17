import React from 'react'
import { useNavigate } from 'react-router-dom'
// import '../Styling/home.css'
import About from './About';
import CopyRight from './CopyRight';
import Banner from './Banner';
import CardComponent from './CardComponent';


const Home = () => {

  const navigate = useNavigate();

  const navigateLogin = () => {
    // navigate to home
    navigate('login');
  };

  const navigateSignUp = () => {
    // navigate to home
    navigate('signup');
  };
  const navigateBrowse = () => {
    // navigate to home
    navigate('browse');
  };

  return (
    <div>
        <header>
          {/* Background image https://kinsta.com/wp-content/uploads/2022/10/react-components-library.png*/}
          <div
            id="intro-example"
            className="p-5 text-center bg-image"
            style={{
              backgroundImage:
                'url("https://cdn.dribbble.com/users/1365253/screenshots/11419536/media/35cb4024aca4bfdf92e00c885e017702.gif")',
                backgroundPosition:"5% 5%",
                backgroundSize: "cover",
                height: "130vh",
                width: "100%",
                // Additional styles for responsiveness
                "@media (max-width: 768px)": {
                  backgroundSize: "contain",
                },
               
              
            }}
          >
            <div className="d-flex justify-content-center align-items-center">
              <div className="" style={{color:"brown"}}>
                <h1 className="mb-3 display-5">Welcome to <i className='fw-bold'><span  style={{ textDecoration: 'underline',}}>Literary Haven</span></i></h1>
                <h5 className="mb-4 display-6 ">A book can change your life,Make your life beautiful with us</h5>
                {/* <button className="btn btn-outline-light btn-lg m-2 fw-bold" onClick={navigateLogin}>
                  LOGIN
                </button>
                <button className="btn btn-outline-light btn-lg m-2 fw-bold" onClick={navigateSignUp}>
                  SIGNUP
                </button> */}
                <button className="btn btn-outline-success text-white btn-lg m-2 fw-bold" onClick={navigateBrowse} style={{ backgroundColor: 'brown', borderColor: 'brown' }}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
          {/* Background image */}
        </header>
        <CardComponent/>
     <About/>
     <Banner/>
     <CopyRight/>
    </div>
  )
}

export default Home