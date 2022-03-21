import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

class Analysis extends Component {
    constructor() {
        super();
        this.state={
            data:[
                {Technology: 'Java', Projects: 30},
                {Technology: 'Kotlin', Projects: 40},
                {Technology: 'Python', Projects: 100},
                {Technology: 'MySql', Projects: 85},
                {Technology: 'PHP', Projects: 90},
                {Technology: 'React', Projects: 50},
                {Technology: 'JS', Projects: 100},
                {Technology: 'Angular', Projects: 90},
            ]
        }
    }
    render() {
        var blue='rgba(33,139,243, 1)'

        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>Technology Used</h1>
                    <Row>
                        <Col style={{width:'100%',height:'300px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={80} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey='Projects' fill={blue}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className='text-justify des'>To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system.<br/> To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.
                                I always build dynamic application. Admin panel is the heart of such kinds of application.<br/> I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.
                                Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk. </p>

                        </Col>

                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Analysis;