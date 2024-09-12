import React from 'react'

export default function NewsItem(props) {
    return (
        <div className='my-3'>
            <div className="card" style={{width: "25rem"}}>
                <img src={props.imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text"><small className="text-muted">By {props.author}</small></p>
                        <p className="card-text"><small className="text-muted">{props.date}</small></p>
                        <a href={props.newsUrl} target="_blank" className="btn btn-dark btn-sm">Read more</a>
                    </div>
            </div>
        </div>
    )
}


