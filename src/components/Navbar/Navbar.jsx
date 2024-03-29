import React from "react";
import "./Navbar.css";
import {Link } from "react-router-dom";
import logo from "../../assets/logo.png"


const Navbar = () => {
    return ( 
     <div>
        <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div> 
    
    
    <div class="site-navbar-wrap">
      <div class="site-navbar-top">
        <div class="container py-3">
          <div class="row align-items-center">
            <div class="col-6">
              <div class="d-flex mr-auto">
                <a href="#" class="d-flex align-items-center mr-4">
                  <span class="icon-envelope mr-2"></span>
                  <span class="d-none d-md-inline-block">contact@obisto.ga</span>
                </a>
                <a href="#" class="d-flex align-items-center mr-auto">
                  <span class="icon-phone mr-2"></span>
                  <span class="d-none d-md-inline-block">+241 66 77 55 52</span>
                </a>
              </div>
            </div>
            <div class="col-6 text-right">
              <div class="mr-auto">
                <a href="#" class="p-2 pl-0"><span class="icon-twitter"></span></a>
                <a href="#" class="p-2 pl-0"><span class="icon-facebook"></span></a>
                <a href="#" class="p-2 pl-0"><span class="icon-linkedin"></span></a>
                <a href="#" class="p-2 pl-0"><span class="icon-instagram"></span></a>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div class="site-navbar site-navbar-target js-sticky-header">
        <div class="container">
          <div class="row align-items-center">
            
              <div class="col-5">
                <Link to="/" className="row align-items-center">
                  <img src={logo} alt="Logo" className="logosize"/>
                </Link>

              </div>
            <div class="col-7">
              <nav class="site-navigation text-right" role="navigation">
                <div class="container">
                  <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>

                  <ul class="site-menu main-menu js-clone-nav d-none d-lg-block">
                    <li ><Link to="/" class="nav-link"> Accueil</Link></li>
                    {/* <li><a href="#classes-section" class="nav-link">Classes</a></li> */}
                    {/* <li class="has-children"> */}
                      {/* <a href="#" class="nav-link">Pages</a> */}
                      {/* <ul class="dropdown arrow-top"> */}
                        {/* <li><a href="#" class="nav-link">Team</a></li> */}
                        {/* <li><a href="#" class="nav-link">Pricing</a></li> */}
                        {/* <li><a href="#" class="nav-link">FAQ</a></li> */}
                        {/* <li class="has-children">
                          <a href="#">More Links</a>
                          <ul class="dropdown">
                            <li><a href="#">Menu One</a></li>
                            <li><a href="#">Menu Two</a></li>
                            <li><a href="#">Menu Three</a></li>
                          </ul>
                        </li> */}
                      {/* </ul> */}
                    {/* </li> */}
                    <li><a href="#about-section" class="nav-link">A propos</a></li>
                    {/* <li><a href="#events-section" class="nav-link">Events</a></li> */}
                    {/* <li><a href="#gallery-section" class="nav-link">Gallery</a></li> */}
                    <li><a href="#contact-section" class="nav-link">Contact</a></li>
                    <li><Link to="/admin" class="nav-link">Admin</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>
     );
}
 
export default Navbar;