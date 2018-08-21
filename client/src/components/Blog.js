import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Butter from 'buttercms';
import '../css/App.css'
import Footer from './Footer'

const butter = Butter('b7d2cf55ae6b0b2a49b996a89ae2ddb3d0f83b57');
const cat = null; //for future category filtering

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  async fetchPosts (page) {
    try {
      const response = await butter.post.list({page: page, page_size: 20, category_slug: cat})
      const json = await response
      this.setState({
        loaded: true,
        resp: json.data
      }) 
    } catch (error) {
      console.log(error);
    }  
    // console.log(this.state.resp);

    // butter.content.retrieve(['pics'])
    //   .then(function(resp) {
    //     console.log(resp.data)
    //   }).catch(function(resp) {
    //     console.log(resp)
    //   });

    // butter.category.retrieve('test')
    //   .then(function(resp) {
    //     console.log(resp.data)
    //   }).catch(function(resp) {
    //     console.log(resp)
    //   });
    // console.log(this.state.resp);  
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
          <h1 className="portfolio-blog-page-title">THOUGHTS ON WEB DEVELOPMENT</h1>

          {this.state.resp.data.map((post, i) => {
            return (
              <div className="blog-card" key={i}>
                <Link to={`/post/${post.slug}`} key={post.slug}>
                  <h1 className="blog-link">{post.title}</h1><img src={post.featured_image} alt="" className="blog-featured-image"/>
                  <span className="blog-featured-image-caption"></span>
                </Link>
                <p className="blog-author">{post.author.first_name} {post.author.last_name} </p> 
                <span className="blog-categories">
                  {post.categories.map((cat, i )=> {return cat.name + this.returnBullet(i, post.categories.length -1)})}
                </span>
                <p className="blog-summary">{post.summary}</p>
              </div>
            )
          })}
          <br />

          <div>
            {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}
            {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
          </div>
          <Footer credits="Powered by:   " icon={<i className="fab footer-icon fa-react"></i>} plus={<i className="fal fa-plus" style={{fontSize: ".9em"}}></i>}
            butter={<a href="https://buttercms.com/" className="butter-link" target="_blank" rel='noopener noreferrer'><img src="http://vcg.engr.ucr.edu/_nuxt/img/buttercms.37e3481.png" alt="butter cms" className="butter-logo"/></a>} 
            copyWrite="© 2018 Mike J Mitchell"/>
        </div>
      );
    } else {
      return (
        <div> <h1 className="portfolio-blog-page-title">THOUGHTS ON WEB DEVELOPMENT</h1></div>
      )
    }
  }
}

export default Blog;