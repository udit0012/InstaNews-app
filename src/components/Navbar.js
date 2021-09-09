import React from 'react'
import {Link} from "react-router-dom";
const Navbar=(props)=>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100" style={{zIndex:"1"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand position-relative" style={{left:"60px"}} to="/">{props.apptitle}</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
