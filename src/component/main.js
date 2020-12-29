import $ from 'jquery'
import React, {Component} from 'react'
import Projects from './projects'
import Contact from './contact'

class Main extends Component {

    constructor() {
        super()
        this.state = {
          current : "projects",
          c: 0
        }
    }
    
      changeView = (input) => {
          this.setState({
             current : input
          })
          $('html,body').animate({scrollTop: $(".contain-body").offset().top}, 100);
      }

    textAnim = (e) => {
        let text = ["A WEB DEVELOPER", "A PROGRAMMER", "A SOFTWARE DEVELOPER", "A FRONT END DEVELOPER"]
        if(this.state.c === 3)
            this.setState({
                c : 0
            })
        else
            this.setState((prev) => ({
                c : prev.c + 1
            }))
        
        $(".typewriter p").text(text[this.state.c])
    }

    componentDidMount() {
        if(this.props.current === "projects" || this.props.current === "contacts") {
            this.setState({
                current : this.props.current
            })
            if(this.props.current === "projects")
                this.changeView("projects")
            if(this.props.current === "contacts")
                this.changeView("contacts")
        }
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
                        <div className="typewriter" onAnimationIteration={this.textAnim}><p>A FRONT END DEVELOPER</p></div>
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