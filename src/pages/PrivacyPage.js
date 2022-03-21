import React, {Component,Fragment} from 'react';
import TpNavigation from "../components/TopNavigation/TpNavigation";
import PageTop from "../components/PageTop/PageTop";
import PrivacyDescription from "../components/PrivacyDescription/PrivacyDescription";
import Footer from "../components/Footer/Footer";

class PrivacyPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
               <TpNavigation title='Privacy Policy'/>
                <PageTop pagetitle="Privacy Policy"/>
                <PrivacyDescription/>                
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;