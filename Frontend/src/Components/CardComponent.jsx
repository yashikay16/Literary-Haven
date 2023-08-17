import React from 'react';
import { books } from './dummyData'; // Import your dummy data here
import { useNavigate } from 'react-router';
import './CardComponent.css'
const CardComponent = () => {
  const navigate = useNavigate();

  const navigateOurCollection = () => {
    // navigate to home
    navigate('');
  };
  const cardStyle = {
    backgroundColor: '#f8f9fa', // Set the background color
    border: 'none', // Remove card border
    borderRadius: '10px', // Add border radius
    padding: '15px', // Add padding to the card
    height:'220px',
  };

  return (
    <section style={{backgroundColor:"gainsboro"}}>
      <div className="container">
       
       
        <div className="row">
        <div className='mt-4 mb-3 '> 
        <h1 className="text-center " >Our Best Collection</h1></div>
        
          {books.map((book, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100" style={cardStyle}>
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <img src={book.image} alt={book.name} className="img-fluid px-2 py-2 " style={{ height: '300px',width:"430px",backgroundPosition:"center" }} />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      
                      <h5 className=" name card-title  ">{book.name}</h5>
                      <h6 className="author card-text ">Author: {book.author}</h6>
                      <p className="pages card-text ">Pages: {book.pages}</p>
                      
                      <button className="read btn btn-primary " onClick={navigateOurCollection}>Read</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
