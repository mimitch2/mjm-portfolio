import React from 'react'
import BlogEntry from './BlogEntry';
import '../css/App.css'



const Blog = (props) => { 

  
  return (
    <div className="blog-main basic-flex-col">
      {props.blogEntries.map(entry => <BlogEntry entry={entry} key={entry.slug} />)} 
    </div>
  )
}

export default Blog;