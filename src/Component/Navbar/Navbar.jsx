import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary bg-white text-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Temple University</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search Dosen" aria-label="Search"></input>
                    <img className='pic' src="/assete/Rectangle.svg" alt="Bootstrap" width="30" height="24"></img>
                </form>
            </div>
        </nav>

    );
};

export default Navbar;
