import { createContext, useState } from "react";
import About from "../components/about/about";

export const aboutHeaderContext = createContext()
const Header = () => {
    const [showAboutHeadeComponent, setShowAboutHeaderComponent] = useState(false);
    const handleClick = () => {
        setShowAboutHeaderComponent(true)
    }
    return(
        <>
            <nav>
                <div className="container h-100">
                    <div className="row">
                        <div className="col-6">
                            <a href="">
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
                                    <a onClick={handleClick} href={undefined}>About Me</a>
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
            {/* <aboutHeaderContext.Provider value={[showAboutHeadeComponent, setShowAboutHeaderComponent]}>
                <About/>
            </aboutHeaderContext.Provider> */}
        </>
    )
}

export default Header