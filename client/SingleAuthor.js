import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Comments from './Comments'
import Stories from './Stories'

class SingleAuthor extends Component {
  constructor () {
    super()
    this.state= {
      author: {},
      comments: [],
      stories: []
    }
  }

  async componentDidMount() {
    const authorId = this.props.match.params.authorId
    const authorP = axios.get(`/api/authors/${authorId}`)
    const storiesP = axios.get(`/api/authors/${authorId}/stories`)
    const commentsP = axios.get(`/api/authors/${authorId}/comments`)

    const [author, stories, comments] = await Promise.all([authorP, storiesP, commentsP])

    this.setState({
      author: author.data,
      comments: comments.data,
      stories: stories.data
    })
  }

  render() {
    const { author, comments, stories } = this.state

    return (
      <div id='single-author' className='column'>
        <div id='single-author-detail' className='row'>
          <div className='column mr1'>
            <h1>{author.name}</h1>
            <h1>{author.bio}</h1>
          </div>
          <img src={author.imageUrl} />
        </div>
        <hr />
        <div>
          <h4>STORIES</h4>
          { <Stories stories={stories} />}
          <h4>COMMENTS</h4>
          {<Comments comments={comments} />}

        </div>
      </div>
    )
  }
}

export default SingleAuthor



