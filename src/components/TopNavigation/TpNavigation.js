import React, {Component,Fragment} from 'react';
import '../../../src/asset/css/custom.css'
import '../../../src/asset/css/bootstrap.min.css'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import whitelogo from '../../asset/images/navlogo.svg'
import bluelogo from '../../asset/images/navlogoScroll.svg'
import {NavLink} from "react-router-dom";

class TpNavigation extends Component {
    constructor(props) {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whitelogo],
            navVariant:'dark',
            navBarBack:"navBackground",
            navBarItem:'navItem',
            pageTitle: props.title

        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
           this.setState({navBarTitle:'navTitle-Scroll',navBarLogo:[bluelogo],navVariant:'light',navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll'})
        }else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle',navBarLogo:[whitelogo],navVariant:'dark',navBarBack:'navBackground',navBarItem:'navItem'})

        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Navbar.Brand><NavLink  className={this.state.navBarTitle} to='/'><img src={this.state.navBarLogo}/> Rabbil Hasan</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/service">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/course">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        );
    }
}

export default TpNavigation;