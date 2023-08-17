import React, { useState } from 'react'
import { Navigate } from 'react-router';
import Swal from 'sweetalert2';

const UserAuth = ({children}) => { 
    const [currentUser, setcurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );
    if(currentUser!==null){
        return children;
    }
    else{
        Swal.fire({
            icon:'error',
            title:'Ohh Noo',
            text:'You are not logged in!'
        })
        return <Navigate to="/login"/>
    }
  return (
    <div>UserAuth</div>
  )
}

export default UserAuth