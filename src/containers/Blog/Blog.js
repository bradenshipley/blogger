import React, { Component } from "react"
import { Route, NavLink, Switch } from "react-router-dom"
import Posts from "./Posts/Posts"
import FullPost from "./FullPost/FullPost"
import NewPost from "./NewPost/NewPost"

import "./Blog.css"

class Blog extends Component {
  render() {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                {/*use link component to navigate without reloading the page*/}
                <NavLink
                  to='/'
                  exact
                  activeStyle={{ color: "fa923f", textDecoration: "underline" }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                  exact
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route path='/new-post' component={NewPost} />
          <Route exact path='/:id' component={FullPost} />
        </Switch>
        {/* <Posts /> */}
      </div>
    )
  }
}

export default Blog
