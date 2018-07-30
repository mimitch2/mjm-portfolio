// import React from 'react'
// import '../css/App.css'


// const BlogEntry = (props) => {  


//   if(props.entry){
//     return (
//       <div className="blog-main">
   
//         <div className="blog-card">

//           <h2 className="blog-heading">
//             {props.entry.title}
//           </h2>
//           <h6 className="author">{props.entry.author.first_name} {props.entry.author.last_name}</h6>
//           <h4 className="blog-heading">
//             {props.entry.subHeading}
//           </h4>
//           <div className="basic-flex-col" dangerouslySetInnerHTML={{__html: props.entry.body}} />
//         </div>
//       </div>
//     )
//   }else {
//     return <div>Hold on...</div>
//   }
// }

// export default BlogEntry;

import React, { Component } from 'react';
import Butter from 'buttercms'
// import { Helmet } from "react-helmet";
import Loading from "./Loading"

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

  render() {
    if (this.state.loaded) {
      const post = this.state.post;

      return (
        <div>
          {/* <Helmet>
            <title>{post.seo_title}</title>
            <meta name="description" content={post.meta_description} />
            <meta name="og:image" content={post.featured_image} />
          </Helmet> */}

          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.body}} />
        </div>
      );
    } else {
      return (
        <div>
          <Loading />
        </div>
      );
    }
  }
}

export default BlogPost;