
import React, {Component} from 'react'
import * as emailjs from 'emailjs-com'

class Contact extends Component {

    constructor() {
        super()
        this.state = {
          fname: "",
          lname: "",
          email: "",
          message: ""
        }
      }

      handleSubmit = (e) => {
        e.preventDefault()

        emailjs.send('service_3xv1u4n', 'template_07v4q8q', this.state, "user_J6cW0Q4jqtt4jFGLjCuxx")
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });

         this.resetForm()
     }

     resetForm() {
      this.setState({
          fname: "",
          lname: "",
          email: "",
          message: ""
      })
    }
    
    textHandler = (event) => {
        if(event.target.name === "fname")
            this.setState({
                fname : event.target.value
            })
        
        if(event.target.name === "lname")
            this.setState({
                lname : event.target.value
            })

        if(event.target.name === "email")
            this.setState({
                email : event.target.value
            })
    
        if(event.target.name === "message")
            this.setState({
                message : event.target.value
            })
    }
      
    
    render() {
        return (

        <div id="contact" className="contain">
          <img src="images/undraw_hiring_cyhs.svg" alt="hire" />
          <section className="obj">
            <h1>Let's Work Together</h1>
            <p>
              Dedicated Front-end developer with experience in design and knowledgeable in web development.
              Confident in ability to incorporate programming and graphics designing skills into web design and
              development using HTML, CSS and JavaScript.
            </p>
            <p>
              <a href="Resume.pdf" target="_blank">Click Here</a> for my Resumé
            </p>
          </section>
          <form id='#myForm' onSubmit={this.handleSubmit}>
            <div className="name">
              <p>Name *</p>
              <div className="min-grid">
                <div>
                  <label htmlFor="fname">First Name</label>
                  <input type="text" name="fname" required onChange={this.textHandler} value={this.state.fname}/>
                </div>
                <div>
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" name="lname" required onChange={this.textHandler} value={this.state.lname}/>
                </div>
              </div>
            </div>
            <div className="email">
              <label htmlFor="email">Email *</label>
              <input type="email" name="email" required onChange={this.textHandler} value={this.state.email} />
            </div>
            <div className="message">
              <label htmlFor="message">Message *</label>
              <textarea name="message" onChange={this.textHandler} value={this.state.message} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        )
    }
}

export default Contact