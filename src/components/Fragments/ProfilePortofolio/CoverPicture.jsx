import React, { Fragment, useEffect, useRef, useState } from "react";
import Button from "../../Elements/Button/Button";
import Camera from "../../Elements/Icon/Camera";

const CoverPicture = (props) => {
    const { src, styleCover } = props;
    const imgRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [resizedSrc, setResizedSrc] = useState('');
    const [defaultSrc, setDefaultSrc] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(document.fullscreenElement !== null);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
        };
    }, []);

    useEffect(() => {
        const img = new Image();
        img.src = `/img-vid/image/cover-picture/${src}`;
        img.onload = () => {
            const maxDimension = 1080; 
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            let { width, height } = img;

            setDefaultSrc(img.src);

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

            setResizedSrc(canvas.toDataURL('image/jpeg'));
        };
    }, [src]);

    const handleFullScreenClick = () => {
        if (imgRef.current) {
            if (isFullscreen) {
                document.exitFullscreen();
            } else {
                if (imgRef.current.requestFullscreen) {
                    imgRef.current.requestFullscreen();
                } else if (imgRef.current.mozRequestFullScreen) {
                    imgRef.current.mozRequestFullScreen();
                } else if (imgRef.current.webkitRequestFullscreen) {
                    imgRef.current.webkitRequestFullscreen();
                } else if (imgRef.current.msRequestFullscreen) {
                    imgRef.current.msRequestFullscreen();
                }
            }
        }
    };

    const imageSrc = isFullscreen ? defaultSrc : resizedSrc;

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <div className={`${styleCover} relative flex w-full backdrop-blur-0/5vw hover:before:block before:content-[''] before:absolute before:hidden before:top-0 before:left-0 before:w-full before:h-full before:bg-transpBlack before:z-10`} style={{ height: "30vw" }}>
                    <img ref={imgRef} src={imageSrc} alt="Cover-Picture" className={isFullscreen ? "mx-auto max-w-full max-h-full" : "mx-auto w-full h-full object-cover"} />
                    <Button styleBtn="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2min w-3vw h-3vw rounded-full bg-black z-10 opacity-40 hover:opacity-100" onclick={handleFullScreenClick}>
                        <Camera width="50%" height="50%" styleSvg="mx-auto my-auto" />
                    </Button>
                </div>
            ) : (
                <div className={`${styleCover} relative bg-black flex w-full backdrop-blur-0/5vw hover:before:block before:content-[''] before:absolute before:hidden before:top-0 before:left-0 before:w-full before:h-full before:bg-transpBlack before:z-10`} style={{ height: "70vw" }}>
                    <img ref={imgRef} src={imageSrc} alt="Cover-Picture" className={isFullscreen ? "mx-auto max-w-full max-h-full" : "mx-auto w-full h-full object-cover"} />
                    <Button styleBtn="absolute top-1/2 right-17vw translate-y-1/2min w-10vw h-10vw rounded-full bg-black z-10 opacity-60 hover:opacity-100" onclick={handleFullScreenClick}>
                        <Camera width="50%" height="50%" styleSvg="mx-auto my-auto" />
                    </Button>
                </div>
            )} 
        </Fragment>
    );
};

export default CoverPicture;
