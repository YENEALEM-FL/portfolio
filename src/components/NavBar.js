import React from "react";

const NavBar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="/#">Yenealem Settegne</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
           
                        <li className="nav-item">
                            <a className="nav-link" href="/Experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/AcademicProjects">AcademicProjects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/Certificate">Certificate</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Degrees">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Message">Send Message</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
}
export default NavBar;