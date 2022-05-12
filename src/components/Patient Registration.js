import React, { useState } from "react";
import "../App.css";

function Registration() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    cnic: "",
    phone: "",
    gender: "Male"
  });

  let displayname = (event) => {
    if (event.target.name === "name") {
      setUser({ ...user, name: event.target.value });
    }
  };
  let displayemail = (event) => {
    if (event.target.name === "name") {
      setUser({ ...user, email: event.target.value });
    }
  };
  let displaycnic = (event) => {
    if (event.target.name === "name") {
      setUser({ ...user, cnic: event.target.value });
    }
  };
  let displayphone = (event) => {
    if (event.target.name === "name") {
      setUser({ ...user, phone: event.target.value });
    }
  };
  let displaygender =(event) => {
    setUser({...user, gender:event.target.value})
  }
  let displaypatient =(e) => {
    e.preventDefault();
    console.log(user)
    alert('Patient Registered Successfully')
  }
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        
          <div className="row">
            <div className="col-6">
              {user.name && user.email && user.cnic && user.phone && user.gender  && (
                <h4>
                  Mr. <span className=" text-success"> {user.name} </span>{" "}  <br />
                  Email: <span className=" text-success"> {user.email} </span>{" "} <br />
                  CNIC: <span className=" text-success">{user.cnic}</span>{" "} <br />
                  Phone: <span className=" text-success"> {user.phone} </span>{" "} <br />
                  Gender: <span className=" text-success"> {user.gender === '' ? alert("Please set gender") : user.gender} </span>{" "} <br />
                </h4>
              )}
            </div>

            <div className="col-6">
            <form onSubmit={displaypatient}>
              <h3 className="text-center text-success"> {" "}  Patient Registration Form{" "}  </h3>

              <label htmlFor="floatname">Patient Name</label>
              <input
                type="text"
                className="form-control mb-3"
                id="floatname"
                name="name"
                value={user.name}
                onChange={displayname}
                required
              />

              <label htmlFor="floatname">Email</label>
              <input
                type="text"
                className="form-control mb-3"
                id="floatname"
                name="name"
                value={user.email}
                onChange={displayemail}
                required
              />

              <label htmlFor="floatname">C-N-I-C</label>
              <input
                type="text"
                className="form-control mb-3"
                id="floatname"
                name="name"
                value={user.cnic}
                onChange={displaycnic}
                required
              />

              <label htmlFor="floatname">Phone No</label>
              <input
                type="text"
                className="form-control mb-3"
                id="floatname"
                name="name"
                value={user.phone}
                onChange={displayphone}
                required
              />
              <label htmlFor="floatname">Gender</label>
              <select
                className="form-select  mb-4"
                aria-label="Default select example"
                value={user.gender}
                onChange={displaygender}
                required="required" 
              >
                <option value="male" >Male</option>
                <option value="female" >Female</option>
              </select>

              <div className="row">
                <button type="submit" className="btn btn-success btn-block">{" "} Register {" "}</button>
              </div>
              </form>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Registration;
