import React from 'react'
import './Footer.css'
import ImgGithub from './github.png'
import ImgGmail from './gmail.png'
import ImgLinkedin from './linkedin.png'


function Footer() {
    return (
        <div className='footer-container'>

            <div className='footer-text'>
                Developed By <a className='footer-hyper-link' href='https://github.com/vaishnavihole/' target="_blank">Vaishnavi Choudhary</a>
            </div>
            <div>
                <a href='https://github.com/vaishnavihole/balance-sheet' target="_blank">
                    <img className='footer-img' src={ImgGithub} />
                </a>

                <a href='mailto:vaishnavihole1@gmail.com' target="_blank">
                    <img className='footer-img' src={ImgGmail} />
                </a>

                <a href='https://www.linkedin.com/in/vaishnavihole/' target="_blank">
                    <img className='footer-img' src={ImgLinkedin} />
                </a>
            </div>
        </div>
    )
}

export default Footer