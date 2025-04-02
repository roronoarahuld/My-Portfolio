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
                                <p>Transforming ideas into visually striking and user-centric designs that blend creativity with purpose. With a keen eye for detail and a focus on functionality, I craft experiences that not only look great but also leave a lasting impact.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel">
                    <div className="slides">
                        <button id="slide-1" className="box" type="button" data-bs-toggle="offcanvas" data-bs-target="#antimYatra" aria-controls="antimYatra">
                            <h6>Antim yatra</h6>
                            <div className="tags_next_page">
                                <ul>
                                    <li className="white">HTML</li>
                                    <li className="white">CSS</li>
                                    <li className="white">Bootstrap</li>
                                    <li className="white">Javascript</li>
                                </ul>
                            </div>
                        </button>
                        <button id="slide-2" className="box" type="button" data-bs-toggle="offcanvas" data-bs-target="#puneriPaltan" aria-controls="puneriPaltan">
                            <h6>Puneri Paltan</h6>
                            <div className="tags_next_page">
                                <ul>
                                    <li className="white">HTML</li>
                                    <li className="white">CSS</li>
                                    <li className="white">Javascript</li>
                                </ul>
                            </div>
                        </button>
                        <button id="slide-3" className="box" type="button" data-bs-toggle="offcanvas" data-bs-target="#staplesTruRed" aria-controls="staplesTruRed">
                            <h6>Staples Tru Red</h6>
                            <div className="tags_next_page">
                                <ul>
                                    <li className="white">HTML</li>
                                    <li className="white">CSS</li>
                                    <li className="white">Javascript</li>
                                    <li className="white">Bootstrap</li>
                                </ul>
                            </div>
                        </button>
                        <button id="slide-4" className="box" type="button" data-bs-toggle="offcanvas" data-bs-target="#jobsInEducation" aria-controls="jobsInEducation">
                            <h6>Jobs in Education</h6>
                            <div className="tags_next_page">
                                <ul>
                                    <li className="white">HTML</li>
                                    <li className="white">CSS</li>
                                    <li className="white">Material UI</li>
                                    <li className="white">React</li>
                                </ul>
                            </div>
                        </button>
                        <button id="slide-4" className="box" type="button" data-bs-toggle="offcanvas" data-bs-target="#bhn" aria-controls="bhn">
                            <h6>Bharat Housing Network</h6>
                            <div className="tags_next_page">
                                <ul>
                                    <li className="white">HTML</li>
                                    <li className="white">CSS</li>
                                    <li className="white">Angular</li>
                                </ul>
                            </div>
                        </button>
                        <button id="slide-4" className="box" type="button" data-bs-toggle="offcanvas" data-bs-target="#sng" aria-controls="sng">
                            <h6>Singualrity CreditWorld</h6>
                            <div className="tags_next_page">
                                <ul>
                                    <li className="white">HTML</li>
                                    <li className="white">CSS</li>
                                    <li className="white">Angular</li>
                                    <li className="white">Bootstrap</li>
                                </ul>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
            {/* Open section */}
            <div className="offcanvas offcanvas-bottom " tabIndex="-1" id="antimYatra" aria-labelledby="offcanvasBottomLabel">
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


            <div className="offcanvas offcanvas-bottom " tabIndex="-1" id="puneriPaltan" aria-labelledby="offcanvasBottomLabel">
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
                                <h3>Puneri Paltan</h3>
                                <p>Project handled during my time at Digitallatte</p>
                            </div>
                            <div className="col-md-8">
                                <p>Puneri Paltan is the official website of the Pro Kabaddi League team, designed to keep fans updated with the latest news, match schedules, player stats, and more. I had the opportunity to work on this project during my time at Digitallatte, where I was primarily responsible for updating content in real time during their matches. This involved managing live scores, team updates, match highlights, and other dynamic content to ensure an engaging experience for visitors. The website, built with a user-friendly interface, provided a seamless way for fans to stay connected with the team. Working on this project gave me hands-on experience in handling high-traffic sports websites, managing real-time content updates, and ensuring smooth performance during peak hours.</p>
                                <span>Technologies Used</span>
                                <div className="tech_img">
                                    <img src={require("../../images/html-5.png")} alt="skill-img" />
                                    <img src={require("../../images/css-3.png")} alt="skill-img" />
                                    <img src={require("../../images/js.png")} alt="skill-img" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 blue_bg mb-5">
                                <img src={require("../../images/puneri_paltan_1.png")} alt="Puneri Paltan" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-bottom " tabIndex="-1" id="staplesTruRed" aria-labelledby="offcanvasBottomLabel">
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
                                <h3>Staples Tru Red</h3>
                                <p>Project handled during my time at Mccann World Wide Group</p>
                            </div>
                            <div className="col-md-8">
                                <p>During my time at McCann, I worked on Staples Tru Red, where we developed landing pages and banners for their marketing campaigns. My role involved ensuring visually appealing, responsive designs that aligned with the brand’s identity. This project helped me enhance my skills in front-end development and web asset optimization.</p>
                                <span>Technologies Used</span>
                                <div className="tech_img">
                                    <img src={require("../../images/html-5.png")} alt="skill-img" />
                                    <img src={require("../../images/css-3.png")} alt="skill-img" />
                                    <img src={require("../../images/js.png")} alt="skill-img" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 blue_bg mb-5">
                                <img src={require("../../images/staples_tru_red.png")} alt="Staples Tru Red" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-bottom " tabIndex="-1" id="jobsInEducation" aria-labelledby="offcanvasBottomLabel">
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
                                <h3>Jobs in Education</h3>
                                <p>Project handled during my time at AnandPushp Technology</p>
                            </div>
                            <div className="col-md-8">
                                <p>At Jobs in Education, a startup where I worked as a UI Developer, I handled three projects, focusing on front-end development. I utilized my primary skills—HTML, CSS, JavaScript, and Bootstrap—to build responsive and user-friendly interfaces. Additionally, I had the opportunity to learn and work with React, expanding my expertise in modern web development. This experience helped me enhance my technical skills while contributing to the growth of the platform.</p>
                                <span>Technologies Used</span>
                                <div className="tech_img">
                                    <img src={require("../../images/html-5.png")} alt="skill-img" />
                                    <img src={require("../../images/css-3.png")} alt="skill-img" />
                                    <img src={require("../../images/js.png")} alt="skill-img" />
                                    <img src={require("../../images/react.png")} alt="skill-img" />
                                    <img src={require("../../images/material-ui.png")} alt="skill-img" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 blue_bg mb-5">
                                <img src={require("../../images/JIB.png")} alt="Jobs in Education" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-bottom " tabIndex="-1" id="bhn" aria-labelledby="offcanvasBottomLabel">
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
                                <h3>Bharat Housing Network</h3>
                                <p>Project handled during my time at HomeCapital PVT LTD</p>
                            </div>
                            <div className="col-md-8">
                                <p>Bharat Housing Network was a transformative project in my career, immersing me in an extremely fast-paced environment where delivering results was the top priority. As a Senior Software Engineer, I was responsible for revamping the entire portal, refining its design, and optimizing its structure for better scalability and performance.</p>
                                <span>Technologies Used</span>
                                <div className="tech_img">
                                    <img src={require("../../images/html-5.png")} alt="skill-img" />
                                    <img src={require("../../images/css-3.png")} alt="skill-img" />
                                    <img src={require("../../images/js.png")} alt="skill-img" />
                                    <img src={require("../../images/angular.png")} alt="skill-img" className="angular" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 blue_bg mb-5">
                                <img src={require("../../images/bhn_1.png")} alt="Bharat Housing Network" className="img-fluid" />
                            </div>
                        </div>
                        <div className="row mt-5 pb-5">
                            <div className="col-md-4">
                                <p>While I had a strong foundation in HTML and CSS, this project pushed me to become even more efficient in front-end development. Additionally, I took the initiative to learn Angular, which allowed me to contribute to Angular-related tasks and improve my problem-solving approach. My key contributions included setting up the theme, designing reusable components, and ensuring a consistent and scalable UI framework for future developments.</p>
                            </div>
                            <div className="col-md-8 blue_bg">
                                <img src={require("../../images/bhn_2.png")} alt="Bharat Housing Network" className="img-fluid" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-7 blue_bg">
                                <img src={require("../../images/bhn_3.png")} alt="Bharat Housing Network" className="img-fluid" />
                            </div>
                            <div className="col-md-5">
                                <p>This experience significantly enhanced my ability to adapt quickly to new technologies while working under high-pressure deadlines. It reinforced the importance of writing modular and maintainable code, improving UI/UX, and collaborating effectively within a fast-moving team. The project not only expanded my technical skill set but also sharpened my ability to deliver high-quality solutions efficiently.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-bottom " tabIndex="-1" id="sng" aria-labelledby="offcanvasBottomLabel">
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
                                <h3>Singularity CreditWorld</h3>
                                <p>Project handled during my time at HomeCapital PVT LTD</p>
                            </div>
                            <div className="col-md-8">
                                <p>During my tenure at BHN, I had the opportunity to work on several projects, including developing the Singularity Creditworld website from scratch and enhancing its customer portal. Singularity Creditworld is an RBI-approved Non-Banking Financial Company (NBFC) offering a range of retail credit products and solutions in impact sectors. Their offerings include housing loans, property loans, solar loans, and personal loans, accessible through their mobile app.</p>
                                <span>Technologies Used</span>
                                <div className="tech_img">
                                    <img src={require("../../images/html-5.png")} alt="skill-img" />
                                    <img src={require("../../images/css-3.png")} alt="skill-img" />
                                    <img src={require("../../images/js.png")} alt="skill-img" />
                                    <img src={require("../../images/angular.png")} alt="skill-img" className="angular" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 blue_bg mb-5">
                                <img src={require("../../images/singularity.png")} alt="Singualrity Landing Page" className="img-fluid" />
                            </div>
                        </div>
                        <div className="row mt-5 pb-5">
                            <div className="col-md-4">
                                <p>The customer portal I worked on enables users to apply for loans, track their application status, and complete the necessary procedures seamlessly. This project provided me with valuable experience in building and improving financial service platforms that prioritize user experience and accessibility..</p>
                            </div>
                            <div className="col-md-8 blue_bg">
                                <img src={require("../../images/singualrity_portal.png")} alt="Singularity Customer Portal" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}