import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'
import { BrowserRouter, Route, Switch, IndexRoute } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import About from './components/About'
import Loading from './components/Loading'
import Portfolio from './components/Portfolio'
import Blog from './containers/BlogContainer'
import Oops from './components/Oops'
import Butter from 'buttercms';

const butter = Butter('b7d2cf55ae6b0b2a49b996a89ae2ddb3d0f83b57');
const history = createHistory()
 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cssShow: "content hidden",
      temp: "",
      icon: ""
    }
  }


 componentDidMount = () => {
   butter.post.list({page: 1, page_size: 10}).then(function(response) {
     
     return response.data.data
   }).then(data => {     
     this.props.setBlog(data)
   })
   this.getTemp();
   history.listen((location, action) => {
     // console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
     // console.log(`The last navigation action was ${action}`)
     this.props.setURL(`${location.pathname}${location.search}${location.hash}`)
     this.getTemp();
   })
   setTimeout(() => {
     this.setState({ cssShow: "content"})
   }, 2800);

   //  setTimeout(() => {
   //    this.getTemp();
   //  }, 50000);
   
 }

 getTemp = () => {
   fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/fa792c1f87ce72cb121f485b11488cd4/30.2672,-97.7431').then(function(response) {
     return response.json();
   })
     .then(data => this.setState({temp: Math.floor(data.currently.temperature).toString() + "º", 
       icon: data.currently.icon}))
 }

 render = () => {
   return (
     <BrowserRouter>
       <div className="App" >
         <div className="pre-load-all-hidden">
           <img src="/img/IMG_0326.jpg" alt=""/>
           <img src="/img/old_portfolio_site.png" alt=""/>
           <img src="/img/monster_site.png" alt=""/>
           <img src="/img/cocktail_site.png" alt=""/>
           <img src="/img/web-design-bw.jpg" alt=""/>
           <img src="/img/DSCF0035.jpg" alt=""/>
         </div>

         <header>
           <Header />
         </header>
         <Loading /> 

         <div className={this.state.cssShow}> 
           <Switch>
             <Route exact path="/portfolio" component={Portfolio} />
             <Route exact path="/blog" component={Blog} />
             <Route  path="/"  render={(props) => <About {...props} temp={this.state.temp} icon={this.state.icon}/>} />
             <Route path="*" component={Oops} />
           </Switch>
         </div>  
       </div>
     </BrowserRouter>
   );
 }
}

export default App;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import Butter from 'buttercms'

// const butter = Butter('b7d2cf55ae6b0b2a49b996a89ae2ddb3d0f83b57');

// class BlogHome extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       loaded: false
//     };
//   }

//   fetchPosts(page) {
//     butter.post.list({page: page, page_size: 10}).then((resp) => {
//       this.setState({
//         loaded: true,
//         resp: resp.data
//       })
//     });
//   }

//   componentWillMount() {
//     let page = this.props.params.page || 1;

//     this.fetchPosts(page)
//   }

//   componentWillReceiveProps(nextProps) {
//     this.setState({loaded: false});

//     let page = nextProps.params.page || 1;

//     this.fetchPosts(page)
//   }

//   render() {
//     if (this.state.loaded) {
//       const { next_page, previous_page } = this.state.resp.meta;

//       return (
//         <div>
//           {this.state.resp.data.map((post) => {
//             return (
//               <div key={post.slug}>
//                 <Link to={`/post/${post.slug}`}>{post.title}</Link>
//               </div>
//             )
//           })}

//           <br />

//           <div>
//             {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}

//             {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           Loading...
//         </div>
//       )
//     }
//   }
// }

// export default BlogHome;