import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import ImgHeader from './header-img.png'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col-md-6'>
          <div className='header-img-container'><img className='header-image' src={ImgHeader} /></div>
        </div>
        <div className='col-md-6'>
          <div className='features-container'>

            <div className='features-card'>
              <div className='feature-card-icon'>📔</div>
              <div className='feature-card-title'>Record all transaction at one place</div>
            </div>

            <div className='features-card'>
              <div className='feature-card-icon'>✅</div>
              <div className='feature-card-title'>Track income and expenses easily</div>
            </div>


            <div className='features-card'>
              <div className='feature-card-icon'>🛍️</div>
              <div className='feature-card-title'>Transaction category management</div>
            </div>


            <div className='features-card'>
              <div className='feature-card-icon'>💰</div>
              <div className='feature-card-title'>Smooth represenation of cashflow</div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
      </div>
  )
}

export default Home