import React, { Component } from 'react';
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      hi: 'hello'
    }
  }
  // Nothing needs to change here! 
  // Make note of what prop we are initially passing to `ColorBox` below!
  
  render() {
    const hi = 'hello'

    return (
      <div id="app">
          <BlogPost />
          <div id="seperator"></div>
          <div className="wrapper">
            <ColorBox opacity={1} banana={this.state.hi} hi={hi} />
          </div>
      </div>
    )
  }
}

export default App;
