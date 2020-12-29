import React from 'react'
const About = (props) => {
    
    return (
        <React.Fragment>
            <img onClick={() => props.view("intro")} src="images/myMinIcons/homeIcon.png" alt="back" className="closeIcon" />
            <div className="about">
                <div className="intro">
                    <h1>About Me</h1>
                    <p>
                        I, Abdulsalam O. Odetayo, am a graduate from The Community College of Baltimore County with an Associates Of Science in Computer Science. I live in Rosedale, MD. I lived in Lagos, Nigeria, before moving to the United States of America in 2017. I love creating web applications, while I focus mostly on making the application easy to use. Just recently, I began to engage in developing chrome extensions too.
                    </p>
                </div>
                <div className="school">
                    <h1>School</h1>
                    <p>
                        At the age of 15, I graduated from High School with a High School Diploma Equivalent. For a year, I worked as an intern and then as a full-time worker at Abu cyber-cafe as a Graphics Designer. It was during this work period I acquired skills in Graphics Design. In 2018, I enrolled in a 2-year college to earn an Associate's Degree in Computer Science and transfer to a 4-year college to earn a Bachelor's Degree in Computer Science. I acquired my Associate's Degree in Computer Science on 31 May 2020 and a Maryland General Education Diploma certificate on 11 November 2020.
                    </p>
                </div>
                <div className="interest">
                    <h1>Interest</h1>
                    <p>
                        I love gaming, programming, and cooking. I spend most of my time programming to improve my skills and because I enjoy doing it. Aside from programming, I also engage in gaming on my PC. Cooking is another activity I enjoy. I spend most of my weekend cooking varieties of dishes of which most end up not as intended.
                    </p>
                </div>
                <div className="obj">
                    <h1>Objective</h1>
                    <p>
                    I am currently striving to apply my current knowledge and skills at the professional level while acquiring more knowledge and skills. Due to the pandemic, I deemed it unfavorable for myself, as a student, to engage in college classes because the current learning environment is not at its best. I plan to continue on the path to acquiring my Bachelor's Degree in Computer Science when the learning environment is more conducive. As of now, joining the professional stage is my priority.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About