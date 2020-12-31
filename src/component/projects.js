
const Projects = () => {

    let proj = [
        {
            img : "images/subWebsite/quickSearch_Logo.png",
            alt : "quick search application",
            link : "https://quicksearch.web.app",
            info : "Quick Search - Online dictionary made easy",
            code : ""
        },
        {
            img : "images/subWebsite/weatherAppLogo.png",
            alt : "weather application",
            link : "subWebsites/weatherApp_1.0.0/index.html",
            info : "WeatherApp - Current weather and temperature of any city in the world",
            code : "https://github.com/Heyeso/Weather-App"
        },
        {
            img : "images/subWebsite/ad.png",
            alt : "Advertisement template",
            link : "subWebsites/onePageAdvert/index.html",
            info : "Advertisement Template - Single page web page for service advert",
            code : "https://github.com/Heyeso/OnePage-Advert"
        },
        {
            img : "images/subWebsite/quizLogo.png",
            alt : "a very short quiz game",
            link : "subWebsites/simpleQuizGame/index.html",
            info : "Quiz? - Try a very short quiz",
            code : "https://github.com/Heyeso/Simple-Quiz"
        }
    ]

    return (
        <div id="projects" className="contain">
            <div className="contain-grid">
                {proj.map((val, index) => (
                <div key={index} className="opt">
                    <img src={val.img} alt={val.alt} />
                    <div className="link">
                        <div>
                            <a title="view" rel="noopener noreferrer" href={val.link} target="_blank" ></a>
                        </div>
                    </div>
                    <div className="info">
                        <div>{val.info}</div>
                        {val.code === "" ? <div className="priv">Private <i class="fas fa-lock"></i></div> : <a rel="noopener noreferrer" href={val.code} target="_blank">Code</a>}
                    </div>
                </div>
                ))}

            </div>
        </div>
    )
}
export default Projects