import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import DisplayGallery from '../../DisplayMedia/DisplayGallery/DisplayGallery';
import Copy from '../../../Elements/Icon/Copy';
import Fire from '../../../Elements/Icon/Fire';

const ListGallery = (props) => {
    const { styleGalery, src, caption, date, randomName, popular, rotate, styleDiv1Li, styleIcon, styleFire, styleCopy } = props;
    const [isDisplayVisible, setIsDisplayVisible] = useState(false);
    const [containerDef, setContainerDef] = useState(null);
    const [resizedSrc, setResizedSrc] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setContainerDef(document.querySelector('.container-def'));
        if (src.length > 0) {
            const firstImageSrc = src[0];
            const img = new Image();
            img.src = `/img-vid/image/galery/${firstImageSrc}`;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                const maxDimension = 720;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxDimension) {
                        height *= maxDimension / width;
                        width = maxDimension;
                    }
                } else {
                    if (height > maxDimension) {
                        width *= maxDimension / height;
                        height = maxDimension;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);

                const dataUrl = canvas.toDataURL('image/jpeg');
                setResizedSrc(dataUrl);
            };
        }
    }, [src]);

    const handleClick = (event) => {
        event.preventDefault();
        setIsDisplayVisible(true);
        window.history.pushState({}, '', `/gallery/${randomName}`);
    };

    const closeDisplay = () => {
        setIsDisplayVisible(false);
        window.history.back();
    };

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <>
                    <li className={`flex w-13vw h-13vw overflow-hidden ${styleGalery}`} style={{ transform: `rotateY(${rotate}deg) rotateZ(${rotate}deg)` }}>
                        <div className={`relative w-12vw h-12vw mx-auto my-auto rounded-1vw duration-300 overflow-hidden shadow-0/4vwBlack ${styleDiv1Li}`}>
                            <div onClick={handleClick} className="relative flex w-full h-full hover:after:block after:content-[''] after:absolute after:z-10 after:hidden after:w-full after:h-full after:bg-transpBlack cursor-pointer">
                                {resizedSrc && (
                                    <img src={resizedSrc} alt="gallery" className="relative w-full h-full object-cover" />
                                )}
                            </div>
                            <div className={`absolute top-4% flex px-0/5vw w-full ${styleIcon}`}>
                                {popular === true && (
                                    <div className={`flex w-1/5vw h-1/5vw me-auto bg-black rounded-full ${styleFire}`}>
                                        <Fire styleSvg="mx-auto my-auto" width="60%" height="60%" />
                                    </div>
                                )}
                                {src.length > 1 && (
                                    <div className={`flex w-1/5vw h-1/5vw ms-auto bg-black rounded-0/5vw ${styleCopy}`}>
                                        <Copy styleSvg="mx-auto my-auto" width="50%" height="50%" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </li>
                    {isDisplayVisible && containerDef && ReactDOM.createPortal(
                        <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-transpBlack z-10'>
                            <DisplayGallery src={src} caption={caption} date={date} onClose={closeDisplay} />
                        </div>,
                        containerDef
                    )}
                </>
            ) : (
                <>
                    <li className={`flex h-33vw overflow-hidden ${styleGalery}`} style={{ transform: `rotateY(${rotate}deg) rotateZ(${rotate}deg)`, width: "calc(100% / 3.05)" }}>
                        <div className={`relative w-full h-full my-auto mx-auto duration-300 overflow-hidden ${styleDiv1Li}`}>
                            <div onClick={handleClick} className="relative flex w-full h-full hover:after:block after:content-[''] after:absolute after:z-10 after:hidden after:w-full after:h-full after:bg-transpBlack cursor-pointer">
                                {resizedSrc && (
                                    <img src={resizedSrc} alt="gallery" className="relative w-full h-full object-cover" />
                                )}
                            </div>
                            <div className={`absolute top-4% flex px-0/5vw w-full ${styleIcon}`}>
                                {popular === true && (
                                    <div className={`flex w-1/5vw h-1/5vw me-auto bg-black rounded-full ${styleFire}`}>
                                        <Fire styleSvg="mx-auto my-auto" width="60%" height="60%" />
                                    </div>
                                )}
                                {src.length > 1 && (
                                    <div className={`flex w-1/5vw h-1/5vw ms-auto bg-black rounded-0/5vw ${styleCopy}`}>
                                        <Copy styleSvg="mx-auto my-auto" width="50%" height="50%" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </li>
                    {isDisplayVisible && containerDef && ReactDOM.createPortal(
                        <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-transpBlack backdrop-blur-1vw z-10'>
                            <DisplayGallery src={src} caption={caption} date={date} onClose={closeDisplay} />
                        </div>,
                        containerDef
                    )}
                </>
            )}
        </Fragment>
    );
};

export default ListGallery;
