import React, { Component } from 'react';
import  '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const SmoothScroll = () => {
    return(
        <section>
        <div className="navbar-fixed">
            <nav className="purple">
                <div className="container">
                <div className="nav-wrapper">
                        <AnchorLink href="!#" className="brand-logo">AirLog</AnchorLink>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                            <li><AnchorLink href="/home">Home</AnchorLink></li>
                            <li><AnchorLink href="/search">Search</AnchorLink></li>
                            <li><AnchorLink href="/explore">Explore</AnchorLink></li>
                            <li><AnchorLink href="/adventures">Adventure</AnchorLink></li>
                            <li><AnchorLink href="/gallery">Gallery</AnchorLink></li>
                            <li><AnchorLink href="/contact">Contact</AnchorLink></li>
                            
                            </ul>
                </div>
                </div>
            </nav>
        </div>
        <ul className="sidenav" id="slide-out">
        <li><AnchorLink href="/home">Home</AnchorLink></li>
        <li><AnchorLink href="/search">Search</AnchorLink></li>
        <li><AnchorLink href="/explore">Explore</AnchorLink></li>
        <li><AnchorLink href="/adventures">Adventure</AnchorLink></li>
        <li><AnchorLink href="/gallery">Gallery</AnchorLink></li>
        <li><AnchorLink href="/contact">Contact</AnchorLink></li>
        
        </ul>
        </section>

    );
}

export class Navbar extends Component {
    render() {
        return (
            <div>
                <SmoothScroll />
            </div>
        )
    }
}

export default Navbar
