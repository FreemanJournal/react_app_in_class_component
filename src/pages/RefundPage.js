import React, { Component,Fragment } from 'react';
import TpNavigation from "../components/TopNavigation/TpNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import RefundSection from "../components/RefundDescription/RefundSection.js"



class RefundPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TpNavigation title='Refund Policy'/>
                <PageTop pagetitle="Refund Policy"/>
                <RefundSection/>                
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;