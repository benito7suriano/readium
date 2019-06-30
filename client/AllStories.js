import React, { Component } from 'react'
import Stories from './Stories'
import axios from 'axios'

class AllStories extends Component {
  constructor() {
    super()
    this.state = {
      stories: []
    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/stories')
      const stories = res.data
      this.setState({ stories })
    }
    catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
        <Stories stories={this.state.stories} />
    )
  }
}

export default AllStories
