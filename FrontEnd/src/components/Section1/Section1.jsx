import React from 'react'
import './Section1.scss'
const Section1 = () => {
  return (
    <section className='section1'>
        <div className="container">
        <div className="s1Text">
            <h1>MADEWELL</h1>
            <p>Summer Collection</p>
            <div className="s1spans">
              <span style={{color:"black"}}>1,499 </span>
              <span style={{color:"gray"}}><del>$1,999</del></span>
            </div>
            <div className="s1Links">
              <a  href="#">SHOP NOW</a>
              <a style={{background:"rgb(32, 125, 255)",color:"white"}} href="#">SHOP NOW</a>
            </div>
        </div>
        <img src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png" alt="" />
        </div>
    </section>
  )
}

export default Section1