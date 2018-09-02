import React from 'react'
import '../css/App.css'




const Loading = (props) => {
//   const loadingDiv = document.getElementById("loading-div")

  setTimeout(() => {
    document.getElementById("loading-div").className = "loading hidden"
  }, 3000);
  return (
    <div className="loading" id="loading-div">
      <h1 className="loading-letter1 letter ast">*</h1>
      <h1 className="loading-letter2 letter ast">*</h1>
      <h1 className="loading-letter3 letter ast">*</h1>
      <h1 className="loading-letter4 letter">L</h1>
      <h1 className="loading-letter5 letter">o</h1>
      <h1 className="loading-letter6 letter">a</h1>
      <h1 className="loading-letter7 letter">d</h1>
      <h1 className="loading-letter8 letter">i</h1>
      <h1 className="loading-letter9 letter">n</h1>
      <h1 className="loading-letter10 letter">g</h1>
      <h1 className="loading-letter11 letter ast">*</h1>
      <h1 className="loading-letter12 letter ast">*</h1>
      <h1 className="loading-letter13 letter ast">*</h1>
    </div>
  )
}

export default Loading;