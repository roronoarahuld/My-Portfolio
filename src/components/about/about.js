import { useEffect, useState } from "react"
import FloatingDiv from "../../commonComponents/FloatingDiv";
import SlideAnimation from "../../commonComponents/SlideAnimation"
import { useGlobalContext } from '../../AppContext';
import { useApiData } from "../../services/Api";


const About = () => {
    const { setActiveComponent } = useGlobalContext();
    const [showDiv, setShowDiv] = useState(0);
    const {storeData} = useApiData()
    const [title, setTitle] = useState("")
    const [titleArray, setTitleArray] = useState([])
    const [rolesPageOne, setRolesPageOne] = useState([])
    const [rolePageTwo, setRolesPageTwo] = useState([])
    const divNext = () => {
        var addDiv = showDiv;
        setShowDiv(++addDiv);
    }
    const divPrev = () => {
        var minusDiv = showDiv;
        setShowDiv(--minusDiv);
    }
    const handleClick = () => {
        setActiveComponent("Work")
    };
    useEffect(() => {
        setTitle(storeData[0]?.aboutPage[0]?.title)
        setRolesPageOne(storeData[0]?.aboutPage[1]?.roleHighlights)
        if(title !== undefined){
            setTitleArray(title.split(" "))
        }
        const result = rolesPageOne.pop()
        console.log("roles",result)
        console.log("removed", rolesPageOne)
    }, [storeData, title, showDiv, rolesPageOne])
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
                                                {titleArray[0] + " " + titleArray[1] + " " + titleArray[2] + " " + titleArray[3] + " " + titleArray[4]} <span>{titleArray[5]}</span> {titleArray[6]} <span>{titleArray[7]}</span>
                                            </h1>
                                            <p>
                                                {storeData[0]?.aboutPage[0]?.subtitle}
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
                                            {storeData[0]?.aboutPage[1]?.title}:
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
                                                        <img src={require("../../images/figma.png")} alt="skill-img" />
                                                        <img src={require("../../images/photoshop.png")} alt="skill-img" />
                                                        <img src={require("../../images/illustrator.png")} alt="skill-img" />
                                                    </div>
                                                </li>
                                                <li>
                                                    Front End Development:
                                                    <div>
                                                        <img src={require("../../images/html-5.png")} alt="skill-img" />
                                                        <img src={require("../../images/css-3.png")} alt="skill-img" />
                                                        <img src={require("../../images/js.png")} alt="skill-img" />
                                                        <img src={require("../../images/bootstrap.png")} alt="skill-img" />
                                                        <img src={require("../../images/material-ui.png")} alt="skill-img" />
                                                        <img src={require("../../images/tailwind.png")} alt="skill-img" />
                                                    </div>
                                                </li>
                                                <li>
                                                    Frameworks & Libraries:
                                                    <div>
                                                        <img src={require("../../images/physics.png")} alt="skill-img" />
                                                        <img src={require("../../images/react.png")} alt="skill-img" />
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
                                                        {storeData[0]?.aboutPage[1]?.title} <img src={require("../../images/right-chevron.png")} alt="arrow-img" />
                                                    </>
                                                ) : (
                                                    <img src={require("../../images/right-chevron.png")} alt="arrow-img" />
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
                                            <img src={require("../../images/left-chevron.png")} alt="arrow-img" />
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={showDiv === 3 ? "floating-next-div" : ""}>
                    <FloatingDiv
                        onPress={handleClick} 
                        title={storeData[0]?.aboutPage[3]?.nextPageDetails[0]?.title}
                        subtitle={storeData[0]?.aboutPage[3]?.nextPageDetails[0]?.subtitle}
                        image={storeData[0]?.aboutPage[3]?.nextPageDetails[0]?.image}
                        tags={storeData[0]?.aboutPage[3]?.nextPageDetails[0]?.tags}
                    />
                </div>
            </section>
        </>
    )
}
export default About