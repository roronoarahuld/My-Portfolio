import React from "react";

type Props = {
    Attribute: string,
    title: string,
    projectHandled: string,
    subtitle: string,
    webUrl: string,
    techUsed: array[],
    projectImage: array[]
}

export const ContactOffCanvas = () => {
    return (
        <div className="offcanvas offcanvas-end " tabIndex="-1" id="contactSection" aria-labelledby="offcanvasBottomLabel">
            <div className="offcanvas-body small">
                <div className="contact_div">
                    <h3>Let's Connect</h3>
                    <div className="social">
                        <span>Social Media</span>
                        <ul>
                            <li>
                                <a href="#!">
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <span>Github</span>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <span>Youtube</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="contact">
                        <span>Contact</span>
                        <ul>
                            <li>
                                <a href="#!">
                                    <span>Email</span>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SliderOffCanvas = ({ Attribute, title, projectHandled, subtitle, webUrl, techUsed, projectImage }: Props) => {
    console.log("array", projectImage)
    return (
        <div className="offcanvas offcanvas-bottom " tabIndex="-1" id="offCanvas" aria-labelledby="offcanvasBottomLabel">
            <div className="offcanvas-body small">
                <div className="slideContent">
                    <div className="breadcrumb">
                        <button className="mb-4 d-flex align-items-center" data-bs-dismiss="offcanvas" aria-label="Close">
                            <img src={require("../images/arrow-left.svg").default} />
                            <span>Back to work</span>
                        </button>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-4">
                            <h3><a href={webUrl} target="_blank">{title}</a></h3>
                            <p>{projectHandled}</p>
                        </div>
                        <div className="col-md-8">
                            <p>{subtitle}</p>
                            <span>Technologies Used</span>
                            <div className="tech_img">
                                {
                                    techUsed.map((img)=>{
                                        return(
                                            <img src={img.image}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12  mb-5">
                            {
                                projectImage.map((primg)=>{
                                    return(
                                        <img src={primg?.images[0]?.link} className="img-fluid"/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}