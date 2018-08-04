import React, { Component } from 'react';
import Butter from 'buttercms'
import { Helmet } from "react-helmet";
import '../css/App.css'
// import Footer from './Footer'
// import Disqus from 'disqus-react';


const butter = Butter('b7d2cf55ae6b0b2a49b996a89ae2ddb3d0f83b57');

class BlogPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }



  async componentWillMount() {
    const slug = this.props.match.params.slug;
    const response = await butter.post.retrieve(slug)
    const json = await response
    this.setState({
      loaded: true,
      post: json.data.data
    })
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
          {/* <Footer id ={"blog-footer"} credits={`Powered by: `} copyWrite={`Designed and built by Mike Mitchell - © 2018`}/> */}
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