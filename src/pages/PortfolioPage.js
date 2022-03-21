import React, {Component,Fragment} from 'react';
import TpNavigation from "../components/TopNavigation/TpNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";

class PortfolioPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TpNavigation title='Portfolio'/>
                <PageTop pagetitle='Portfolio'/>
                <AllProjects/>
                <Footer/>

            </Fragment>
        );
    }
}

export default PortfolioPage;