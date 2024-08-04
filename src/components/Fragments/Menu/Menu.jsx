import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Video from "../../Elements/Icon/Video";
import Galery from "../../Elements/Icon/Galery";
import Article from "../../Elements/Icon/Article";
import Swal from "sweetalert2";

const Menu = (props) => {
    const {isActiveVideos, isActiveGallery, isActiveArticle} = props;
    const [isMobile, setIsMobile] = useState(false);

    const alertClick = (event) => {
        event.preventDefault();
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: 'Sorry, the article page is currently unavailable. Please wait for the next update!',
        });
    };

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <div className="flex justify-end w-full h-3/5vw">
                    <div className="flex" style={{width: "45vw"}}>
                        <li className="flex" style={{width: "calc(100% / 3)"}}>
                            <Link className={`${isActiveVideos} flex justify-center gap-x-0/5vw w-full py-1vw border-secondary hover:border-b-0/2vw`} to="/profile/videos">
                                <Video styleSvg="w-1/3vw h-1/3vw" fill="#008080"/>
                                <span className="text-1vw text-secondary">Videos</span>
                            </Link>
                        </li>
                        <li className="flex" style={{width: "calc(100% / 3)"}}>
                            <Link className={`${isActiveGallery} flex justify-center gap-x-0/5vw w-full py-1vw border-secondary hover:border-b-0/2vw`} to="/profile/gallery">
                                <Galery styleSvg="w-1/3vw h-1/3vw" fill="#008080"/>
                                <span className="text-1vw text-secondary">Gallery</span>
                            </Link>
                        </li>
                        <li className="flex" style={{width: "calc(100% / 3)"}}>
                            <Link className={`${isActiveArticle} flex justify-center gap-x-0/5vw w-full py-1vw border-secondary hover:border-b-0/2vw`} to="/profile/article" onClick={alertClick}>
                                <Article styleSvg="w-1/3vw h-1/3vw" fill="#008080"/>
                                <span className="text-1vw text-secondary">Article</span>
                            </Link>
                        </li>
                    </div>
                </div>
            ) : (
                <div className="flex w-full h-12vw mb-1vw">
                    <div className="flex" style={{width: "100%"}}>
                        <li className="flex" style={{width: "calc(100% / 3)"}}>
                            <Link className={`${isActiveVideos} flex justify-center items-center w-full py-1vw border-secondary hover:border-b-0/3vw`} to="/profile/videos">
                                <Video styleSvg="w-5vw h-5vw" fill="#008080"/>
                            </Link>
                        </li>
                        <li className="flex" style={{width: "calc(100% / 3)"}}>
                            <Link className={`${isActiveGallery} flex justify-center items-center w-full py-1vw border-secondary hover:border-b-0/3vw`} to="/profile/gallery">
                                <Galery styleSvg="w-5vw h-5vw" fill="#008080"/>
                            </Link>
                        </li>
                        <li className="flex" style={{width: "calc(100% / 3)"}}>
                            <Link className={`${isActiveArticle} flex justify-center items-center w-full py-1vw border-secondary hover:border-b-0/3vw`} to="/profile/article" onClick={alertClick}>
                                <Article styleSvg="w-5vw h-5vw" fill="#008080"/>
                            </Link>
                        </li>
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default Menu;
