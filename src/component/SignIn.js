import React from 'react'
import './mystyle.css'
function SignIn() {
  return (
    <div className='card-pf'>
        <header className='login-pf-header'></header>
       <a href='/' id='saml'>using SAML? click here</a>
        <div className='form'> 
       <form>
    <div className="mb-3">
      <input type="email" className="form-control" id="Email"  placeholder='Email ID'/>
    </div>
    <div className="mb-3">
      <input type="password" className="form-control" id="Password" placeholder='Password'/>
    </div>
    <button type="submit" className="btn btn-danger" style={{width:"100%"}}>SignIn</button><br/>
  <div className="form-check">
  <input className="form-check-input" type="checkbox"/>
  <label className="checkbox">
    Remember Me
  </label>
  <a className='forgot' href='/'>forgot password?</a>
</div>
  </form>
  
  

  </div>
  
    </div>
    
  )
}

export default SignIn
