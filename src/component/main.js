import $ from 'jquery'
import React, {Component} from 'react'
import Projects from './projects'
import Contact from './contact'

class Main extends Component {

    constructor() {
        super()
        this.state = {
          current : "projects"
        }
    }
    
      changeView = (input) => {
          this.setState({
             current : input
          })
          $('html,body').animate({scrollTop: $(".contain-body").offset().top}, 100);
      }

    componentDidMount() {
        if(this.props.current === "projects" || this.props.current === "contacts")
            this.setState({
                current : this.props.current
        })
    }
    
    componentDidUpdate() {
        if(this.state.current === "projects") {
            $(".pg-1").css({color: "rgb(1, 225, 255)"})
            $(".pg-2").css({color: "white"})
        }
        else {
            $(".pg-2").css({color: "rgb(1, 225, 255)"})
            $(".pg-1").css({color: "white"})
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="head-bg"></div>
                <div className="pg-menu">
                    <div onClick={() => this.changeView("projects")} className="pg pg-1">PROJECTS</div>
                    <div onClick={() => this.changeView("contacts")} className="pg pg-2">CONTACT</div>
                </div>
                <div className="head">
                    <img onClick={() => this.props.view("home")} className="logo" src="images/projectLogo.png" alt="logo" />
                    <div className="intro">
                        <button onClick={() => this.props.view("about")}>ABOUT ME</button>
                        <p>HI, I AM</p>
                        <h1>ABDULSALAM</h1>
                        <h1>ODETAYO</h1>
                        <p>A FRONT END DEVELOPER</p>
                    </div>
                </div>
                <div className="contain-body">
                    {this.state.current === "projects" ? <Projects /> : <Contact />}
                </div>
                <div className="footer">
                    <a rel="noopener noreferrer" href="https://www.instagram.com/heyeso_92/" target="_blank">INSTAGRAM</a>|
                    <a rel="noopener noreferrer" href="https://github.com/Heyeso?tab=repositories" target="_blank">GITHUB</a>
                </div>

            </React.Fragment>
        )
    }
}

export default Main