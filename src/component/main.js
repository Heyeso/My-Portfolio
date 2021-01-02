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
        $(".contain-body .back").fadeOut(0)
        if(this.props.current === "projects" || this.props.current === "contacts") {
            this.setState({
                current : this.props.current
            })
            if(this.props.current === "projects")
                this.changeView("projects")
            if(this.props.current === "contacts")
                this.changeView("contacts")
        }

        $(window).scroll( function(){
            if(($(".pg-menu").offset().top + 100) > $(window).height()) {
                $(".pg-menu").css({
                    "background-color": "black",
                    transition: "all 0.3s ease-in"
                })
                $(".contain-body .back").fadeIn(0)
            }
            else {
                $(".pg-menu").css({
                    "background-color": "rgba(0,0,0,0)",
                    transition: "all 0.3s ease-in"
                })
                $(".contain-body .back").fadeOut(0)
            }
    
            $('.opt').each( function(i){
                var bottom_of_object = $(this).offset().top + ($(this).outerHeight()/2);
                var bottom_of_window = $(window).scrollTop() + $(window).height();
    
                $(".opt").slideDown();
                if( bottom_of_window > (bottom_of_object)){
                    $(this).addClass("come-in");
                    $(this).css({
                        'opacity':'1',
                        transition: "all 0.3s ease-out"
                    }, { queue: false });
                }
                
            }); 
        
        });
    }
    
    componentDidUpdate() {
        if(this.state.current === "projects") {
            $(".pg-1").css({color: "rgb(0, 162, 211)"})
            $(".pg-2").css({color: "white"})
        }
        else {
            $(".pg-2").css({color: "rgb(0, 162, 211)"})
            $(".pg-1").css({color: "white"})
        }
    }

    componentWillUnmount() {
        $(window).unbind()
    }
    
    render() {

        return (
            <React.Fragment>
                <div className="head-bg"></div>
                <nav className="pg-menu">
                    <div onClick={() => this.changeView("projects")} className="pg pg-1">PROJECTS</div>
                    <div onClick={() => this.changeView("contacts")} className="pg pg-2">CONTACT</div>
                </nav>
                <header className="head">
                    <img onClick={() => this.props.view("home")} className="logo" src="images/iconLogo.png" alt="logo" />
                    <div className="intro">
                        <div className="link">
                            <button onClick={() => this.props.view("about")}>ABOUT ME</button>
                            <button><a className="resume" href="Resume.pdf" target="_blank">Resumé</a></button>
                        </div>
                        <p>HI, I AM</p>
                        <h1>ABDULSALAM</h1>
                        <h1>ODETAYO</h1>
                        <div className="typewriter" onAnimationIteration={this.textAnim}><p>A FRONT END DEVELOPER</p></div>
                        
                    </div>
                </header>
                <main className="contain-body">
                    {this.state.current === "projects" ? <Projects /> : <Contact />}
                    <a className="back" href="#top"><i className="fas fa-arrow-up"></i></a>
                </main>
                <footer className="footer">
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/abdulsalam-odetayo-87ba72202/" target="_blank">LINKEDIN</a> | 
                    <a rel="noopener noreferrer" href="https://www.instagram.com/heyeso_92/" target="_blank">INSTAGRAM</a> | 
                    <a rel="noopener noreferrer" href="https://github.com/Heyeso?tab=repositories" target="_blank">GITHUB</a> | 
                    <a rel="noopener noreferrer" href="mailto:adeodetayo92@gmail.com" target="_blank">EMAIL</a>
                </footer>
            </React.Fragment>
        )
    }
}

export default Main