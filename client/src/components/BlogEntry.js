import React from 'react'
import '../css/App.css'


const BlogEntry = (props) => {
  return (
    <div className="blog-main">
      <div className="blog-card">
        <h2 className="blog-heading">
          {props.entry.heading}
        </h2>
        <h4 className="blog-heading">
          {props.entry.subHeading}
        </h4>
        <p className="blog-content">
          {props.entry.content}
        </p>
      </div>
 
    
    
    </div>
  )
}

export default BlogEntry;