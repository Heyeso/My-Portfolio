import React, {Component} from 'react'
import Home from './component/home'
import Main from './component/main'
import About from './component/about'
import $ from 'jquery'

class App extends Component {
  constructor() {
    super()
    this.state = {
      current : "home"
    }
  }

  // animation to about
  // line comein and cover and fade out.
  changeView = (input) => {
    $(".tem").fadeIn(0)
    
    if(input === "about") {
      // add anim class
      $(".tem").addClass("transition")

      // fade out anim
      setTimeout(() => {
        $(".transition").fadeOut(500)
      }, 1500);

      //switch page
      setTimeout(() => {
        this.setState({
          current : input
       })
      }, 1500);

      // remove anim class
      setTimeout(() => {
        $(".tem").removeClass("transition")
      }, 2500);
    }
    else {
      $(".grid-box").fadeOut(500)
      $(".pg-menu").fadeOut(500)
      $(".head > *").fadeOut(500)
      setTimeout(() => {
        this.setState({
          current : input
       })
      }, 501);
    }


    
  }

  componentDidMount() {
    $(document).click((event)=> {
      let mouseX = event.pageX - $(".click").width()/2;
      let mouseY = event.pageY - $(".click").height()/2;

      $(".click").css({
          "top": mouseY,
          "left": mouseX,

      })
      $(".click").addClass("animate")
      setTimeout(function () { 
          $(".click").removeClass("animate");
      }, 600);
      
  })
  }

  render() {
    
    let animStyle = {
      "width" : "0",
      "position" : "fixed",
      "top": "0",
      "left" : "0",
      "height" : "100%",
      zIndex : "10000",
    }
    $("html, body, #root").css({"overflow-y": "auto"})
    return(
      <React.Fragment>
        <div className="tem" style={animStyle}></div>
        {this.state.current === "home"? <Home view={this.changeView} /> : (this.state.current === "about" ? <About view={this.changeView} /> : <Main view={this.changeView} current={this.state.current}/>)}
      </React.Fragment>
    )
  }
}

export default App;
