import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Butter from 'buttercms';
import '../css/App.css'
// import Footer from './Footer'

const butter = Butter('b7d2cf55ae6b0b2a49b996a89ae2ddb3d0f83b57');

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  fetchPosts = (page) => {
    butter.post.list({page: page, page_size: 20}).then((resp) => {
      this.setState({
        loaded: true,
        resp: resp.data
      })    
      console.log(this.state.resp);  
    });
    
    
  }

  returnBullet = (i, length) => {
    if(i < length){
      return " • "
    }
    return ""
  }

componentDidMount = () => {
  const page = this.props.match.params.page || 1;
  this.fetchPosts(page)
}

render() {
  if (this.state.loaded) {
    const { next_page, previous_page } = this.state.resp.meta;

    return (
      <div className="blog-main-page basic-flex-col">

      
        {/* <div className="blog-title-container"> */}
        <h1 className="blog-page-title">THOUGHTS ON WEB DEVELOPMENT</h1>
        {/* </div> */}
        <div className="blog-list-container">
          {this.state.resp.data.map((post) => {
            return (
              <Link to={`/post/${post.slug}`} key={post.slug}>
                <div className="blog-card">
                  <h1 className="blog-link">{post.title}</h1><img src={post.featured_image} alt="" className="blog-featured-image"/>
                  <span className="blog-featured-image-caption"></span>
                  <p className="blog-author">{post.author.first_name} {post.author.last_name} </p> 
                  <span className="blog-categories">{post.categories.map((cat, i )=> {
                    return cat.name + this.returnBullet(i, post.categories.length -1)})}</span>
                  <p className="blog-summary">{post.summary}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <br />

        <div>
          {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}

          {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
        </div>
        {/* <Footer id ={"blog-footer"} credits={`Powered by: `} copyWrite={`Designed and built by Mike Mitchell - © 2018`}/> */}
      </div>
    );
  } else {
    return (
      <div />
    )
  }
}
}

export default Blog;