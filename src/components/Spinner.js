import React from 'react'
import './spinner.css'

const Spinner=(props)=> {
    return (
        <div className="d-flex justify-content-center align-items-center" style={props.big?{width:"100vw",height:"80vh"}:{}}>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    )
}

export default Spinner
