import React, { useState } from "react";

export default function Work() {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <>
            <section id="sectionWork">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <div className={isExpanded === true ? "content-section remove-abs" : "content-section"}> */}
                                <div className="content-section">
                                <h1>Transforming Ideas into Impactful Designs</h1>
                                {/* Slider */}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel">
                    <div className="slides">
                        <div id="slide-1" className={isExpanded === true ? "box expanded" : "box"} onClick={() => setIsExpanded(true)}>
                            1
                        </div>
                        <div id="slide-2" className="box">2</div>
                        <div id="slide-3" className="box">3</div>
                        <div id="slide-4" className="box">4</div>
                        <div id="slide-5" className="box">5</div>
                        <div id="slide-6" className="box">6</div>
                    </div>
                </div>
            </section>
        </>
    )
}