import React from "react";
// import "./app.scss";
import { getRandomColor, createImageFromInitials } from '../helper/utils'
function Image({name}) {
    let imgSrc = "";

    return (
        <div>
            <img
                id='preview'
                src={
                    imgSrc.length <= 0
                        ? createImageFromInitials(500, name, getRandomColor())
                        : imgSrc
                }
                alt='profile-pic'
            />
        </div>
    );
}

export default Image;