import React, {Component} from 'react'

class Home extends Component {

    
    render() {
        
        return (
            <React.Fragment>
            <div className="select">
                <div className="grid-box">
                    <div onClick={() => this.props.view("intro")} className="home"><img src="images/myMinIcons/homeIcon.png" alt="home" /></div>
                    <div onClick={() => this.props.view("projects")} className="projects"><img src="images/myMinIcons/projectsIcon.png" alt ="projects" /></div>
                    <div onClick={() => this.props.view("contacts")} className="contact"><img src="images/myMinIcons/contactIcon.png" alt="contact" /></div>
                </div>
                <div className="cur-sel"></div>
            </div>
            <div className="author">@ABDULSALAM_ODETAYO</div>
            </React.Fragment>
        )
    }
}

export default Home