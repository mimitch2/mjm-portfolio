import React, { Component } from 'react';
import Butter from 'buttercms'
import { Helmet } from "react-helmet";
import Loading from "./Loading"
import '../css/App.css'
// import Disqus from 'disqus-react';


const butter = Butter('b7d2cf55ae6b0b2a49b996a89ae2ddb3d0f83b57');

class BlogPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }



  componentWillMount() {
    let slug = this.props.match.params.slug;

    butter.post.retrieve(slug).then((resp) => {
      this.setState({
        loaded: true,
        post: resp.data.data
      })
    });
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
          
        </div>
      );
    } else {
      return (
        <Loading />
      );
    }
  }
}

export default BlogPost;