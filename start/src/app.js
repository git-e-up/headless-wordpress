import Api from './api';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import {PostList, Post} from './post-list';
import CategoryPosts from './category-posts';
import SiteNav from './sitenav';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     posts: []
  //   };
  // }
  // componentDidMount() {
  //   let api = new Api();
  //
  //   api.posts().then(data => {
  //     this.setState({
  //       posts: data,
  //     });
  //   });
  // }
  render(){
    return(
      <div className="container">
        <SiteNav />
        <h1>Welcome to Headless WordPress!</h1>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/post/:id" component={Post} />
          <Route path="/category/:id" component={CategoryPosts} />
        </Switch>
      </div>
    )
  }
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>, document.getElementById('app-container'));


//////
// let api = new Api();
//
// api.posts().then(data => {
//   console.log(data);
// })
