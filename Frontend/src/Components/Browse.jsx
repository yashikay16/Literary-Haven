import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styling/Browse.css'


const Browse = () => {
  
  const navigate = useNavigate();

    const [booksList, setbooksList] = useState([]);
    const [masterlist, setmasterlist] = useState([]);
    
    
    const fetchUserData = async () => {
      const res = await fetch('http://localhost:5000/addbook/getall');
      console.log(res.status);
      if(res.status === 200){
          const data = await res.json();
          setbooksList(data);
          setmasterlist(data);
          
      }
  };

    useEffect(() => {
     fetchUserData();
    }, []);
    const filterBookname = (e) => {
      const value=e.target.value;
      setbooksList(masterlist.filter((book) => {
        return  (book.bookname.toLowerCase().includes(value.toLowerCase())
         || book.genre.toLowerCase().includes(value.toLowerCase()) 
         || book.author.toLowerCase().includes(value.toLowerCase())
         )}));
    }
   
    

    const displayBooksData = () => {
      if(booksList.length===0){
          return <h1 className='text-center'>No Data Found</h1>
      }
  
      return booksList.map((book) => (
          <div className='col-md-12 col-lg-6  col-sm-12 mt-5 mb-4'>
              <div className="card  h-100 ">
                 
                  <div className='card-body h-100 d-flex flex-column justify-content-between'>
                    <div className='row'>
                        <div className='col-md-6'>
                           <p className=' mt-2'  >
                            <img src={book.image} alt="" className=" img-fluid" style={{width: "250px", marginTop:'70px',height: "400px",backgroundPosition:"center"}} />
                            </p>
                        </div>
                        <div className=' col-md-6'>
                          <h3 className='browsename '>{book.bookname}</h3>
                          <p className='browseauthor '>{book.author}</p>
                          <p className='browsegenre  '>{book.genre}</p>
                          <p className='browsepages '>{book.pages} Pages</p> 
                          <p className='browsedescription ' >{book.description}</p>
                          <div className='d-flex mt-auto '>
                            <a href={book.link}><button className='btn btn-warning fs-6 me-2'>Read</button></a>
                            <div>
                            <button className='btn btn-outline-primary fs-6 ' onClick={() => { handleLikeClick(book._id) }}> <i class="fas fa-thumbs-up    "></i> {book.likes || 0}</button>
                            </div>
                          </div>
                        </div>

                    </div>
                      
                  </div>
              </div>
          </div>
      ))
    }
    const handleLikeClick = async (bookId) => {
      try {
          const res = await fetch(`http://localhost:5000/addbook/${bookId}/likes`, {
              method: 'PUT',
          });
          if (res.status === 200) {
              const updatedBook = await res.json();
              setbooksList(prevBooks => prevBooks.map(book => (book._id === bookId ? updatedBook : book)));
          }
      } catch (error) {
          console.error('Error updating likes:', error);
      }
  };
  
  
  return (
    <div style={{backgroundColor:"#f6e0b5"}}>
        <header className='' style={{backgroundImage:"url(https://png.pngtree.com/background/20220729/original/pngtree-banner-with-hand-drawing-sketch-books-picture-image_1860175.jpg)",
        backgroundPosition:"100% 100% ",height:"230px",backgroundSize:"100% 150%",
       }}>
            <div className="container " >
                <p className="display-2 text-center ">
                    Read Now
                </p>
                 
                
                {/* <div class="row">
                 <div class="col-6">
                 <input type="text" placeholder="Search here"onChange={filterBookname} className="rounded-5 form-control w-75 m-auto"/>
                 </div>
                 <div class="col">
                 <input type="checkbox" className='m-auto'  onChange={filterBookname} onClick={handleChange}/>fiction
                </div>
                </div> */}
                <input type="text" placeholder="Search here" onChange={filterBookname} className="rounded-5 form-control w-50 m-auto"/>
                
            </div>
        </header>
        

        <div>
        <div className="container" >
            <div className="row">
                {displayBooksData()}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Browse