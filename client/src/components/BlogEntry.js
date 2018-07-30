import React from 'react'
import '../css/App.css'


const BlogEntry = (props) => {  


  if(props.entry){
    // console.log(props.entry);
    
    return (
      <div className="blog-main">
   
        <div className="blog-card">

          <h2 className="blog-heading">
            {props.entry.title}
          </h2>
          <h6 className="author">{props.entry.author.first_name} {props.entry.author.last_name}</h6>
          <h4 className="blog-heading">
            {props.entry.subHeading}
          </h4>
          <div className="basic-flex-col" dangerouslySetInnerHTML={{__html: props.entry.body}} />
        </div>
      </div>
    )
  }else {
    return <div>Hold on...</div>
  }
}

export default BlogEntry;