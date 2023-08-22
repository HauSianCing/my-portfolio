import { useState, useEffect, useRef } from "react";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Projects } from "../pages/Projects";
import { About } from "../pages/About";
import "../App.css"
import "./NavBarStyles.css";
import { Link } from 'react-scroll';

export default function NavBar() {

    const [condi, setCondi] = useState(false);
    const [colorChange, setColorchange] = useState(" ");
    const handleClick = () => {
        setCondi(!condi);
    }
    const changeNavbarColor = () => {
        if (window.scrollY >= 100) {
            setColorchange("1px 1px 5px #9437ec");
        }
        else {
            setColorchange("");
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            <nav className="Nav" style={{boxShadow:colorChange}}>
                <Link smooth spy to="app" id="Tag"  >  Portfolio
                </Link>

                <ul id="NavBar" className={condi ? "#NavBar active" : "#NavBar"}>
                    <li>
                        <Link activeClass="active" smooth spy to="home" onClick={() => handleClick()} > Home</Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="about" onClick={() => handleClick()}> About </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="projects" onClick={() => handleClick()}> MyProjects </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="contactMe" onClick={() => handleClick()}> Contact </Link>
                    </li>
                    <div className="button">
                        <a href="/HAUSIANCING_CV.pdf" download >
                            Download CV
                        </a>
                    </div>
                </ul>
                <div id="mobile" onClick={() => handleClick()}>
                    <i className={condi ? "fas fa-times" : "fas fa-bars"} />
                </div>
            </nav>
            <body className="App" id="app">
                <section id="home">
                    <Home />
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="contactMe">
                    <Contact />
                </section>
            </body>
            <div id="footer">
                © 2023 by Margaret. All rights reserved.
            </div>

        </>
    );
}