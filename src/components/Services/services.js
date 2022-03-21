import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import '../../asset/images/web.svg';
import '../../asset/images/graphics.svg';
import '../../asset/images/mobile.svg';


class Services extends Component {

    constructor(){
        super();
        this.state={
            myData:[]

        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.Service).then(result=>{
            this.setState({myData:result})
        });
    }


    render() {

        const myList=this.state.myData;
        const myView=myList.map(myList=>{
            return <Col lg={4} md={6} sm={12}>
                <div className="serviceCard text-center">
                    <img src={myList.service_logo} alt=""/>
                    <h2 className="serviceName">{myList.service_name}</h2>
                    <p className="serviceDescription">{myList.service_description}</p>
                </div>
            </Col>
        });
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;