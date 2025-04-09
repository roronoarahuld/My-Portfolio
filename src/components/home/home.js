import React, { createContext, useEffect, useState } from 'react';
import FloatingDiv from '../../commonComponents/FloatingDiv';
import { useGlobalContext } from '../../AppContext';
import { useApiData } from '../../services/Api';

export const aboutContext = createContext()
const Home = () => {
    const { setActiveComponent } = useGlobalContext();
    const {storeData} = useApiData()
    const [heading, setHeading] = useState("")
    const [headingArray, setHeadingArray] = useState([])
    const handleClick = () => {
        setActiveComponent("About")
    };
    useEffect(()=>{
        setHeading(storeData[0]?.homePage[0]?.title)
        if(heading !== undefined){
            setHeadingArray(heading?.split(" "))
        }
    },[storeData, heading])
    return (
        <>
            <section id="sectionHome">
                <div className="container">
                    <div className="row">
                        <div className="col-6 content-section">
                            <div className="content-area">
                                <h1>
                                    <span>{headingArray[0]}</span> {headingArray[1] + " " + headingArray[2]} <span>{headingArray[3]}</span><br /> {headingArray[4]} <span>{headingArray[5] + " " + headingArray[6]}</span> {headingArray[7] + " " + headingArray[8]} <span>{headingArray[9]}</span>
                                </h1>
                                <p>{storeData[0]?.homePage[0]?.subtitle}</p>
                                <ul>
                                    <li>
                                        <button data-bs-toggle="offcanvas" data-bs-target="#contactSection" aria-controls="contactSection" className='button-blue'>{storeData[0]?.homePage[0]?.buttonText}</button>
                                    </li>
                                    <li>
                                        <a href="https://github.com/roronoarahuld" target='_blank'>
                                            {/* <img src={require("../../images/github.svg").default}/> */}

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/rahul-dolui-303418109" target='_blank'>
                                            <img src={require("../../images/linkedin.svg").default}/>
                                        </a>
                                    </li>
                                </ul>
                                <span className='jobtitle'>{storeData[0]?.homePage[0]?.designation}</span>
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
                        title={storeData[0]?.homePage[0]?.nextPageDetails[0]?.title}
                        subtitle={storeData[0]?.homePage[0]?.nextPageDetails[0]?.subtitle}
                        image={storeData[0]?.homePage[0]?.nextPageDetails[0]?.image}
                        tags={storeData[0]?.homePage[0]?.nextPageDetails[0]?.tags}
                    />
                </div>
            </section>
        </>
    )
}
export default Home;


