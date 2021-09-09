import React, {useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [pages, setPages] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const capitaliseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const update = async ()=> {
        props.setprogress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pages}&pageSize=${props.pagesize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setprogress(30);

        let parseddata = await data.json();
        props.setprogress(60);

        setArticles(parseddata.articles)
        setTotalResults(parseddata.totalResults)
        setLoading(false)
        
        props.setprogress(100);
    }
    useEffect(() => {
        document.title = `${props.apptitle} - ${props.category==="general"?"Home":capitaliseFirstLetter(props.category)}`
        update()
    },[])

    // const handleprevious = async () => {
    //     setPages(pages-1)
    //     update()
    // }
    // const handlenext = async () => {
    //     setPages(pages+1)
    //     update()
    // }
    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pages+1}&pageSize=${props.pagesize}`;
        setPages(pages+1);
        let data = await fetch(url);
        let parseddata = await data.json();
        setArticles(articles.concat(parseddata.articles))
        setTotalResults(parseddata.totalResults)
      };
        return (
            <>
            <div className="position-absolute w-100" style={{top:"50px"}}>
                <h1 className="my-3 text-center">{props.apptitle} - {props.category === "general" ? "" : capitaliseFirstLetter(props.category)} Top Headlines</h1>
                {loading && <Spinner big={true}/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner big={false}/>}
                >
                    <div className="container">
                    <div className="row">
                    {articles.map((newselement) => {
                        return (
                        <div className="col-md-4" key={newselement.url}>
                        <NewsItems sourcename={newselement.source.name} imageurl={newselement.urlToImage} title={newselement.title?newselement.title.slice(0,35): ""} description={newselement.description?newselement.description.slice(0,180): ""} newsurl={newselement.url} author={newselement.author} date={newselement.publishedAt}/>
                        </div>
                    )
                    })}
                    </div></div>
                </InfiniteScroll>
                {/* <div className="contianer d-flex justify-content-between">
                <button disabled={pages<=1} type ="button" className="btn btn-outline-dark" onClick = {handleprevious}>&larr; Previous</button>
                <button disabled={pages+1>Math.ceil(totalResults/props.pagesize)} type ="button" className="btn btn-outline-dark" onClick = {handlenext}>Next &rarr; </button>
                </div> */}</div>
            </>
        )
}

News.defaultProps = {
    country: "in",
    pagesize: 8,
    category: "general",
    apptitle: "News App Title"
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
    apptitle: PropTypes.string
}
export default News
