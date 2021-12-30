import React from 'react'
import './register.css'
function Register() {
  return (
    <div className='container'>
      <div className="card-pf" style={{background:"transparent"}}>
 
  
  <div className='form'> 
       <form>
       <div className="mb-3">
      <input type="text" className="form-control" id="FirstName"  placeholder='First Name'/>
    </div>
    <div className="mb-3">
      <input type="text" className="form-control" id="LastName" placeholder='Last Name'/>
    </div>
    <div className="mb-3">
      <input type="email" className="form-control" id="Email"  placeholder='Email ID'/>
    </div>
    <div className="mb-3">
      <input type="text" className="form-control" id="Company" placeholder='Company'/>
    </div>
    <button type="submit" className="btn btn-danger" style={{float:"left"}}>Register</button>
  </form>
</div>

<div className='lastNote'>By clicking Register, you agree to our <a href='/' id='lna'>Terms of Service</a>. Learn more about how we protect your <a href='/' id='lna'>privacy</a>.</div>
    </div>
    </div>
  )
}

export default Register;

