import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import  '../App.css';
function SignUp() {
  const [flag, setFlag] = useState(false);

  function signupValidateForm(e) {
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var email = document.getElementById("inputEmail").value;
    var pass = document.getElementById("password").value;
    var cNumber = document.getElementById("contactNumber").value;
    var dob = document.getElementById("inputDate").value;

    if (!fName.match(/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/)) {
      alert("Please provide valid input in first name");
      e.preventDefault();
      return false;
    }
    if (!lName.match(/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/)) {
      alert("Please provide valid input in last name");
      e.preventDefault();
      return false;
    }
    if (!cNumber.match(/(?<!\d)\d{10}(?!\d)/)) {
      alert("Please provide valid contact number");
      e.preventDefault();
      return false;
    }
    if (
      !pass.match(
        /^.*(?=.{8,15})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
      )
    ) {
      alert("Please provide valid input in password");
      e.preventDefault();
      return false;
    }
    setFlag(true);

    //   local Storage
    var data = {
      fName,
      lName,
      email,
      pass,
      cNumber,
      dob,
    };
    var fdata = JSON.stringify(data);

    localStorage.setItem("fdata", fdata);
  }

  return (
    <div className="App">
    <div class="container main-div">
      <br />
      <br />
      <form class="row g-3" name="f1" onSubmit={signupValidateForm}>
        <div class="col-md-6">
          <label for="firstName" class="form-label">
            FirstName
          </label>
          <input
            type="text"
            class="form-control inp-size"
            id="firstName"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="lastName" class="form-label">
            LastName
          </label>
          <input
            type="text"
            class="form-control inp-size"
            id="lastName"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control inp-size"
            id="inputEmail"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="password" class="form-label">
            password
          </label>
          <input
            type="password"
            class="form-control inp-size"
            id="password"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="contactNumber" class="form-label">
            Contact Number
          </label>
          <input
            type="number"
            class="form-control inp-size"
            id="contactNumber"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="date" class="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            class="form-control inp-size"
            id="inputDate"
            required
          />
        </div>

        <div  id='i1'>
        <br/>
       
         <div style={{marginLeft:450}}> 
          <button type="submit">
            Submit
          </button>
          {flag ? <Redirect to="/logIn" />:null}
      <br />
      <h6>Already have an Account ? <Link to = "/logIn"><a>LogIn</a></Link></h6>
      </div>
        </div>
        
        </form>

    </div>
    </div>

  );
}

export default SignUp;
