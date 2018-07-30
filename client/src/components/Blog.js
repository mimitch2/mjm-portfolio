import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Butter from 'buttercms';
import '../css/App.css'

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

componentDidMount = () => {

  console.log(this.props);
  
  const page = this.props.match.params.page || 1;

  this.fetchPosts(page)

  // butter.post.list({page: 1, page_size: 10}).then(function(response) {
  //   return response.data.data
  // }).then(data => {     
  //   // this.props.setBlog(data)
  // })
}

render() {
  if (this.state.loaded) {
    const { next_page, previous_page } = this.state.resp.meta;

    return (
      <div>
        {this.state.resp.data.map((post) => {
          return (
            <div key={post.slug}>
              <Link to={`/post/${post.slug}`}>{post.title}</Link>
            </div>
          )
        })}

        <br />

        <div>
          {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}

          {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }
}
}

export default Blog;