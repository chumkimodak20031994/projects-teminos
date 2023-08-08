import React from 'react';
import "./Navbar4.css"

const Navbar4 = () => {
    return (
        <div>
            <div className='m-5'>
                <div className="card text-bg-light mb-3">
                    <img src="/assete/headerbg.svg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex">
                        <h5 className="card-title">
                            <img className='pic' src="/assete/Rectangle (1).svg" alt="Bootstrap" width="50" height="64"></img>
                        </h5>
                        <div>
                            <h4 className="card-text m-4 w-full">Jonathan Javelle</h4>
                            <p className=''>Jonathan @ gmail.com</p>
                            <p className=' '>+1 123-456-789</p>
                        </div>
                        <a><button className='m-4 br-4 text-primary border border-primary'>student</button></a>
                        <a className='button-set'> <button type="button" className="btn btn-primary h-20  w-70">Public Profile</button></a>
                    </div>
                </div>
                <div className="card text-center M-5">
                    <div className="card-header">
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Major</a>
                                <span>Digital Media</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">year</a>
                                <span>2016</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Country</a>
                                <span>Ireland</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Role</a>
                                <span>Mentee</span>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Gender</a>
                                <span>Male</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Dob</a>
                                <span>04/13/1985</span>
                            </li>

                        </ul>
                    </div>

                    <ul className="nav nav-pills m-0 h-25">

                        <li className="nav-item">
                            <h4>Pograms</h4>
                            <div className="button">
                                <button type="button" className="btn btn-primary g-col-6 m-4">First year Student</button>
                                <button type="button" className="btn btn-primary">mba</button>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="card text-center mt-5">
                    <div className="card-header">
                        <div className='profi'>
                            <h4 className='profile'>profile infirmation</h4>
                        </div>
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Studebt number</a>
                                <span>10123</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Deperment</a>
                                <span>Design</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Year</a>
                                <span>2016</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">User Type</a>
                                <span>Student</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">College</a>
                                <span>College of arts and science</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Minor</a>
                                <span>Computer Science</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Length of course</a>
                                <span>4 years</span>
                            </li>
                        </ul>
                    </div>
                    <div className="card text-center M-5">
                        <div className="card-header">
                            <ul className="nav nav-pills card-header-pills">
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">pogram types</a>
                                    <span>Carear</span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">onbording status</a>
                                    <span>invites</span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Linkedin url
                                        <img className='pic' src="/assete/" alt="Bootstrap" width="20" height="20"></img>
                                    </a>
                                    <span>
                                        <img className='pic' src="/assete/link.png" alt="Bootstrap" width="20" height="20"></img>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Dosen Url</a>
                                    <img className='pic' src="/assete/image 14 (1).svg" alt="Bootstrap" width="50" height="64"></img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar4;