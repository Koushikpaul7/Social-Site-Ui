import React from 'react';
import './navbar.css'
import fb from '../../Images/fb.png'
import google from '../../Images/google.png'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar  ">
  <div class="container-fluid d-flex justify-content-around">
    <a class="navbar-brand">Job Arena </a>

    <form class="d-flex" role="search">
        
      <input  class=" text-center me-2 search empty" type="search" placeholder='&#xF002; Search for your favourite Jobs' aria-label="Search"/>
     
    </form>
    <a className='mt-3 decoration' href>Create an account <span className='text-color' data-bs-toggle='modal' data-bs-target="#myModal">It's free</span></a>
    <div className='modal' id='myModal' >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>Create an account</h4>
            <button type='button' className='btn-close' data-bs-dismiss='modal'></button>
          </div>
          <div className='modal-body'>
          <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="First Name" aria-label="Username"/>

  <input type="text" class="form-control" placeholder="Last Name" aria-label="Server"/>
</div>
<input type="text" class="form-control" placeholder="Email" aria-label="Server"/><br />
<input type="text" class="form-control" placeholder="Password" aria-label="Server"/>
<br />
<input type="text" class="form-control" placeholder="Confirm Password" aria-label="Server"/>
          </div>
          <div className='m-3'>
            <button className='btn btn-primary rounded-pill modal-btn'>Sign-up now</button>
          </div>
          <div className='m-1'>
            <button className='btn bg-none border rounded modal-btn'> <img className='fb' src={fb} alt="" /> Sign-up with Facebook</button>
          </div>
          <div className='m-1'>
            <button className='btn bg-none border rounded modal-btn'> <img className='google' src={google} alt="" /> Sign-up with google</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</nav>
        </div>
    );
};

export default Navbar;


