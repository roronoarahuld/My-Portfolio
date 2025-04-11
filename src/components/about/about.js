import { useEffect, useState } from "react"
import FloatingDiv from "../../commonComponents/FloatingDiv";
import SlideAnimation from "../../commonComponents/SlideAnimation"
import { useGlobalContext } from '../../AppContext';
import { useApiData } from "../../services/Api";


const About = () => {
    const { setActiveComponent } = useGlobalContext();
    const [showDiv, setShowDiv] = useState(0);
    const { storeData } = useApiData()
    const [title, setTitle] = useState("")
    const [titleArray, setTitleArray] = useState([])
    const [rolesPageOne, setRolesPageOne] = useState([])
    const [rolePageTwo, setRolesPageTwo] = useState([])
    const [previousExpPageOne, setPreviousExpPageOne] = useState([])
    const [previousExpPageTwo, setPreviousExpPageTwo] = useState([])
    const [previousExpPageThree, setPreviousExpPageThree] = useState([])
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
        setPreviousExpPageOne(storeData[0]?.aboutPage[1]?.roleHighlights[1]?.descp)
        if (title !== undefined) {
            setTitleArray(title.split(" "))
        }
        setRolesPageTwo(rolesPageOne.slice(0, 2))
        setPreviousExpPageTwo(previousExpPageOne.slice(0, 2))
        setPreviousExpPageThree(previousExpPageOne.slice(-2))
    }, [storeData, title, showDiv, rolesPageOne])
    return (
        <>
            <section id="sectionAbout">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-6 image-section">
                            <div className="image-area"></div>
                        </div>
                        <div className="col-md-6 content-section">

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
                                                {
                                                    rolePageTwo?.map((role) => {
                                                        return (
                                                            <li key={role}>
                                                                {role?.title}
                                                                <ol>
                                                                    {
                                                                        role?.title === "Current Role" ? (
                                                                            <>
                                                                                <li className="color-black font-medium">
                                                                                    {rolesPageOne[0]?.descp[0]?.roleTitle}
                                                                                </li>
                                                                                <li>
                                                                                    {rolesPageOne[0]?.descp[0]?.roleDescp}
                                                                                </li>
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                {
                                                                                    previousExpPageTwo?.map((rolecont) => {
                                                                                        return (
                                                                                            <>
                                                                                                <li key={rolecont} className="color-black font-medium">
                                                                                                    {rolecont?.roleTitle}
                                                                                                </li>
                                                                                                <li>
                                                                                                    {rolecont?.roleDescp}
                                                                                                </li>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </>
                                                                        )
                                                                    }
                                                                </ol>
                                                            </li>
                                                        )
                                                    })
                                                }
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
                                                        {
                                                            previousExpPageThree?.map((rolecont) => {
                                                                return (
                                                                    <>
                                                                        <li key={rolecont} className="color-black font-medium">
                                                                            {rolecont?.roleTitle}
                                                                        </li>
                                                                        <li>
                                                                            {rolecont?.roleDescp}
                                                                        </li>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </ol>
                                                </li>
                                                <li>
                                                    {storeData[0]?.aboutPage[1]?.roleHighlights[2]?.title}
                                                    <ol>
                                                        <li>
                                                            {storeData[0]?.aboutPage[1]?.roleHighlights[2]?.descp}
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
                                            <h1>{storeData[0]?.aboutPage[2]?.title}</h1>
                                            <ul className="skills-ul">
                                                {
                                                    storeData[0]?.aboutPage[2]?.skillset?.map((skills)=>{
                                                        return(
                                                            <li key={skills}>
                                                                {skills?.skillName}
                                                                <div>
                                                                    {
                                                                        skills?.skillImages?.map((icons)=>{
                                                                            return(
                                                                                <img key={icons} src={icons?.image} />
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
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
                <div className={showDiv === 3 ? "floating-next-div" : "d-none"}>
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