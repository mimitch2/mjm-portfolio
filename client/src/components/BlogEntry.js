import React, { Component } from 'react';
import Butter from 'buttercms'
import { Helmet } from "react-helmet";
import '../css/App.css'
import Footer from './Footer'

const butter = Butter('b7d2cf55ae6b0b2a49b996a89ae2ddb3d0f83b57');

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  async componentWillMount() {
    try {
      const slug = this.props.match.params.slug;
      const response = await butter.post.retrieve(slug)
      const json = await response
      this.setState({
        loaded: true,
        post: json.data.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  handleClick = () => {
    this.props.history.goBack()
  }

  render() {
    
    if (this.state.loaded) {
      const post = this.state.post;

      return (
        <div className="blog-post-main">
          <Helmet>
            <title>{post.seo_title}</title>
            <meta name="description" content={post.meta_description} />
            <meta name="og:image" content={post.featured_image} />
          </Helmet>

          <h1 className="blog-entry-title"><i className="fal fa-chevron-left" onClick={this.handleClick}></i> &nbsp;&nbsp;{post.title}</h1>
        
          <div dangerouslySetInnerHTML={{__html: post.body}} className="blog-entry-body"/>

          <Footer credits="Powered by:   " icon={<i className="fab footer-icon fa-react"></i>} 
            plus={<i className="fal fa-plus" style={{fontSize: ".9em"}}></i>}
            butter={<a href="https://buttercms.com/" className="butter-link" target="_blank" rel='noopener noreferrer'><img src="http://vcg.engr.ucr.edu/_nuxt/img/buttercms.37e3481.png" alt="butter cms" className="butter-logo"/></a>} 
            copyWrite="© 2018 Mike J Mitchell"/>

        </div>
      );
    } else {
      return (
        <div />
      );
    }
  }
}

export default BlogPost;