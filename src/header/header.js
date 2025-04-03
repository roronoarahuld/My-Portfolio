import { createContext, useContext, useEffect, useState } from "react";
import { useGlobalContext } from "../AppContext";
import { useApiData } from "../services/Api";
const Header = () => {
    const {storeData , loading} = useApiData()
    const { setActiveComponent } = useGlobalContext()
    return (
        <>
            <nav>
                <div className="container h-100">
                    <div className="row">
                        <div className="col-6">
                            <a onClick={() => { setActiveComponent("Home") }} href="#!">
                                <ul>
                                    <li>
                                        <img alt="Logo" src={storeData[0]?.menuLogo} />
                                    </li>
                                    <li>
                                        <h4>{storeData[0]?.menu[0]?.menuName}</h4>
                                    </li>
                                </ul>
                            </a>
                        </div>
                        <div className="col-6">
                            <ul className="menu-links">
                                <li>
                                    <a onClick={() => { setActiveComponent("About") }} href="#!">About Me</a>
                                </li>
                                <li>
                                    <a onClick={() => { setActiveComponent("Work") }} href="#!">Work</a>
                                </li>
                                <li>
                                    <a data-bs-toggle="offcanvas" data-bs-target="#contactSection" aria-controls="contactSection" href="#!">Contact</a>
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