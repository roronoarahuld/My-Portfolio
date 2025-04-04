import React, { useEffect, useState } from "react";
import { SliderOffCanvas } from "../../commonComponents/Offcanvas";
import { useApiData } from "../../services/Api";

export default function Work() {
    const { storeData, loading } = useApiData()
    const [offcanvasValue, setOffcanvasvalue] = useState("")
    const [title, setTitle] = useState("")
    const [projectHandled, setProjectHandled] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [webUrl , setWebUrl] = useState("")
    const [projectImage, setProjectImage] = useState([])
    const [techUsed, setTechUsed] = useState([])
    const slidesData = storeData[0]?.workPage[0]?.slides
    useEffect(() => {
        console.log("Value", offcanvasValue)
        switch(offcanvasValue){
            case("antimYatra"):
                setTitle(storeData[0]?.workPage[0]?.slides[0]?.title)
                setProjectHandled(storeData[0]?.workPage[0]?.slides[0]?.projectHandled)
                setSubtitle(storeData[0]?.workPage[0]?.slides[0]?.subtitle)
                setWebUrl(storeData[0]?.workPage[0]?.slides[0]?.webUrl)
                setTechUsed(storeData[0]?.workPage[0]?.slides[0]?.techUsed)
                setProjectImage(storeData[0]?.workPage[0]?.slides[0]?.workImages)
                break;
            case("puneriPaltan"):
                setTitle(storeData[0]?.workPage[0]?.slides[1]?.title)
                setProjectHandled(storeData[0]?.workPage[0]?.slides[1]?.projectHandled)
                setSubtitle(storeData[0]?.workPage[0]?.slides[1]?.subtitle)
                setWebUrl(storeData[0]?.workPage[0]?.slides[1]?.webUrl)
                setTechUsed(storeData[0]?.workPage[0]?.slides[1]?.techUsed)
                setProjectImage(storeData[0]?.workPage[0]?.slides[1]?.workImages)
                break;
            case(""):
                console.log("something wrong")
        }
    }, [offcanvasValue])
    return (
        <>
            <section id="sectionWork">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-section">
                                <h1>{storeData[0]?.workPage[0]?.title}</h1>
                                <p>{storeData[0]?.workPage[0]?.subTitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel">
                    <div className="slides">
                        {
                            slidesData.map((str) => {
                                return (
                                    <button key={str.id} id={"slide" + "-" + str.id} className="box" type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvas" aria-controls="offCanvas" onClick={() => setOffcanvasvalue(str.value)}>
                                        <h6>{str.title}</h6>
                                        <div className="tags_next_page">
                                            <ul>
                                                {
                                                    str.workTag.map((e) => {
                                                        return (
                                                            <li key={e.value} className="white">{e.value}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            
            {/* OffCanvas section */}
            <SliderOffCanvas 
                Attribute={offcanvasValue} 
                title={title} 
                projectHandled={projectHandled}
                subtitle={subtitle}
                webUrl={webUrl}
                techUsed={techUsed}
                projectImage={projectImage}
            />


            {/* 
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
                        <div className="col-12  mb-5">
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
                            <div className="col-12  mb-5">
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
                            <div className="col-12  mb-5">
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
                            <div className="col-12  mb-5">
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
                            <div className="col-12  mb-5">
                                <img src={require("../../images/bhn_1.png")} alt="Bharat Housing Network" className="img-fluid" />
                            </div>
                        </div>
                        <div className="row mt-5 pb-5">
                            <div className="col-md-4">
                                <p>While I had a strong foundation in HTML and CSS, this project pushed me to become even more efficient in front-end development. Additionally, I took the initiative to learn Angular, which allowed me to contribute to Angular-related tasks and improve my problem-solving approach. My key contributions included setting up the theme, designing reusable components, and ensuring a consistent and scalable UI framework for future developments.</p>
                            </div>
                            <div className="col-md-8 ">
                                <img src={require("../../images/bhn_2.png")} alt="Bharat Housing Network" className="img-fluid" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-7 ">
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

            <div className="offcanvas offcanvas-bottom " tabIndex="-1" id="sngApp" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-body small">
                    <div className="slideContent">
                        <div className="breadcrumb">
                            <button className="mb-4 d-flex align-items-center" data-bs-dismiss="offcanvas" aria-label="Close">
                                <img src={require("../../images/arrow-left.svg").default} />
                                <span>Back to work</span>
                            </button>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <h3><a target="_blank" href="https://play.google.com/store/apps/details?id=com.singularitycredit.app">Singularity App</a></h3>
                                <p>Project handled during my time at HomeCapital PVT</p>
                            </div>
                            <div className="col-md-6">
                                <p>Singularity App was a major turning point in my career, marking my transition from a Web Developer to an App Developer. This project pushed me beyond my comfort zone as I took on the responsibility of building the entire UI and frontend while simultaneously learning React Native. It was a hands-on experience where I had to quickly grasp mobile development concepts, optimize performance, and ensure a seamless user experience.</p>
                                <span>Technologies Used</span>
                                <div className="tech_img">
                                    <img src={require("../../images/react.png")} alt="skill-img" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex flex-wrap mb-5 justify-content-center">
                                <img src={require("../../images/sngApp_1.jpg")} alt="Singularity App" />
                                <img src={require("../../images/sngApp_2.jpg")} alt="Singularity App" />
                                <img src={require("../../images/sngApp_3.jpg")} alt="Singularity App" />
                                <img src={require("../../images/sngApp_4.jpg")} alt="Singularity App" />
                                <img src={require("../../images/sngApp_5.jpg")} alt="Singularity App" />
                            </div>
                        </div>
                        <div className="row mt-5 pb-5">
                            <div className="col-md-6">
                                <p>Initially, our team consisted of three members (including myself), but as the project evolved and my skills grew, I was promoted to Team Leader, leading a team of six. With this expanded team, we not only enhanced and optimized the Singularity App but also started working on multiple other app development projects. The transition from being an individual contributor to a team leader was both challenging and rewarding, as I learned to mentor developers, manage workflows, and oversee project execution efficiently.</p>
                                <p>This experience refined my ability to design scalable UI components, improve application performance, and collaborate across teams. More importantly, it solidified my expertise in React Native, making me confident in handling mobile app development from the ground up. Singularity App was more than just a project—it was the stepping stone that helped me grow into a full-fledged app developer and leader.</p>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center flex-wrap">
                                <img src={require("../../images/sngApp_6.jpg")} alt="Singularity App" />
                                <img src={require("../../images/sngApp_7.jpg")} alt="Singularity App" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-bottom " tabIndex="-1" id="bhnApp" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-body small">
                    <div className="slideContent">
                        <div className="breadcrumb">
                            <button className="mb-4 d-flex align-items-center" data-bs-dismiss="offcanvas" aria-label="Close">
                                <img src={require("../../images/arrow-left.svg").default} />
                                <span>Back to work</span>
                            </button>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <h3><a target="_blank" href="https://play.google.com/store/apps/details?id=com.homeville.fieldforce">BHN FieldForce</a></h3>
                                <p>Project handled during my time at HomeCapital PVT</p>
                            </div>
                            <div className="col-md-6">
                                <p>BHN Fieldforce App was the second major app development project my team and I worked on after successfully delivering the Singularity App. With a growing sense of responsibility and leadership, I took charge of the UI and frontend development while ensuring a seamless user experience. Unlike our previous project, we faced a shortage of designers, which pushed me to step up and design a minimal prototype myself. This was a new challenge, but it gave me deeper insight into UI/UX design principles and helped streamline development.</p>
                                <span>Technologies Used</span>
                                <div className="tech_img">
                                    <img src={require("../../images/react.png")} alt="skill-img" />
                                    <img src={require("../../images/figma.png")} alt="skill-img" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex flex-wrap mb-5 justify-content-center">
                                <img src={require("../../images/bhnApp_1.jpg")} alt="BHN FieldForce" />
                                <img src={require("../../images/bhnApp_2.jpg")} alt="BHN FieldForce" />
                                <img src={require("../../images/bhnApp_3.jpg")} alt="BHN FieldForce" />
                                <img src={require("../../images/bhnApp_4.jpg")} alt="BHN FieldForce" />
                            </div>
                        </div>
                        <div className="row mt-5 pb-5">
                            <div className="col-md-6">
                                <p>With my team working alongside me, we efficiently translated the prototype into a fully functional mobile application using React Native. We focused on creating reusable components, optimizing performance, and ensuring smooth navigation to deliver a polished and intuitive experience. The project further strengthened my leadership skills as I guided my team through problem-solving, debugging, and improving overall efficiency.</p>
                                <p>This experience reinforced my ability to adapt to challenges, think creatively under constraints, and execute projects effectively even with limited resources. It also deepened my expertise in mobile app development and taught me the importance of balancing design, development, and team management to deliver high-quality applications.</p>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center flex-wrap">
                                <img src={require("../../images/bhnApp_5.jpg")} alt="BHN FieldForce" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}