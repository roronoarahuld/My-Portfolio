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
            case("staplesTruRed"):
                setTitle(storeData[0]?.workPage[0]?.slides[2]?.title)
                setProjectHandled(storeData[0]?.workPage[0]?.slides[2]?.projectHandled)
                setSubtitle(storeData[0]?.workPage[0]?.slides[2]?.subtitle)
                setWebUrl(storeData[0]?.workPage[0]?.slides[2]?.webUrl)
                setTechUsed(storeData[0]?.workPage[0]?.slides[2]?.techUsed)
                setProjectImage(storeData[0]?.workPage[0]?.slides[2]?.workImages)
                break;
            case("jib"):
                setTitle(storeData[0]?.workPage[0]?.slides[3]?.title)
                setProjectHandled(storeData[0]?.workPage[0]?.slides[3]?.projectHandled)
                setSubtitle(storeData[0]?.workPage[0]?.slides[3]?.subtitle)
                setWebUrl(storeData[0]?.workPage[0]?.slides[3]?.webUrl)
                setTechUsed(storeData[0]?.workPage[0]?.slides[3]?.techUsed)
                setProjectImage(storeData[0]?.workPage[0]?.slides[3]?.workImages)
                break;
            case("bhn"):
                setTitle(storeData[0]?.workPage[0]?.slides[4]?.title)
                setProjectHandled(storeData[0]?.workPage[0]?.slides[4]?.projectHandled)
                setSubtitle(storeData[0]?.workPage[0]?.slides[4]?.subtitle)
                setWebUrl(storeData[0]?.workPage[0]?.slides[4]?.webUrl)
                setTechUsed(storeData[0]?.workPage[0]?.slides[4]?.techUsed)
                setProjectImage(storeData[0]?.workPage[0]?.slides[4]?.workImages)
                break;
            case("sng"):
                setTitle(storeData[0]?.workPage[0]?.slides[5]?.title)
                setProjectHandled(storeData[0]?.workPage[0]?.slides[5]?.projectHandled)
                setSubtitle(storeData[0]?.workPage[0]?.slides[5]?.subtitle)
                setWebUrl(storeData[0]?.workPage[0]?.slides[5]?.webUrl)
                setTechUsed(storeData[0]?.workPage[0]?.slides[5]?.techUsed)
                setProjectImage(storeData[0]?.workPage[0]?.slides[5]?.workImages)
                break;
            case("sngApp"):
                setTitle(storeData[0]?.workPage[0]?.slides[6]?.title)
                setProjectHandled(storeData[0]?.workPage[0]?.slides[6]?.projectHandled)
                setSubtitle(storeData[0]?.workPage[0]?.slides[6]?.subtitle)
                setWebUrl(storeData[0]?.workPage[0]?.slides[6]?.webUrl)
                setTechUsed(storeData[0]?.workPage[0]?.slides[6]?.techUsed)
                setProjectImage(storeData[0]?.workPage[0]?.slides[6]?.workImages)
                break;
            case("bhnApp"):
                setTitle(storeData[0]?.workPage[0]?.slides[7]?.title)
                setProjectHandled(storeData[0]?.workPage[0]?.slides[7]?.projectHandled)
                setSubtitle(storeData[0]?.workPage[0]?.slides[7]?.subtitle)
                setWebUrl(storeData[0]?.workPage[0]?.slides[7]?.webUrl)
                setTechUsed(storeData[0]?.workPage[0]?.slides[7]?.techUsed)
                setProjectImage(storeData[0]?.workPage[0]?.slides[7]?.workImages)
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
        </>
    )
}