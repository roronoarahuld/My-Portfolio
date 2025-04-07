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


