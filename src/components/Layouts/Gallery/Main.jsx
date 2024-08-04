import { Fragment, useState, useEffect } from "react";
import Main from "../Profile/Main";
import Gallery from "../../Fragments/GalleryFragments/Gallery";

const MainGallery = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <Main isActiveGallery="border-b-0/2vw">
                    <Gallery />
                </Main>
            ) : (
                <Main isActiveGallery="border-b-0/5vw">
                    <Gallery />
                </Main>
            )}
        </Fragment>
    )
}

export default MainGallery;
