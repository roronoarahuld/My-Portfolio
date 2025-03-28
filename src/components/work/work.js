import React, { useState } from "react";

export default function Work() {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <>
            <section id="sectionWork">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={isExpanded === true ? "content-section remove-zIndex" : "content-section"}>
                                <h1>Transforming Ideas into Impactful Designs</h1>
                                {/* Slider */}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel">
                    <div className="slides">
                        <div id="slide-1" className={isExpanded === true ? "box expanded" : "box"} onClick={() => setIsExpanded(true)}>
                            {
                                isExpanded === true ? (
                                    <div className="slideContent">
                                        <div className="row">
                                            <div className="col-12">
                                                <h3>Antim Yatra</h3>
                                                <p>Project handled during my time at Digitallatte</p>
                                                <img src={require("../../images/antim_yatra.png")} alt="Antim Yatra Image" className="img-fluid" />
                                            </div>
                                            <div className="col-md-6">
                                                <span>About Digitallatte</span>
                                                <p>

                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>
                                                    Antim Yatra is a compassionate funeral services website that I had the opportunity to work on during my time at Digitallatte. The website was designed to provide a seamless and dignified experience for individuals seeking end-to-end funeral arrangements. Built using the Bootstrap framework, the site featured a clean, responsive, and user-friendly interface, ensuring accessibility across devices. My role involved handling various aspects of the project, including front-end development, ensuring smooth navigation, and implementing design elements that conveyed empathy and professionalism. Through this project, I gained valuable experience in building service-oriented websites with a focus on both functionality and sensitivity.
                                                </p>
                                                <div className="tags_next_page">
                                                    <ul>
                                                        <li>UI development</li>
                                                        <li>HTML</li>
                                                        <li>CSS</li>
                                                        <li>Bootstrap</li>
                                                        <li>UI/UX development</li>
                                                    </ul>
                                                </div>
                                                <span>Technologies Used</span>
                                                <div className="tech_img">
                                                    <img src={require("../../images/html-5.png")} alt="skill-img" />
                                                    <img src={require("../../images/css-3.png")} alt="skill-img" />
                                                    <img src={require("../../images/js.png")} alt="skill-img" />
                                                    <img src={require("../../images/bootstrap.png")} alt="skill-img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )
                            }

                        </div>
                        <div id="slide-2" className="box">2</div>
                        <div id="slide-3" className="box">3</div>
                        <div id="slide-4" className="box">4</div>
                        <div id="slide-5" className="box">5</div>
                        <div id="slide-6" className="box">6</div>
                    </div>
                </div>
            </section>
        </>
    )
}