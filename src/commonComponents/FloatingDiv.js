import React, { useEffect, useState } from "react"

type Props = {
    onPress: () => void;
    title: string;
    subtitle: string;
    tags: array[];
    image: string;
}

const FloatingDiv = ({ onPress, title, subtitle, image, tags }: Props) => {
    return (
        <div className='container h-100'>
            <div className='row h-100 align-items-center'>
                <div className='col-6'>
                    <div className='thumbnail-area d-flex justify-content-between'>
                        {
                            image === "about" ? (
                                <img src={require("../images/about-thumb.png")} alt="About Thumbnail"/>
                            ):(
                                <img src={require("../images/work-thumb.png")} alt="Work Thumbnail"/>
                            )
                        }
                        <div className='d-flex flex-column ps-5 justify-content-center'>
                            <h4>{title}</h4>
                            <span>{subtitle} .....</span>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='tags_next_page'>
                        <ul>
                            {tags?.map((str) => {
                                return (
                                    <li key={str}>
                                        {str?.tagName}
                                    </li>
                                )
                            })}
                        </ul>
                        <div className='arrow_next' onClick={onPress}>
                            <img src={require("../images/arrow.png")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FloatingDiv