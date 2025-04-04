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
                                    <a onClick={() => { setActiveComponent("About") }} href="#!">{storeData[0]?.menu[1]?.menuName}</a>
                                </li>
                                <li>
                                    <a onClick={() => { setActiveComponent("Work") }} href="#!">{storeData[0]?.menu[2]?.menuName}</a>
                                </li>
                                <li>
                                    <a data-bs-toggle="offcanvas" data-bs-target="#contactSection" aria-controls="contactSection" href="#!">{storeData[0]?.menu[3]?.menuName}</a>
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