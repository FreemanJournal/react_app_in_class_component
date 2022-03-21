import React, {Component,Fragment} from 'react';
import TpNavigation from "../components/TopNavigation/TpNavigation";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/services";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/ContactSection/ContactSection";

class ServicePage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TpNavigation title='Services'/>
                <PageTop pagetitle='My Services'/>
                <Services/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;