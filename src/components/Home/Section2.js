import React from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import "./Section2.css"
import Section2Img from '../../images/unsplash_19097.png'
import dot from '../../svg/Group 19098.svg'
import box from '../../svg/5.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Section2() {
    return (
        <div className="section2">
                <Container>
            <Row>
            
            <Col md-6 className='img'>
            <img src={Section2Img} alt="section2-img" className="section2-img" />
            <img className='dotimg' src={dot} alt="gfhtf" />
            </Col>
             {/* <Col className='dot1'> 
  
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
   <span class="dot"></span>
  <span class="dot"></span><br/>
  <span class="dot"></span>
  <span class="dot"></span>
   <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span><br/>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
   <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span><br/>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
   <span class="dot"></span>
  <span class="dot"></span><br/>
  <span class="dot"></span>
  <span class="dot"></span>

</Col>  */}
           
          {/* <div className="box1"/>
          <div className="box2"/>
          <div className="box3">

          </div> */}
        
            <p className="orange-c sub-heading-s2">Lorem Ipsum dummy text</p>
            <h1 className="heading black-c s2h">Amet minim mollit<br/> non deserunt </h1>
            <p className="para-s2">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
            </p>
           
          {/* <button className=" col-md-2 btn btn-primary" style={{marginleft:'45rem'}}>LEARN MORE</button>   */}
            <img className='boximage' src={box} alt="boximage" /> 
            </Row>
            </Container>
        </div>
    )
}

export default Section2