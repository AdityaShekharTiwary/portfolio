import React from 'react'
import './project.css'

import CafeBristo from './../../assests/cafebristo.png'
import WeatherApp from './../../assests/weatherapp.png'
import NameIt from './../../assests/nameit.png'
import FlashType from './../../assests/flashtype.png'

import Project from './../../assests/projects_image.svg'

const project = () => {
    return(
        <div id="project" className="project-container">
            <div data-aos="fade-up" data-aos-duration="1500" className="project-heading">
                Projects
            </div>
            <div className="project-section">
                <div data-aos="fade-right" data-aos-duration="1200" >
                    <img className="project-img" src={Project} alt="Project"/>
                </div>
                <div data-aos="fade-left" data-aos-duration="1600" className="project-quote">
                    My projects makes use of variety of technology tools. 
                    My best experience is to create Full Stack projects and deploy 
                    them to web applications.
                </div>
            </div>
            <div className="all-projects">
                <div className="all-project-top">
                    <div data-aos="fade-right" data-aos-duration="1200" className="project-cafebristo">
                        <img className="cafebristo-img" src={CafeBristo} alt="CafeBristo"/>
                        <div className="cafebristo-description">
                            A Frontend Coffee shop Website built in HTMl CSS and Bootstrap
                            where a user can see the Menu ,Pricelist ,various recipes and can contact 
                            the cafe.
                        </div>
                        <div className="cafebristo-code-options">
                            <a href="https://github.com/AdityaShekharTiwary/AdityaShekharTiwary.github.io/tree/main/cafebristo" 
                                target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <div className="cb-src-code-btn">Source Code</div> 
                            </a> 
                            <a href="https://adityashekhartiwary.github.io/cafebristo/" 
                                target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <div className="cb-live-site-btn">Live Site</div> 
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1200" className="project-flashtype">
                        <img className="flashtype-img" src={FlashType} alt="Flashtype"/>
                        <div className="flashtype-description">
                            A React Application where a user can find thier typing speed
                            in words per minute. The Application fetches random paragraph 
                            from an API and the user can share the obtained score on mulitple social media platforms.
                        </div>  
                        <div className="flashtype-code-options">
                            <a href="https://github.com/AdityaShekharTiwary/flashtype" 
                                target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <div className="ft-src-code-btn">Source Code</div> 
                            </a>
                            <a href="https://adityashekhartiwary.github.io/flashtype/" 
                                target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <div className="ft-live-site-btn">Live Site</div> 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="all-project-bottom">
                    <div data-aos="fade-right" data-aos-duration="1200" className="project-nameit">
                        <img className="nameit-img" src={NameIt} alt="Nameit"/>
                        <div className="nameit-description">
                            A React Application where a user can find names for their
                            websites related to the provided keywords. The names are fetched 
                            from an API and it also tells the user whether the choosen 
                            Domain is available or not.
                        </div>
                        <div className="nameit-code-options">
                            <a href="https://github.com/AdityaShekharTiwary/nameit" 
                                target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <div className="ni-src-code-btn">Source Code</div> 
                            </a>
                            <a href="https://adityashekhartiwary.github.io/nameit/" 
                                target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <div className="ni-live-site-btn">Live Site</div> 
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1200" className="project-weatherapp">
                        <img className="weatherapp-img" src={WeatherApp} alt="weatherapp"/>
                        <div className="weatherapp-description">
                            A website where user can find the current day's whether 
                            along with the data of next seven days.The whether information is 
                            collected from an API.The API gives data based on the user's location.
                        </div>
                        <div className="weatherapp-code-options">
                            <a href="https://github.com/AdityaShekharTiwary/AdityaShekharTiwary.github.io/tree/main/WeatherApp" 
                               target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <div className="wa-src-code-btn">Source Code</div> 
                            </a>
                            <a href="https://adityashekhartiwary.github.io/WeatherApp/" 
                            target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <div className="wa-live-site-btn">Live Site</div> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default project;