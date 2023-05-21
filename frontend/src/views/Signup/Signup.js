import React, {useState, useEffect} from 'react'
import './Signup.css'
import Footer from '../../components/Footer/Footer';
import swal from 'sweetalert'
import IMGlock from "./lock.png";
import axios from 'axios'


function Signup() {
   const [fullName, setFullName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

  async  function userSignup(){
    const  response = await axios.post('/signup',{
        fullName: fullName,
        email: email,
        password: password
    })
    if (response.data.success === true) {
        swal({
            title: 'success!',
            text: "Signup successfully..🤗",
            icon: 'success'
        })
        window.location.href="/login"
    }
    else {
        swal({
            title: 'error!',
            text: response.data.message,
            icon: 'error'
        })
    }

    console.log(response.data)

    setFullName("")
    setEmail("")
    setPassword("")
  }


    return (
        <div>

            <div className='signup-card-container'>
                <h2 className='signup-heading'>Signup</h2>
                <img className='signup-img' src={IMGlock} />
                <form>
                    <div>
                        <input className='signup-form-input' type='text'  placeholder='Enter FullName' value={fullName}
                        onChange={ (e) =>{setFullName(e.target.value)} } required/>
                    </div>

                    <div>
                        <input className='signup-form-input' type='email' placeholder='Enter Email' value={email}
                        onChange={ (e) =>{setEmail(e.target.value)} } required/> 
                    </div>

                    <div>
                        <input className='signup-form-input' type='password' placeholder='Enter Password' value={password}
                        onChange={ (e) =>{setPassword(e.target.value)} } required/>
                    </div>

                    <button className='login-button'
                            type="button" onClick={userSignup}>Signup</button>

                </form>

            </div>
            <Footer />
        </div>
    )
}

export default Signup