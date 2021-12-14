import React from 'react'
import '../Home/Work.css'
import ex from '../../svg/ex.svg'
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'
import {container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Work() {
    return (
        <div className='container'>
            
            <h1 className='main_heading'>Our Work</h1>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere eveniet aspernatur quo voluptatibus, mollitia sit rerum illo unde quis molestias. Ullam dolorem omnis, deleniti placeat harum autem fugiat obcaecati?</p>
          <div className="row">
              <div className="col-md-8 ">
                
                <img src={ex}className='img-fluid first_img' alt="ex image" />
                <h1 className='first_heading'>01</h1>
                {/* <div className="col"> */}
                <img src={image3}className='img-fluid therd_imge' alt="image3 image" />
                {/* </div> */}
                <img src={image2}className='img-fluid second_imge' alt="image2 image" />
                <button className="btn btn-primary">Read More</button>

              </div>
              <div className=" col-md-4 section_2">
                <h1> Nuce Purus Tel</h1>
                <p className='text2'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quaerat dolore tempora sed ipsa. Reiciendis quos veritatis, eligendi minima sit dignissimos fugit itaque explicabo, consequatur non minus incidunt. Facere, libero.</p>
                <div className="main">
                <h5 className='next'>Next</h5>
                <h5 className='Prev'>Prev</h5>
                </div>
              </div>
          </div>
        </div>
        
    )
}

export default Work