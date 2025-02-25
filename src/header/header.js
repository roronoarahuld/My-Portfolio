import { createContext, useContext, useEffect, useState } from "react";
import About from "../components/about/about";
import { aboutContext } from "../components/home/home";

const Header = () => {
    const showComponent = useContext(aboutContext)
    console.log("header update", viewState)
    const checkSection = ({sendData}) => {
        return <About sendData={}/>
    }
    return(
        <>
            <nav>
                <div className="container h-100">
                    <div className="row">
                        <div className="col-6">
                            <a href="#!">
                                <ul>
                                    <li>
                                        <img alt="Logo" src={require("../images/kuroso.png")}/>
                                    </li>
                                    <li>
                                        <h4>RAHUL</h4>
                                    </li>
                                </ul>
                            </a>
                        </div>
                        <div className="col-6">
                            <ul className="menu-links">
                                <li>
                                    <a onClick={checkSection} href="#!">About Me</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Work</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Header