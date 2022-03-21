import React, { Component,Fragment } from 'react';
import {Container,Row, Col,Button } from 'react-bootstrap';


class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="courseImg" src="http://localhost:3000/static/media/card-photo.c66ae600.jpg"/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Foll Bazar</h2>
                            <p className='serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul>
                                <li className='serviceDescription'>Unlimited Dynamic Product Category</li>
                                <li className='serviceDescription'>Unlimited Dynamic Product Category</li>
                                <li className='serviceDescription'>Unlimited Dynamic Product Category</li>
                                <li className='serviceDescription'>Unlimited Dynamic Product Category</li>
                                <li className='serviceDescription'>Unlimited Dynamic Product Category</li>
                                <li className='serviceDescription'>Unlimited Dynamic Product Category</li>
                                <li className='serviceDescription'>Unlimited Dynamic Product Category</li>
                            </ul>

                            <Button variant="primary">More info</Button>


                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default ProjectDetails;