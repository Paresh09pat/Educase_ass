import React from 'react'
import "./Page2.css"
import { NavLink } from 'react-router-dom'

function Page2() {
  return (
    <>
      <div className='Page2_whole_div'>
        <div className='P2_main_div'>
          <div className='internal_main'>
            <h1 className='signin_text'>Signin to your PopX account</h1>

            <p className='lorem_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

            <form class="form-md">
              <div class="form-group">
                <input id="form_name1" class="form-control" type="text" required />
                <label for="form_name1">Email Address<span class="gl-form-asterisk"></span></label>
              </div>

              <div class="form-group">
                <input id="form_name2" class="form-control" type="text" placeholder="" required />
                <label for="form_name2">Password<span class="gl-form-asterisk"></span></label>
              </div>

              <button className='log_btn'>Login</button>

              <NavLink className="link_tran"  to="/Page3"><div className="goto_register">Create Account</div></NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page2