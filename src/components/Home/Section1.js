import React from 'react'
import Header from '../Header/Header'
import "./Section1.css"
// import Rest from '../../images/rest.png'
import { CaretRightFill } from 'react-bootstrap-icons';
import { Container,Row,Col,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Section1() {
    return (
        <div >
            <Header />
            <div className="image-section">


            <div className="container-1">
            <p className='p1'> Integrated Way of Interior Desing</p>
           <h1 className="heading white-c">For Malesuada<br/> Quis Port Tin</h1>
           <p className='p2' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy</p>
            <Row className="row">
                {/* <Col>
                    <p className="white-c"><CaretRightFill className="orange-c" /> Hello</p>
                    <p className="white-c"><CaretRightFill className="orange-c"/> Hello</p>
                    <p className="white-c"><CaretRightFill className="orange-c" /> Hello</p>
                </Col>
                <Col>
                    <p className="white-c"><CaretRightFill className="orange-c" /> Hello</p>
                    <p className="white-c"><CaretRightFill className="orange-c" /> Hello</p>
                    <p className="white-c"><CaretRightFill className="orange-c" /> Hello</p>
                </Col> */}
            </Row>
            {/* <p className="orange-c bold-ubuntu price">₹ 1,60,000</p>
            <p className="white-c">EMI Starting from <span className="orange-c bold-ubuntu">₹4,200</span>/Month</p> */}
            <button  className="bluebutton">ODER NOW</button>
            </div>
            </div>
        </div>
    )
}

export default Section1