import React from 'react'
import {Route, Link } from 'react-router-dom'
import Axios from 'axios'

export default class Authors extends React.Component {
  constructor() {
    super()
    this.state = {
      authors: []
    }
  }

  async componentDidMount() {
    const res = await Axios.get('/api/authors')
    const authors = res.data

    this.setState({ authors })
  }

  render() {
    return (
      <div>
        {
          this.state.authors.map(author => (
            <Link to={'FILL_ME_IN'} key={author.id}>
              <div className='author row'>
                <img src={author.imageUrl}/>
                <p>{author.name}</p>
              </div>
            </Link>
          ))
        }
      </div>
    )
  }
}
