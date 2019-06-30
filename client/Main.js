import React from 'react'
import Navbar from './Navbar'
import Stories from './Stories'
import Authors from './Authors'
import { HashRouter as Router, Route } from 'react-router-dom'
import SingleStory from './SingleStory'
import SingleAuthor from './SingleAuthor'

export default class Main extends React.Component {
  render () {
    return (
      <Router>
        <div id='main'>
          <div className='column container'>
            <div id='header'>
              <h1>Readium</h1>
            </div>
            <Navbar />
          </div>
          <Route exact path='/' component={Stories} />
          <Route exact path='/stories' component={Stories} />
          <Route exact path='/authors' component={Authors} />
          <Route path='/stories/:storyId' component={SingleStory} />
          <Route path='/authors/:authorId' component={SingleAuthor} />
        </div>
      </Router>
    )
  }
}
