import React, {Component,Fragment} from 'react';
import TpNavigation from "../components/TopNavigation/TpNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";

class CoursesPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TpNavigation title='Courses'/>
                <PageTop pagetitle='All Courses'/>
                <AllCourses/>
                <Footer/>

            </Fragment>
        );
    }
}

export default CoursesPage;