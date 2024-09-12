import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

export default function News(props) {

    const [first, setFirst] = useState({
        articles: [],
        loading: false,
        page: 1
    });

    const fetchNews = async (page) => {
        setFirst(prevState => ({ ...prevState, loading: true }));
        props.setProcess(30);
        let link = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.ApiKey}&page=${page || first.page}&pageSize=${props.totalResults}`;
        let data = await fetch(link);

        let response = await data.json();
        setFirst(prevState => ({
            ...prevState,
            articles: response.articles,
            loading: false,
            page: page || first.page
        }));
        props.setProcess(100);
    };
    useEffect(() => {
        fetchNews(first.page);
    }, [first.page]);

    let backupUrl = "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg";
    let backupTitle = " Click on read more for info";

    const toNextFun = (props) => {
        setFirst(prevState => ({
            ...prevState,
            page: prevState.page + 1
        }));        
    };
    const toPrevFun = () => {
        if (first.page > 1) {
            setFirst(prevState => ({
                ...prevState,
                page: prevState.page - 1
            }));
        }
    };
    News.defaultProps = {
        category : 'business'
    };
    {document.title = `${props.category[0].toUpperCase() + props.category.slice(1,)} - News`}
    return (
        <>
        
            <div className="container my-4">
                <h1 className='text-center'>Breaking News</h1>
                <div className="row">
                    {
                        first.articles.map((ele, index) => {
                            return <div className="col-sm-4" key={ele.url ? ele.url + index : index}>
                                <NewsItem
                                    title={ele.title ? ele.title : backupTitle}
                                    description={ele.description?ele.description.slice(1,80) : "...."}                                    imageUrl={!ele.urlToImage ? backupUrl : ele.urlToImage}
                                    newsUrl={ele.url}
                                    author = {ele.author ? ele.author : "Unknown"}
                                    date = {new Date(ele.publishedAt).toGMTString()} />
                                    
                            </div>
                        })}
                </div>
            </div>
            <div className="container d-flex justify-content-between my-4">
                <button disabled={useState.page <= 1} type="button" onClick={toPrevFun} className="btn btn-dark">&#8592; prev </button>
                <button type="button" onClick={toNextFun} className="btn btn-dark">next &#8594;</button>
            </div>
        </>
    )
    
}


// abf52991473944df89156078c831d698
