import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';

const Addbooks = () => {
  const booksForm = useFormik({
        initialValues: {
          bookname: "",
          author: "",
          genre: "",
          pages: "",
          description:"",
          link:"",
          image:"",
        },

    
        onSubmit: async (values, { resetForm }) => {
          console.log(values);
          const res = await fetch("http://localhost:5000/addbook/add", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          console.log(res.status);
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Book Added Successfully!",
            });
            resetForm();
          } else if (res.status === 401) {
            Swal.fire({
              icon: "error",
              title: "Invalid Credentials!",
              text: "Please Try Again",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Something went wrong",
            });
          }
        },
      });
  return (
    <div style={{ height: "200vh", letterSpacing: "2px", backgroundImage: "url(https://d36tnp772eyphs.cloudfront.net/blogs/1/2020/09/Nakajima-Library-Akita-International-University-Japan.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className='container-fluid mb-5'>
        <div className='row  justify-content-center align-items-center'>
          <div className='col-12 col-md-6 col-lg-4 ' style={{marginTop:"140px"}}>
            <div className=" card shadow" style={{ 
              background: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
              }}>
              <div className=" card-body">
                <h2 className='mt-3 mb-2 fw-5 text-center'style={{ color: '#ff7f50',textDecoration: 'underline' }}>Add books <i className="fas fa-book"></i></h2>
                <h5 className='mb-4 text-center'style={{ color: '#ffbb73' }}>Help us expand our collection by contributing now!</h5>
                <form action="" onSubmit={booksForm.handleSubmit}>
                  <div className="mb-3">
                    <label>Book Name</label>
                    <input type="text" className="form-control" placeholder="Please enter Book Name"
                      name="bookname" onChange={booksForm.handleChange} value={booksForm.values.bookname} required="" defaultValue={""} />
                  </div>
                  <div className="mb-3">
                    <label>Author</label>
                    <input type="text" className="form-control" placeholder="Please enter Author of the Book "
                      name="author" onChange={booksForm.handleChange} value={booksForm.values.author} />
                  </div>
                  <div className="mb-3">
                    <label>Genre</label>
                    <input type="text" className="form-control" placeholder="Please enter Genre"
                      name="genre" onChange={booksForm.handleChange} value={booksForm.values.genre} />
                  </div>
                  <div className="mb-3">
                    <label>Total Pages</label>
                    <input type="number" className="form-control" placeholder="Please enter Pages"
                      name="pages" onChange={booksForm.handleChange} value={booksForm.values.pages} />
                  </div>
                  <div className="mb-3">
                    <label>Description</label>
                    <textarea className="form-control" placeholder='Please write the Description,it should not exceed more than 63 words' rows="3" name="description" onChange={booksForm.handleChange} value={booksForm.values.description}></textarea>
                  </div>
                  <div className="mb-3">
                    <label>Upload Link</label>
                    <input className="form-control" name="link" onChange={booksForm.handleChange} value={booksForm.values.link}></input>
                  </div>
                  <div className="mb-3">
                    <label>Upload Image</label>
                    <input className="form-control" name="image" onChange={booksForm.handleChange} value={booksForm.values.image}></input>
                  </div>
                  <div className='text-center mt-3 mb-3'>
                    <button type="submit" className='btn btn-success'>Add book</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div style={{height:"150vh",letterSpacing:"1px",backgroundImage:"url(https://d36tnp772eyphs.cloudfront.net/blogs/1/2020/09/Nakajima-Library-Akita-International-University-Japan.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    //   <div className='container-fluid  mb-5'>
    //     <div className='text-white rounded-5 row justify-content-center align-items-center d-flex-row '>
    //       <div className='col-12 col-md-4 col-lg-3  w-50 mt-3'>
    //       <div>
    //         <h2 className='mt-5 mb-2 fw-5 text-center text-white '>Add books  <i className="fas fa-book    "></i>
    //         </h2> 
    //         <h4 className='mb-2 text-center'>Help us expand our collection by contributing now!</h4>
    //       </div>
    //     <form  action="" onSubmit={booksForm.handleSubmit}>
    //     <div className="mb-3 rounded-5 ">
    //       <label >Book Name</label>
    //      <input type="text" class="form-control"  placeholder="Please enter Book Name"
    //      name="bookname" onChange={booksForm.handleChange} value={booksForm.values.bookname} required="" defaultValue={""}/>
    //     </div>
    //     <div className="mb-3 ">
    //       <label >Author</label>
    //      <input type="text" className="form-control" placeholder="Please enter Author of the Book "
    //      name="author" onChange={booksForm.handleChange} value={booksForm.values.author}/>
    //     </div>
    //     <div className="mb-3 ">
    //       <label >Genre</label>
    //      <input type="text" className="form-control" placeholder="Please enter Genre"
    //      name="genre" onChange={booksForm.handleChange} value={booksForm.values.genre}/>
    //     </div>
    //     <div className="mb-3 ">
    //       <label >Total Pages</label>
    //      <input type="number" className="form-control"  placeholder="Please enter Pages"
    //      name="pages" onChange={booksForm.handleChange} value={booksForm.values.pages}/>
    //     </div>
    //     <div className="mb-3">
    //        <label >Description</label>
    //       <textarea className="form-control" placeholder='Please write the Description'  rows="3" name="description" onChange={booksForm.handleChange} value={booksForm.values.description}></textarea>
    //     </div>
    //     <div className="mb-3 ">
    //        <label >Upload Link</label>
    //       <input class="form-control"    name="link" onChange={booksForm.handleChange} value={booksForm.values.link}></input>
    //     </div>
    //     <div className="mb-3 ">
    //        <label >Upload Image</label>
    //       <input class="form-control"   name="image" onChange={booksForm.handleChange} value={booksForm.values.image}></input>
    //     </div>
    //     <div className='text-center mt-2 mb-2'>
    //       <button type="submit"className='btn btn-success '>Add book</button>
    //     </div>
    //     </form>
    //   </div>
    // </div>
    // </div>
    // </div>
  )
}

export default Addbooks
