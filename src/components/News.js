import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';



export class News extends Component {
  
    constructor(){
        super();
        console.log("Hello Umar");
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount() {
      this.fetchNews();
    }
  
    componentDidUpdate(prevProps) {
      if (prevProps.content !== this.props.content) {
        this.fetchNews(); // Fetch news when the content query changes
      }
    }
  
    fetchNews = async () => {
      const url = `https://newsapi.org/v2/everything?q=${this.props.content || 'cricket'}&apiKey=c3fe59c61fb04647a2755b3e6480a007&page=1&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      try {
        const response = await fetch(url);
        const parsedData = await response.json();
        this.setState({
          articles: parsedData.articles,
          loading: false
        });
      } catch (error) {
        console.error("Error fetching news:", error);
        this.setState({ loading: false });
      }
    };
    // async componentDidMount() {
    //   const { content } = this.props;
    //     let url = `https://newsapi.org/v2/everything?q=${content || 'cricket'}&category=&apiKey=c3fe59c61fb04647a2755b3e6480a007&page=1&pageSize=${this.props.pageSize}`;
    //     this.setState({loading : true})
    //     let response = await fetch(url);
    //     let parsedData = await response.json();
    //     console.log(parsedData);
    //     this.setState({ articles: parsedData.articles,
    //       loading: false
    //      });
         
    // }
    
    handleNextclick = async () => {
      console.log("Next clicked");

      try {
        const { content } = this.props;
        let query = content && content.trim() !== '' ? content : 'default';
        let url = `https://newsapi.org/v2/everything?q=${query || 'cricket'}&apiKey=c3fe59c61fb04647a2755b3e6480a007&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading : true});
        let response = await fetch(url);
        let parsedData = await response.json();
      console.log(parsedData);
        setTimeout(() => {
          this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
          });
        }, 1000);
      } catch (error) {
        console.error("Error fetching the data: ", error);
      }
      
    }

    handlePreviousclick = async()=>{
      console.log("Previous clicked")
      const { content } = this.props;
      let query = content && content.trim() !== '' ? content : 'default';
      let url = `https://newsapi.org/v2/everything?q=${query || 'cricket'}&apiKey=c3fe59c61fb04647a2755b3e6480a007&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
        let response = await fetch(url);
        let parsedData = await response.json();
        console.log(parsedData);
        setTimeout(() => {
          this.setState({ articles: parsedData.articles,
            page:this.state.page - 1,
            loading: false
           });
        },1000);
        
    }
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center mb-3"><strong>NewsApp - Top HeadLines</strong></h2>
        <div className="text-center">
        {this.state.loading && <Loading/>}
        </div>
        
        <div className="row">
        {!this.state.loading && this.state.articles && this.state.articles.map((element)=>{
           return (<div className="col-md-3" key={element.url}>
            <NewsItems title = {element.title?element.title.slice(0,30):""} description = {element.description?element.description.slice(0,70):""} imageurl ={element.urlToImage} newsUrl = {element.url} author ={element.author} date={element.publishedAt}/>
            </div>
           )
        })}
            
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled ={this.state.page<=1}onClick={this.handlePreviousclick}  className="btn btn-dark">&larr; Previous</button>
        <button type="button" onClick={this.handleNextclick} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
