import React from 'react'
import '../Home/Test.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import quets from '../../svg/quets.svg'

function Test() {
    return (
        <div className='container mt-5 text-center'>
           <p className='test'>TESTIMONIALS</p>
           <h1 className='heading_test '>What Our Customers say </h1>
           
           <div className="main_section">
           <img src={quets}className='img-fluid quets_img' alt="quets image" />
               <p className='test_text mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque consequuntur praesentium quasi voluptatibus consectetur, mollitia quis! Officiis laudantium vero sunt labore eum quasi, obcaecati sint vitae illo sequi quas!</p>
               <div className='jhon'>
               <h5>Jhon Doe-<sub style={{color:'red'}}>USA</sub></h5>
               </div>
              
           </div>
           <div className="number">
                  <h5>-01</h5>  
                  <h5>02</h5>  
                  <h5>03</h5>  
                  <h5>04</h5>  
               </div>
        </div>
    )
}

export default Test