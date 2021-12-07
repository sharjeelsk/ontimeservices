import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap';
import "./Section3.css"
import Section2Img from '../../images/unsplash_19151.png'
import Section3Img2 from '../../images/unsplash_LL9V0iMpStM.png'
function Section3() {
    return (
         <div className="section3">
           <div className="bluesection">
                sdf
           </div>
           <div className="ssecond">

           </div>
            <img src={Section2Img} alt="section3-img" className="section3-img" />

            
            <Row >

            <Col className="col1">
            <p className="orange-c sub-heading-s3">Featured</p>
            <h1 className="heading white-c s3h">Amet minim mollit non deserunt </h1>
            <p className="white-c para-s3">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
            </p>
            <button className="whitebutton">LEARN MORE</button>
            </Col>

            <Col className="col2">
            <img src={Section3Img2} alt="section3-img-2" className="section3-img-2" />
            </Col>


            </Row>
            
        </div>
    )
}

export default Section3
