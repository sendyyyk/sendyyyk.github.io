import React, { Fragment, useEffect, useRef, useState } from "react";
import ContainerCenter from "../Container/ContainerCenter";
import Cover from "./Cover"
import Profile from "./Profile";
import Menu from "../../Fragments/Menu/Menu";

const Main = (props) => {
    const {children, isActiveVideos, isActiveGallery, isActiveArticle} = props;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <main className="relative flex w-full">
                    <div className="absolute flex flex-col w-full">
                        <Cover styleCover="border-secondary border-b-0/3vw"/>
                        <ContainerCenter>
                            <Profile styleProfile="absolute top-0" top="15vw"/>
                            <Menu isActiveVideos={isActiveVideos} isActiveGallery={isActiveGallery} isActiveArticle={isActiveArticle} />
                            {children}
                        </ContainerCenter>
                    </div>
                </main>
            ) :(
                <main className="relative flex w-full">
                    <div className="absolute flex flex-col w-full">
                        <Cover styleCover="border-secondary border-b-1vw"/>
                        <ContainerCenter styleContainer="w-screen">
                            <Profile styleProfile="absolute top-0" top="15vw"/>
                            <Menu isActiveVideos={isActiveVideos} isActiveGallery={isActiveGallery} isActiveArticle={isActiveArticle} />
                            {children}
                        </ContainerCenter>
                    </div>
                </main>
            )}
        </Fragment>
    )
}

export default Main;
