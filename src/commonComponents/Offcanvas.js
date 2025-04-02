import React from "react";

type Props ={
    Attribute: string
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

export const SliderOffCanvas = ({Attribute}: Props) => {
    console.log("answer", Attribute)
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
                </div>
            </div>
        </div>
    )
}