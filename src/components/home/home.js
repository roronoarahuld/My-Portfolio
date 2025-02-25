import React, { createContext, useEffect, useState } from 'react';
import About from '../about/about';
import FloatingDiv from '../../commonComponents/FloatingDiv';
import Header from '../../header/header';

export const aboutContext = createContext()
const Home = () => {
    const [showAboutComponent, setShowAboutComponent] = useState(false);
    const handleClick = () => {
        setShowAboutComponent(true); // Update state to show the component 
    };
    useEffect(() =>{
    },[showAboutComponent])
    return (
        <>
            <section id="sectionHome">
                <div className="container">
                    <div className="row">
                        <div className="col-6 content-section">
                            <div className="content-area">
                                <h1>
                                    <span>HEY!</span> I am <span>Rahul</span>,<br /> A <span>Front-End Developer</span> based in <span>Mumbai</span>
                                </h1>
                                <p>Team Lead for mobile app development, driving in-house projects. Focusing on UI/UX design.</p>
                                <ul>
                                    <li>
                                        <button className='button-blue'>Contact Me</button>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">

                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">

                                        </a>
                                    </li>
                                </ul>
                                <span className='jobtitle'>Front-End Developer - Team Lead</span>
                            </div>
                        </div>
                        <div className="col-6 image-section">
                            <div className="image-area"></div>
                        </div>
                    </div>
                </div>
                <div className='floating-next-div'>
                    <FloatingDiv 
                        onPress={handleClick} 
                        title="About Me" 
                        subtitle="I am dedicated front-end developer specializing in Front-End developer"
                        image="about"
                        tags={["Work Experience","UI / UX","UI Developer","Front End Developer","React Native","CSS"]}
                    />
                </div>
            </section>
            <aboutContext.Provider value={[showAboutComponent, setShowAboutComponent]}>
                <About/>
            </aboutContext.Provider>
        </>
    )
}
export default Home;


