import React from 'react'

const fakeStory = {
  title: 'Ships',
  id: 2,
  content: 'A ship in port is safe,\nbut that\'s not what ships are built for',
  author: {
    id: 1,
    name: 'Grace Hopper'
  },
  comments: [
    {
      id: 4,
      content: 'I like ships!',
      author: {
        id: 2,
        name: 'Alan Turing',
        imageUrl: 'default-author.png'
      }
    }
  ]
}

export default class SingleStory extends React.Component {
  constructor() {
    super()
    this.state = { fakeStory }
  }

  render () {
    const { title, id, content, author, comments } = this.state.fakeStory

    console.log(this.state)

    return (
      <div id='single-story' className='column'>
        <h1>{title}</h1>
        <p>{content}</p>
        <h3>Responses:</h3>
        <div id='comments'>
          {comments.map(comment => {
            return (
              <div className='comment row'>
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
