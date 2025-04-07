import React, { createContext, useEffect, useState } from 'react';
import FloatingDiv from '../../commonComponents/FloatingDiv';
import { useGlobalContext } from '../../AppContext';
import { useApiData } from '../../services/Api';

export const aboutContext = createContext()
const Home = () => {
    const { setActiveComponent } = useGlobalContext();
    const {storeData , loading} = useApiData()
    const [heading, setHeading] = useState("")
    const handleClick = () => {
        setActiveComponent("About")
    };

    useEffect(()=>{
        setHeading(storeData[0]?.homePage[0]?.title)
        console.log("title", heading)
    },[storeData, heading])
    return (
        <>
            <section id="sectionHome">
                <div className="container">
                    <div className="row">
                        <div className="col-6 content-section">
                            <div className="content-area">
                                <h1>
                                    {heading}
                                    {/* <span>HEY!</span> I am <span>Rahul</span>,<br /> A <span>Front-End Developer</span> based in <span>Mumbai</span> */}
                                </h1>
                                <p>{storeData[0]?.homePage[0]?.subtitle}</p>
                                <ul>
                                    <li>
                                        <button className='button-blue'>{storeData[0]?.homePage[0]?.buttonText}</button>
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


