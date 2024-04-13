import React from 'react'
import "./Page1.css"
import { NavLink } from "react-router-dom";

function Page1() {
    return (
        <>
            <div className='Whole_Main_div'>
                <div className='Sub_div1'>
                    <div className='text_innerdiv'>
                        <p className='Welcome_text'>Welcome to PopX</p>
                        <p className='Lorem_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                        <div className='btn_div'>
                            <NavLink className="btn_create" to='/Page3'>Create Account </NavLink>
                            <NavLink className="Already" to="/Page2">Already Registered? Login</NavLink>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Page1