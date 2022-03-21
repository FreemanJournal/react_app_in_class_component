import React, { Component,Fragment } from 'react';
import {Player,BigPlayButton} from 'video-react';
import {Col, Container, Row,Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";



class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
            <Container fluid={true} className="topFixedPage p-0">
                <div className="topPageOverlay">
                    <Container className="topPageContentCourse">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <h3 className="courseFullTitle">Full Dynamic Website With Admin Panel</h3>
                                <h5 className="courseSubTitle">Total Lecture=30</h5>
                                <h5 className="courseSubTitle">Total Student=30</h5>

                            </Col>
                            <Col sm={12} md={6} lg={6}>
                             <p className="CourseDes"> 
                                I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk. 
                            </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <h1 className="serviceName">Skill you get</h1>
                        
                        <p  className="serviceDescription pl-3"> <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} /> Full Dynamic Website With Admin Panel</p>
                        <p  className="serviceDescription pl-3"> <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} /> Full Dynamic Website With Admin Panel</p>
                        <p  className="serviceDescription pl-3"> <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} /> Full Dynamic Website With Admin Panel</p>
                        <p  className="serviceDescription pl-3"> <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} /> Full Dynamic Website With Admin Panel</p>
                        <p  className="serviceDescription pl-3"> <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} /> Full Dynamic Website With Admin Panel</p>
                        <p  className="serviceDescription pl-3"> <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} /> Full Dynamic Website With Admin Panel</p>
                        <p  className="serviceDescription pl-3"> <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} /> Full Dynamic Website With Admin Panel</p>
                        <p  className="serviceDescription pl-3"> <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} /> Full Dynamic Website With Admin Panel</p>
                        <p  className="serviceDescription pl-3"> <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} /> Full Dynamic Website With Admin Panel</p>
                        
                            
                        
                        <Button variant="primary"><Link className="link-style" to="/">More Info</Link></Button>

                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                            <BigPlayButton position='center'/>

                        </Player>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        );
    }
}

export default CourseDetails;