import React, {Component,Fragment} from 'react';
import TpNavigation from "../components/TopNavigation/TpNavigation";
import PageTop from "../components/PageTop/PageTop";
import TermsDescription from "../components/TermsDescription/TermsDescription";
import Footer from "../components/Footer/Footer";

class TermsPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
               <TpNavigation title='Terms & Conditions'/>
                <PageTop pagetitle="Terms & Conditions"/>
                <TermsDescription/>                
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;