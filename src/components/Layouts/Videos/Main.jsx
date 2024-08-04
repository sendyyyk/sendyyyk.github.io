import React, { Fragment, useEffect, useRef, useState } from "react";
import Main from "../Profile/Main";
import Videos from "../../Fragments/VideosFragments/Videos";

const MainVideos = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <Main isActiveVideos="border-b-0/2vw">
                    <Videos/>
                </Main>
            ) : (
                <Main isActiveVideos="border-b-0/5vw">
                    <Videos/>
                </Main>
            )}
        </Fragment>
    )
}

export default MainVideos;
