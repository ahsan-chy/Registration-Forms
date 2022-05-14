import React from 'react'
import { useState } from "react";

const Input = (props) => {
  let {name,type, value, label, onChange} = props;
  return(
    <>
        <label htmlFor={name}>{label}</label> <br/>
          <input 
            type={type}   
            id={name} 
            name={name}
            value={value} 
            onChange={onChange}
            required
            className="form-control mb-3"
          />
    </>
  )
}

function Nexxussbarry_Form() {
  let [user, setUser] =useState({
    name: '',
    email: '',
    cnic: '',
    phone: '',
  });

// ---------- Method 3 ------- //
let displayuser =({target: {name, value}}) => {
  setUser({...user, [name]: value})
}

let displaypatient =(e) => {
  e.preventDefault();
  console.log(user)
  alert('Patient Registered Successfully')
}

  return (
    <div className="container mt-5 mb-5">
     <div className="row">
      <form onSubmit={displaypatient}>
        <div className="row">
        <div className="col-6">
        
        <h3 className="text-center text-success">Registration Form</h3>
          <Input 
            type="text"  
            label="Full Name"
            id="Patientname" 
            name="name"
            value={user.name} 
            onChange={displayuser}
          />

          <Input 
            type="email"  
            label="Email"
            id="Patientemail" 
            name="email"
            value={user.email} 
            onChange={displayuser}
          />
 
          <Input 
            type="number"  
            label="CNIC"
            id="Patientcnic" 
            name="cnic"
            value={user.cnic} 
            onChange={displayuser}
          />
          
          <Input 
            type="tel"  
            label="Phone No"
            id="Patientphone" 
            name="phone"
            value={user.phone} 
            onChange={displayuser}
          />

        <div className="row mt-5">
            <button type="submit" className="btn btn-success btn-block">Submit</button>
        </div>

        </div>
        <div className="col-6" style={{paddingLeft:30}}>
           {user.name && user.email && user.cnic && user.phone && (
            <h4>
              Mr. <span className=' text-success'> {user.name} </span> <br />  
              Email: <span className=' text-success'>{user.email}</span> <br />
              CNIC: <span className=' text-success'>{user.cnic}</span> <br />
              Phone: <span className=' text-success'>{user.phone}</span> <br />
            </h4>
              )}
          
        </div>
       </div>
       </form>
    </div>

    </div>
  )
}

export default Nexxussbarry_Form