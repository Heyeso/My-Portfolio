import React from 'react'
import $ from 'jquery'
import { useEffect } from 'react'

function anim () {
    $(".tem").fadeIn(0)
        // add anim class
        $(".tem").addClass("transition")
  
        // fade out anim
        setTimeout(() => {
          $(".transition").fadeOut(500)
        }, 1500);
  
        //switch page
        // remove anim class
        setTimeout(() => {
          $(".tem").removeClass("transition")
        }, 2500);
}

const About = (props) => {

    
    
    $("html, body, #root").css({"overflow-y": "hidden"})
    useEffect(() => {
        

        $("nav.side a").on("click", function(e){
            $("nav.side a").not(this).animate({"width": "20px"}, 300)
            $(this).animate({"width": "40px"}, 300)
        })

        $("nav.side a:nth-child(1)").click()
        $(".about > section").on('wheel', function(e) {
            e.preventDefault();
            let cur = $(this).index();
            if (e.originalEvent.wheelDelta >= 0) {
                if ($(this).prev().length) {
                    var prev = "#" + $(this).prev().attr("id");
                    document.querySelector(prev).scrollIntoView({behavior: 'smooth'});
                    $("nav.side a:nth-child("+(cur)+")").click()
                    $(this).prev().find("article").css({"animation": "slideIn 1s"})
                    setTimeout(() => {
                        $(this).next().find("article").css({"animation": "none"})
                    }, 1001);
                }
            } else {
                if ($(this).next().length) {
                    var next = "#" + $(this).next().attr("id");
                    document.querySelector(next).scrollIntoView({behavior: 'smooth'});
                    $("nav.side a:nth-child("+(cur+2)+")").click()
                    $(this).next().find("article").css({"animation": "slideIn 1s"})
                    setTimeout(() => {
                        $(this).next().find("article").css({"animation": "none"})
                    }, 1001);
                }
            }
        })
    }, [])
    
    return (
        <React.Fragment>
            <nav className="side">
                <a href="#about-top"></a>
                <a href="#intro"></a>
                <a href="#school"></a>
                <a href="#interest"></a>
                <a href="#obj"></a>
            </nav>
            <div className="cur-ovl"><div className="cur-sec"></div></div>
            <main className="about">
                <section id="about-top">
                    <div className="close" onClick={() => {anim(); return setTimeout(() => { return props.view("intro")}, 1000)}}><i className="fas fa-arrow-left"></i> Back</div>
                    <div></div>
                    <h1>WHO AM I?</h1>
                </section>
                <section id="intro">
                    <article>
                        <h1>ABOUT ME</h1>
                        <p>
                            I, Abdulsalam O. Odetayo, am a graduate from The Community College of Baltimore County with an Associates Of Science in Computer Science. I live in Rosedale, MD. I lived in Lagos, Nigeria, before moving to the United States of America in 2017. I love creating web applications, while I focus mostly on making the application easy to use. Just recently, I began to engage in developing chrome extensions too.
                        </p>
                    </article>
                </section>
                <section id="school">
                    <article>
                        <h1>SCHOOL</h1>
                        <p>
                            At the age of 15, I graduated from High School with a High School Diploma Equivalent. For a year, I worked as an intern and then as a full-time worker at Abu cyber-cafe as a Graphics Designer. It was during this work period I acquired skills in Graphics Design. In 2018, I enrolled in a 2-year college to earn an Associate's Degree in Computer Science and transfer to a 4-year college to earn a Bachelor's Degree in Computer Science. I acquired my Associate's Degree in Computer Science on 31 May 2020 and a Maryland General Education Diploma certificate on 11 November 2020.
                        </p>
                    </article>
                </section>
                <section id="interest">
                    <article>
                        <h1>INTEREST</h1>
                        <p>
                            I love gaming, programming, and cooking. I spend most of my time programming to improve my skills and because I enjoy doing it. Aside from programming, I also engage in gaming on my PC. Cooking is another activity I enjoy. I spend most of my weekend cooking varieties of dishes of which most end up not as intended.
                        </p>
                    </article>
                </section>
                <section id="obj">
                    <article>
                        <h1>OBJECTIVE</h1>
                        <p>
                        I am currently striving to apply my current knowledge and skills at the professional level while acquiring more knowledge and skills. Due to the pandemic, I deemed it unfavorable for myself, as a student, to engage in college classes because the current learning environment is not at its best. I plan to continue on the path to acquiring my Bachelor's Degree in Computer Science when the learning environment is more conducive. As of now, joining the professional stage is my priority.
                        </p>
                    </article>
                </section>
                
            </main>
            {/* 
            <main className="about">
                <article id="intro" className="intro">
                    <h1>About Me</h1>
                    <p>
                        I, Abdulsalam O. Odetayo, am a graduate from The Community College of Baltimore County with an Associates Of Science in Computer Science. I live in Rosedale, MD. I lived in Lagos, Nigeria, before moving to the United States of America in 2017. I love creating web applications, while I focus mostly on making the application easy to use. Just recently, I began to engage in developing chrome extensions too.
                    </p>
                </article>
                <article id="school" className="school">
                    <h1>School</h1>
                    <p>
                        At the age of 15, I graduated from High School with a High School Diploma Equivalent. For a year, I worked as an intern and then as a full-time worker at Abu cyber-cafe as a Graphics Designer. It was during this work period I acquired skills in Graphics Design. In 2018, I enrolled in a 2-year college to earn an Associate's Degree in Computer Science and transfer to a 4-year college to earn a Bachelor's Degree in Computer Science. I acquired my Associate's Degree in Computer Science on 31 May 2020 and a Maryland General Education Diploma certificate on 11 November 2020.
                    </p>
                </article>
                <article id="interest" className="interest">
                    <h1>Interest</h1>
                    <p>
                        I love gaming, programming, and cooking. I spend most of my time programming to improve my skills and because I enjoy doing it. Aside from programming, I also engage in gaming on my PC. Cooking is another activity I enjoy. I spend most of my weekend cooking varieties of dishes of which most end up not as intended.
                    </p>
                </article>
                <article id="obj" className="obj">
                    <h1>Objective</h1>
                    <p>
                    I am currently striving to apply my current knowledge and skills at the professional level while acquiring more knowledge and skills. Due to the pandemic, I deemed it unfavorable for myself, as a student, to engage in college classes because the current learning environment is not at its best. I plan to continue on the path to acquiring my Bachelor's Degree in Computer Science when the learning environment is more conducive. As of now, joining the professional stage is my priority.
                    </p>
                </article>
            </main> */}
        </React.Fragment>
    )
}

export default About