import React from 'react'

const NewsItems = (props)=> {
    let {title,description, imageurl,newsurl,author,date,sourcename} = props
    let dimg = "https://www.rcsdk8.org/sites/main/files/main-images/camera_lense_0.jpeg";
    return (
        <div className="my-3">
            <div className="card" style={{height:"70vh"}}>
                <img src={imageurl?imageurl:dimg} className="card-img-top" style={{width:"100%",height:"30vh "}} alt="" />
                <h6 className="card-title mb-0"><span className="badge bg-danger m-3 mb-0">{sourcename}</span></h6>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsurl} target="_blank" className="btn btn-dark btn-sm" rel="noreferrer">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItems
