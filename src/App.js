import React, {Component} from 'react'
import Home from './component/home'
import Main from './component/main'
import About from './component/about'

class App extends Component {
  constructor() {
    super()
    this.state = {
      current : "home"
    }
  }

  changeView = (input) => {
      this.setState({
         current : input
      })
  }

  render() {
    

    return(
      <React.Fragment>
        {this.state.current === "home"? <Home view={this.changeView} /> : (this.state.current === "about" ? <About view={this.changeView} /> : <Main view={this.changeView} current={this.state.current}/>)}
      </React.Fragment>
    )
  }
}

export default App;
