import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import logo1 from './images/logo.png';
import logo2 from './images/login.png';

function App() {
  return ( 
    
    
   
    <div className=" container">
     
     <div className="split left">
     <img  src={logo2}  className="container_image" />
     </div>
     
     
        
    <div className="split right">
    <form  name="myForm" onSubmit={(e) => login(e)} >
    <img  src={logo1}  className="container_image1" />
  <div class="form-group form_g">
     <p>Sign In</p>
     
    <label for="exampleInputEmail1">User Name</label> 
    <input type="email" class="form-control" id="Email1" aria-describedby="emailHelp" required/> 
    <span id="error-email"></span>
  </div>
  <div class="form-group " >
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="Password1" required />
    <span id="error-password"></span>
  </div>
  <div class="form-group ">
    
  <button type="submit" class="btn sign_button">SIGN IN</button>
  <a href="#">Forget Password?</a>
  </div>
  
  <footer>
  {/* <img  src={logo1}  className="container_image2" /> */}
  {/* <h1>@Demo For login </h1> */}
  </footer>     
</form>
</div> 
    </div>
  );
}



function login(e){
  e.preventDefault();
  let request={
    email: document.getElementById('Email1').value,
    password: document.getElementById('Password1').value,
    
  }
  console.log(request.email)
  console.log(request.email1)
  axios.post('http://localhost:3000/login',request)
  .then( resp => {
    alert(resp.data.message);
   
    document.getElementById('error-email').innerHTML = (resp.data.message);
    document.getElementById("Email1").style.borderColor="red";
    // document.getElementById("Password1").style.borderColor="red";
    
       })
    
  .catch(err => {
    console.log(err);
  
  })

//   .then(resp => {
//     if (email == email) {
//       document.getElementById('error-email').innerHTML = (resp.data.message);
//     }
//   })
}
//   axios.post('http://localhost:3000/login',request)
//     document.getElementById('error-email').innerHTML = (resp.data.message);
//     document.getElementById("Email1").style.borderColor="red";
//   }
// }
  
  // function validateForm(){
  // var password =document.getElementById('Password1').value;
  // if (password=123456) {
  //   document.getElementById('error-password').innerHTML = " Invalid password!";
  // }
//   if( password=123456){
//     document.getElementById('error-password').innerHTML = " Successful";
// } 
  // }
   
export default App;
