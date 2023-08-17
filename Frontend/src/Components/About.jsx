import React from 'react'

const About = () => {
  return (
    <div id="about "style={{backgroundColor: "rgb(253, 221, 183)"}} >
        <div className='container '>
            <div className='row'>
                <h1 className='text-center mt-3 mb-4' style={{textDecoration: 'underline'}}><i>About Us</i></h1>
                <div className='col-lg-6 col-md-12 mt-4'>
                <img
                    src='https://ctl.s6img.com/society6/img/q97TabyYEz6X6N0SB1KphBaUhLs/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/fac62f21b9a1423ead834f597441d16f/~~/book-club1653128-prints.jpg?attempt=0'
                    alt='Book Club'
                    className='img-fluid'/>       
               </div>
                <div className='col-lg-6 col-md-12  '>
                    <div className='text-center mb-3'>
                    <h3>Welcome to Literary Haven!</h3>
                    <h4 > Your Gateway to Free Books Online</h4>
                    </div>
                    <h5>At Literary Haven, we believe that the joy of reading should be accessible to all, without barriers or limitations. Our mission is to create a vibrant online community where book lovers can indulge in their passion for literature without any cost. We're not just a website; we're a haven for bibliophiles, a virtual library where imaginations take flight and knowledge knows no bounds.</h5>
                     <div className='mt-1'>
                     <ul>
                         <li><b>Diverse Collection: </b> Discover a vast selection of free eBooks spanning genres from classics to contemporary, ensuring there's a book for every taste.</li>
                         <li><b>Community Hub: </b>Join fellow book lovers in our vibrant community. Swap recommendations, engage in discussions, and celebrate the joy of reading together.</li>
                         <li><b>Inclusive Access: </b>We believe in equal access to literature. Enjoy a rich world of reading without worrying about costs.</li>
                         <li><b>Seamless Experience: </b>Our user-friendly platform ensures smooth reading, whether you're on your computer, tablet, or smartphone.</li>
                     </ul> 
                     </div>
                     <h6><i>Happy reading,</i></h6>
                     <h6><i>The Literary Haven Team</i></h6>
                </div>
            </div>
        </div>
 </div>
  )
}

export default About