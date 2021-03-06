import React, { Component,Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TpNavigation';
import PageTop from "../components/PageTop/PageTop";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Footer from "../components/Footer/Footer";

class ProjectDetailsPage extends Component{
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                
                <TopNavigation title='Project Details'/>
                <PageTop pagetitle="Project Details"/>
                <ProjectDetails/>                
                <Footer/>             
                
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;