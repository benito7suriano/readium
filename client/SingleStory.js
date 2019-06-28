import React from 'react'
import axios from 'axios'

export default class SingleStory extends React.Component {
  constructor() {
    super()
    this.state = {
      story: {
        content: '',
        comments: []
      }
    }
  }

  async componentDidMount() {
    const storyId = this.props.match.params.storyId
    const res = await axios.get(`/api/stories/${storyId}`)

    this.setState({ story: res.data })
  }

  render () {
    const { title, id, content, author, comments } = this.state.story

    return (
      <div id='single-story' className='column'>
        <h1>{title}</h1>
        <p>{content}</p>
        <h3>Responses:</h3>
        <div id='comments'>
          {comments.map((comment,idx) => {
            return (
              <div key={idx} className='comment row'>
                <img src={comment.author.imageUrl} />
                <div className='column'>
                  <a>
                    <h5>{comment.author.name}</h5>
                  </a>
                  <div>{comment.content}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
