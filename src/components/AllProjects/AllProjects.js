import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import CardPhoto from "../../asset/images/card-photo.jpg";
import {Link} from 'react-router-dom';


class AllProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center mt-5'>

                    <Row>
                        <Col sm={12} md={6} lg={4}  className='p-4'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src={CardPhoto} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='p-4'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src={CardPhoto} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='p-4'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src={CardPhoto} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='p-4'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src={CardPhoto} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='p-4'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src={CardPhoto} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='p-4'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src={CardPhoto} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='p-4'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src={CardPhoto} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='p-4'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src={CardPhoto} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default AllProjects;