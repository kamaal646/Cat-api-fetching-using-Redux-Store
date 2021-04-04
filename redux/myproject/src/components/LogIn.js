import React, { useState } from "react";
import { Redirect, Link, useHistory} from "react-router-dom";

function LogIn() {
  const [flag, setFlag] = useState(false);
  const history =useHistory();
  function loginValidateForm(e) {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
   
    // if (
    //   !pass.match(
    //     /^.*(?=.{8,15})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
    //   )
    // ) {
    //   alert("Please provide valid input in password");
    //   e.preventDefault();
    // }

    var objFetchData = localStorage.getItem("fdata");
    var fetchData = JSON.parse(objFetchData);
    e.preventDefault()

    if(fetchData==null){
      alert("Need to SignUp first")
      return false
    }else if (fetchData.email === email && fetchData.pass === pass) {
      
      alert(`Welcome ${fetchData.fName} ${fetchData.lName}`)
      history.push('/My')
    } else {
      console.log("aagua");
      alert("Please provide valid Username & Password");
      e.preventDefault();
      return false;
    }
    setFlag(true);
  }
  return (
    <div className="App">
      <br />
      <br />
      <h2>
        <u>Login to your account!</u>
      </h2>
      <br />
      <form name="f2" onSubmit={loginValidateForm}>
        <a>Email</a>
        <br />
        <input
          type="email"
          name="t5"
          id="email"
          class="formt"
          size="30"
          required
        />{" "}
        <br />
        <a>Password</a>
        <br />
        <input
          type="password"
          name="t6"
          id="pass"
          class="formt"
          size="30"
          required
        />{" "}
        <br />
        <br />
        <button type="submit" class="btn btn-primary">
          Login
        </button>
        <br/>
        <br/>
        <h6>not registered ?  <Link to = "/SignUp"><a>SignUp</a></Link></h6>

        {flag ? <Redirect to="/Data" />:null}
        <br />
      </form>
    </div>
  );
}

export default LogIn;
