import React from 'react'
import { useState } from "react";


function Registration_Form() {
  // let [name, setName]= useState("");
  // let [email, setEmail] = useState("");
  // let [cnic, setCNIC]= useState("");
  // let [phone, setPhone] = useState("");
  let [user, setUser] =useState({
    name: '',
    email: '',
    cnic: '',
    phone: '',
  });

// let displayname=(event)=>{
//   // setName(event.target.value)
//   // setUser({
//   //   name:event.target.value,
//   //   email: user.email,
//   //   cnic: user.cnic,
//   //   phone: user.phone,
//   // })
//   setUser({...user, name:event.target.value})
// }
// let displayemail=(event)=>{
//   // setEmail(event.target.value)
//   // setUser({
//   //   name: user.name,
//   //   email:event.target.value,
//   //   cnic: user.cnic,
//   //   phone: user.phone,
//   // })
//   setUser({...user, email:event.target.value})
// }

// let displaycnic=(event)=>{
//   // setCNIC(event.target.value)
//   // setUser({
//   //   name: user.name,
//   //   email: user.email,
//   //   cnic:event.target.value,
//   //   phone: user.phone,
//   // })
//   setUser({...user, cnic:event.target.value})
// }
// let displayphone=(event)=>{
//   // setPhone(event.target.value)
  
//   // setUser({
//   //   name: user.name,
//   //   email: user.email,
//   //   cnic: user.cnic,
//   //   phone: event.target.value,
//   // })
//   setUser({...user, phone:event.target.value})
// }

let displayuser = (event) =>{
  if(event.target.name === 'name' )
  setUser({...user, name:event.target.value})
  
  else if(event.target.name === 'email' )
  setUser({...user, email:event.target.value})
  
  else if(event.target.name === 'cnic' )
  setUser({...user, cnic:event.target.value})
  
  else if(event.target.name === 'phone' )
  setUser({...user, phone:event.target.value})
}

  return (
    <div className="container mt-5 mb-5">
     <div className="row">
        <form>
        <div className="row">
        <div className="col-6">
        
        <h3 className="text-center text-success">Registration Form</h3>

          <label htmlFor="floatname">Name</label>
          <input type="text" 
            className="form-control mb-3" 
            id="floatname" 
            name="name"
            value={user.name} 
            onChange={displayuser}
          />


          <label htmlFor="floatemail">Email</label>
          <input type="email" 
            className="form-control mb-3" 
            id="floatemail" 
            name="email"
            value={user.email} 
            onChange={displayuser}
          />
 
          <label htmlFor="floatcnic">C-N-I-C</label>
          <input type="number" 
            className="form-control mb-3"  
            id="floatcnic" 
            name="cnic"
            value={user.cnic} 
            onChange={displayuser}
          />

          <label htmlFor="floatno">Phone No</label>
          <input type="tel" 
            className="form-control mb-4"  
            id="floatno" 
            name='phone'
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

export default Registration_Form