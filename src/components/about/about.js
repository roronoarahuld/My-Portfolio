import { useContext, useEffect, useState } from "react"
import FloatingDiv from "../../commonComponents/FloatingDiv";
import { aboutContext } from "../home/home";
import Header from "../../header/header";


const About = () => {
    const [showDiv, setShowDiv] = useState(0);
    const divNext = () => {
        var addDiv = showDiv;
        setShowDiv(++addDiv);
    }
    const divPrev = () => {
        var minusDiv = showDiv;
        setShowDiv(--minusDiv);
    }
    useEffect(() => {
    }, [showDiv])
    return (
        <>
            <section id="sectionAbout">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-6 image-section">
                            <div className="image-area"></div>
                        </div>
                        <div className="col-6 content-section">

                            <div className="content-area">
                                {
                                    showDiv === 0 ? (
                                        <div className="textAnimate">
                                            <h1>
                                                Building Cool Things for the <span>Web</span> and <span>App</span>
                                            </h1>
                                            <p>
                                                I am a dedicated front-end developer specializing in creating intuitive and user-friendly digital experiences. I do have strong foundation in UI/UX design principles and significant hands-on experience in developing cross-platform mobile applications for both Android and iOS using React Native. I am currently a Team Lead for mobile app development, focusing on innovative in-house projects.
                                            </p>
                                        </div>
                                    ) : (
                                        <></>
                                    )
                                }
                                {
                                    showDiv === 1 ? (
                                        <div className="textAnimate">
                                            <h1>
                                                Key Highlights of my Career:
                                            </h1>
                                            <ul>
                                                <li>
                                                    Current Role:
                                                    <ol>
                                                        <li>
                                                            Serving as <span>Team Lead</span> at <span>Homeville Group Pvt. Ltd</span>.
                                                        </li>
                                                        <li>
                                                            Previously contributed as a <span>Senior Software Engineer</span>, focusing on Angular-based systems and UI/UX enhancements.
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    Previous Experiences:
                                                    <ol>
                                                        <li>
                                                            <span>UI Developer</span> at <span>Anandpushp Technologies Pvt. Ltd.</span>
                                                            <ol>
                                                                <li>
                                                                    Product based startup on EdTech platforms. Developing the entire  project with responsive
                                                                </li>
                                                            </ol>
                                                        </li>
                                                        <li>
                                                            <span>Front-End Developer</span> at <span>McCann (CRAFT)</span>
                                                            <ol>
                                                                <li>
                                                                    Developing responsive Landing pages, Microsite and creating  device compatibility user interface. Worked with clients like Staples, Garnier,  L'Oréal, Essie
                                                                </li>
                                                            </ol>
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <></>
                                    )
                                }
                                {
                                    showDiv === 2 ? (
                                        <div className="textAnimate">
                                            <ul>
                                                <li>
                                                    <ol>
                                                        <li>
                                                            <span>Web/UI Developer</span> at <span>IIT Bombay</span>
                                                            <ol>
                                                                <li>
                                                                    Working as <span>UI/ Web Developer</span>. Being the only <span>Front - End Developer</span> I was responsible for the whole project. Worked on project like Next Education Research Lab
                                                                </li>
                                                            </ol>
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    <ol>
                                                        <li>
                                                            <span>Web Developer</span> at <span>Digital Latte</span> and <span>Suggesssto Pvt. Ltd</span>
                                                            <ol>
                                                                <li>
                                                                    Developed websites from PSD designs and contributed to major projects, including e-commerce platforms.
                                                                </li>
                                                            </ol>
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    Internship
                                                    <ol>
                                                        <li>
                                                            Worked as a <span>Web Developer Intern</span> in the <span>Educational Technology Department at IIT Bombay</span>, developing responsive web pages and learning new technologies.
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <></>
                                    )
                                }
                                {
                                    showDiv === 3 ? (
                                        <div className="textAnimate">
                                            <h1>Skills</h1>
                                            <ul className="skills-ul">
                                                <li>
                                                    Design Tools:
                                                    <div>
                                                        <img src={require("../../images/figma.png")} alt="skill-img"/>
                                                        <img src={require("../../images/photoshop.png")} alt="skill-img"/>
                                                        <img src={require("../../images/illustrator.png")} alt="skill-img"/>
                                                    </div>
                                                </li>
                                                <li>
                                                    Front End Development:
                                                    <div>
                                                        <img src={require("../../images/html-5.png")} alt="skill-img"/>
                                                        <img src={require("../../images/css-3.png")} alt="skill-img"/>
                                                        <img src={require("../../images/js.png")} alt="skill-img"/>
                                                        <img src={require("../../images/bootstrap.png")} alt="skill-img"/>
                                                        <img src={require("../../images/material-ui.png")} alt="skill-img"/>
                                                        <img src={require("../../images/tailwind.png")} alt="skill-img"/>
                                                    </div>
                                                </li>
                                                <li>
                                                    Frameworks & Libraries:
                                                    <div>
                                                        <img src={require("../../images/physics.png")} alt="skill-img"/>
                                                        <img src={require("../../images/react.png")} alt="skill-img"/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <></>
                                    )
                                }
                                {
                                    showDiv === 3 ? (
                                        <></>
                                    ) : (
                                        <button className="noBg-button" onClick={() => { divNext() }}>
                                            {
                                                showDiv === 0 ? (
                                                    <>
                                                        Key highlights of my Career <img src={require("../../images/right-chevron.png")} alt="arrow-img"/>
                                                    </>
                                                ) : (
                                                    <img src={require("../../images/right-chevron.png")} alt="arrow-img"/>
                                                )
                                            }

                                        </button>
                                    )
                                }
                                {
                                    showDiv === 0 ? (
                                        <></>
                                    ) : (
                                        <button className="noBg-button" onClick={() => { divPrev() }}>
                                            <img src={require("../../images/left-chevron.png")} alt="arrow-img"/>
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={showDiv === 3 ? "floating-next-div" : ""}>
                    <FloatingDiv
                        // onPress={handleClick} 
                        title="Work" 
                        subtitle="Crafting seamless digital experiences through years of creative"
                        tags={["Website","UI / UX","Website Department","Android","IOS","Website Design"]} 
                    />
                </div>
            </section>
        </>
    )
}
export default About