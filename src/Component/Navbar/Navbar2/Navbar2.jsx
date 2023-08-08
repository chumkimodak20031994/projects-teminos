import React from 'react';
import "./Navbar2.css"

const Navbar2 = () => {
    return (
        <div className='navigation'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <ul className='home'>
                        <a className="nav-link disabled" aria-disabled="true">program/</a>
                        <a className="nav-link active" aria-current="page" href="#">
                            <span className='home2'>First Year Student</span>
                        </a>

                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className='navbar-brand'>
                        <a className="navbar-brand" href="#">First Year Student</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Insights</a>
                            </li>
                            <li className="nav-item nav nav nav-underline">
                                {/* <a className="nav-link active" aria-current="page" href="#"></a> */}
                                <a className="nav-link active" aria-current="page" href="#"><span className='red'>Users</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Matches</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Setting</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar2;