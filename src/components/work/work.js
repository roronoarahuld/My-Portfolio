import React, { useState } from "react";

export default function Work() {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <>
            <section id="sectionWork">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-section">
                                <h1>Transforming Ideas into Impactful Designs</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel">
                    <div className="slides">
                        <button id="slide-1" className="box" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"></button>
                        <div id="slide-2" className="box">2</div>
                        <div id="slide-3" className="box">3</div>
                        <div id="slide-4" className="box">4</div>
                        <div id="slide-5" className="box">5</div>
                        <div id="slide-6" className="box">6</div>
                    </div>
                </div>
            </section>
            {/* Open section */}
            <div className="offcanvas offcanvas-bottom " tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-body small">
                    <div className="slideContent">
                        <div className="breadcrumb">
                            <button className="mb-4 d-flex align-items-center" data-bs-dismiss="offcanvas" aria-label="Close">
                                <img src={require("../../images/arrow-left.svg").default} />
                                <span>Back to work</span>
                            </button>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-4">
                                <h3>Antim Yatra</h3>
                                <p>Project handled during my time at Digitallatte</p>
                            </div>
                            <div className="col-md-8">
                                <p>Antim Yatra is a funeral services website I worked on at Digitallatte. Built with Bootstrap, it offers a seamless experience for end-to-end funeral arrangements. My role involved front-end development, ensuring smooth navigation, and implementing a responsive, user-friendly design that balanced functionality with sensitivity.</p>
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
                        <div className="row">
                            <div className="col-12 blue_bg mb-5">
                                <img src={require("../../images/antim_yatra.png")} alt="Antim Yatra Website" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}