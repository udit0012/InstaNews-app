import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Sidemenu = (props) => {

    let menuoptions = [
        {
            option: "home",
            icon: "home",
            key: "general"
        },
        {
            option: "business",
            icon: "business",
            key: "business"
        },
        {
            option: "entertainment",
            icon: "theaters",
            key: "entertainment"
        },
        {
            option: "science",
            icon: "science",
            key: "science"
        },
        {
            option: "health",
            icon: "health_and_safety",
            key: "health"
        },
        {
            option: "sports",
            icon: "sports_soccer",
            key: "sports"
        },
        {
            option: "technology",
            icon: "devices",
            key: "technology"
        },
    ];
    const capitaliseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [sidebar, setSidebar] = useState(false)
    const [rotater, setRotater] = useState(false)
    const sidebarhandler = () => {
        setRotater(!rotater)
        setSidebar(!sidebar)
    };

    return (
        <div className="position-fixed" style={{ zIndex: "2" }}>
            <button key='1' className="btn my-2 mx-3 p-1 d-flex position-absolute" onClick={sidebarhandler}><span className="material-icons text-light" style={{ fontSize: "35px", transition: ".4s", transform: (rotater ? "rotateZ(180deg)" : "") }}>menu</span></button>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark position-absolute" style={{ width: "280px", height: "100vh", transition: ".3s", left: (!sidebar ? "-500px" : "0px") }}>
                <div className="d-flex align-items-center">
                    <button key="2" className="btn p-1 d-flex me-2" onClick={sidebarhandler}><span className="material-icons text-light" style={{ fontSize: "35px", transition: ".6s", transform: (rotater ? "rotateZ(180deg)" : "") }}>close</span></button>
                    <Link to="/" className="text-white text-decoration-none">
                        <h2 className="fs-4">{props.apptitle}</h2>
                    </Link></div>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    {menuoptions.map((ele) => {
                        return (<li className="nav-item my-1" key={ele.key}>
                            <Link to={`/${ele.option === "home" ? "" : ele.option}`} className="nav-link d-flex text-light" aria-current="page">
                                <span className="material-icons me-3 text-light">{ele.icon}</span>
                                {capitaliseFirstLetter(ele.option)}
                            </Link>
                        </li>)
                    })}
                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>Account</strong>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" style={{}}>
                        <li><Link className="dropdown-item" to="/">New User</Link></li>
                        <li><Link className="dropdown-item" to="/">Settings</Link></li>
                        <li><Link className="dropdown-item" to="/">Profile</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/">Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidemenu
