import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,description,imageurl,newsUrl,author,date} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width :"18rem"}}>
            <img src={!imageurl?"https://ichef.bbci.co.uk/news/1024/branded_news/c06c/live/b410f390-3171-11ef-a5a1-f9c06821b1bc.png":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p class="card-text"><small className="text-body-secondary">By <strong>{!author?"unKnown":author}</strong> on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItems
