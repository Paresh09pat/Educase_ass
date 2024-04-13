import React from 'react'
import "./Page3.css"
import { NavLink } from 'react-router-dom'

function Page3() {
  return (
    <>

      <div className='P3_whole'>
        <div className='P3_main_div'>
          <div className='P3_internal_main'>
            <h1>Create your PopX account</h1>

            <form class="form-md">
              <div class="form-group">
                <input id="form_name1" class="form-control" type="text" required />
                <label for="form_name1">Full Name<span class="gl-form-asterisk"></span></label>
              </div>

              <div class="form-group">
                <input id="form_name2" class="form-control" type="text" placeholder="" required />
                <label for="form_name2">Phone Number<span class="gl-form-asterisk"></span></label>
              </div>

              <div class="form-group">
                <input id="form_name2" class="form-control" type="text" placeholder="" required />
                <label for="form_name2">Password<span class="gl-form-asterisk"></span></label>
              </div>

              <div class="form-group">
                <input id="form_name2" class="form-control" type="text" placeholder="" required />
                <label for="form_name2">Company Name<span class="gl-form-asterisk"></span></label>
              </div>

              <div class="">
                <p className='agency'>Are you an Agency?<span class="gl-form-asterisk"></span> </p>
                <div className='radio_com'>
                  <input className='rad_cir' type='radio' value="rad1" name='rad'/><span>Yes</span>
                  <input className='rad_cir' type='radio' value="rad2" name='rad'/><span>No</span>
                </div>
              </div>

              <button className='log_btn'>Login</button>

              <NavLink className="link_tran" to="/Page2"><div className="goto_register">Already Registered? Login</div></NavLink>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Page3