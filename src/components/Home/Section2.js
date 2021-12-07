import React from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import "./Section2.css"
import Section2Img from '../../images/unsplash_19152.png'


function Section2() {
    return (
        <div className="section2">

            <Row>
            
            <Col>
            <img src={Section2Img} alt="section2-img" className="section2-img" />
            </Col>
            
            <Col>
            <p className="orange-c sub-heading-s2">Lorem Ipsum dummy text</p>
            <h1 className="heading black-c s2h">Amet minim mollit non deserunt </h1>
            <p className="para-s2">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
            </p>
            <button className="bluebutton">LEARN MORE</button>
            </Col>
            
            </Row>
        </div>
    )
}

export default Section2
