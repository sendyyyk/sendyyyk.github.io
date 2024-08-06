import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import Container from "../../../Layouts/Container/Container";
import FullScreen from '../../../Elements/Icon/FullScreen';
import Header from '../../../Layouts/Header/Header';
import Button from "../../../Elements/Button/Button";
import Arrow from "../../../Elements/Icon/Arrow";
import Arrow2 from "../../../Elements/Icon/Arrow2";
import Info from '../../../Elements/Icon/Info';
import Send from '../../../Elements/Icon/Send';
import Download from "../../../Elements/Icon/Download";
import Copy from "../../../Elements/Icon/Copy";
import Other from '../../../Elements/Icon/Other';
import Close from '../../../Elements/Icon/Close';
import Swal from 'sweetalert2';

const DisplayGallery = (props) => {
    const {componentName = "IknQ3jgUwt", src = ["gallery-10.png"], caption = "Akatsuki", date = "22 July 2024"} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [heightState, setHeightState] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const imgRef = useRef(null);
    const [showLink, setShowLink] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [isExpandedDesc, setIsExpandedDesc] = useState(false);
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

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
        if (showLink == true || showButtons == true) {
            setShowLink(!showLink);
            setShowButtons(!showButtons); 
        }
    };

    const hiddenCommentClick = () => {
        setHeightState(!heightState);
    };

    const alertClick = () => {
        event.preventDefault();
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You Cannot Submit Your Comment Yet!",
        });
    };

    const handleTouchStart = () => {
        setIsHovered(true);
        setTimeout(() => {
            setIsHovered(false);
        }, 3000);
    };

    const handleFullScreenClick = () => {
        if (imgRef.current) {
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
    };

    const handleExpandDescClick = () => {
        setIsExpandedDesc(!isExpandedDesc);
    };

    const handlePrevClick = () => {
        if (currentIndex < src.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleLinkButtonClick = () => {
        setShowLink(!showLink);
        setShowButtons(!showButtons);
    };

    const handleDownloadClick = async () => {
        if (src.length === 1) {
            const gallerySrc = `/img-vid/image/galery/${src[0]}`;
            const response = await fetch(gallerySrc);
            const blob = await response.blob();
            saveAs(blob, `--SendyCheeks--${caption}.png`);
        } else {
            const zip = new JSZip();
            const folder = zip.folder("gallery");

            for (let i = 0; i < src.length; i++) {
                const gallerySrc = `/img-vid/image/galery/${src[i]}`;
                const response = await fetch(gallerySrc);
                const blob = await response.blob();
                folder.file(`--SendyCheeks--${caption}-${i + 1}.png`, blob);
            }

            zip.generateAsync({ type: "blob" }).then((content) => {
                saveAs(content, `--SendyCheeks--${caption}.zip`);
            });
        }
    };

    const handleCopyLinkClick = () => {
        const url = window.location.href;

        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Copied!",
                    text: "The link has been copied to your clipboard.",
                });
            }).catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Failed to copy the link.",
                });
            });
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = url;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);

            Swal.fire({
                icon: "success",
                title: "Copied!",
                text: "The link has been copied to your clipboard.",
            });
        }
    };

    const translateX = -currentIndex * (100 / src.length);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    const handlers = useSwipeable({
        onSwipedLeft: () => handlePrevClick(),
        onSwipedRight: () => handleNextClick(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    useEffect(() => {
        if (isMobile) {
            document.body.setAttribute('data-device', 'mobile-phn');
        } else {
            document.body.removeAttribute('data-device');
        }
    }, [isMobile]);
    
    return (
        <Fragment>
            {!isMobile ? (
                <Container hidden="true">
                    <div className='flex flex-col w-full h-screen'>
                        <Header></Header>
                        <div className='flex w-full mt-auto overflow-hidden' style={{height: "calc(100% - 4vw)"}}>
                            <div 
                                className="relative flex h-full w-full my-auto"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div ref={imgRef} className='flex w-full h-full'>
                                    {src.length > 1 && (
                                        <>
                                            <Button type="button" styleBtn="prev absolute top-1/2 right-1vw translate-y-1/2min flex w-2vw h-2vw bg-transpBlack rounded-full z-10" onclick={handlePrevClick}>
                                                <Arrow2 width="100%" height="100%" styleSvg="mx-auto my-auto"/>
                                            </Button>
                                            <Button type="button" styleBtn="next absolute top-1/2 left-1vw translate-y-1/2min flex w-2vw h-2vw bg-transpBlack rounded-full z-10" onclick={handleNextClick}>
                                                <Arrow2 width="100%" height="100%" styleSvg="mx-auto my-auto rotate-180"/>
                                            </Button>
                                        </>
                                    )}
                                    <div className='h-full w-full overflow-x-hidden'>
                                        <ul className= {isFullscreen ? "flex h-full duration-300 bg-white xdrk-bc2-css" : "flex h-full duration-300 py-1vw bg-white xdrk-bc2-css"} style={{ width: `calc(100% * ${src.length})`, transform: `translateX(${translateX}%)` }}>
                                            {src.map((image, index) => (
                                                <li key={index} className="flex h-full w-full">
                                                    <img 
                                                        src={`/img-vid/image/galery/${image}`} 
                                                        alt="${image}" 
                                                        className={isFullscreen ? "max-w-full max-h-full mx-auto my-auto" : "w-full h-full object-cover object-center"}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {isHovered && (
                                    <Button type="button" styleBtn="absolute top-1/2 left-1/2 translate-x-1/2min translate-y-1/2min flex w-2vw h-2vw bg-transpBlack rounded-0/5vw" onclick={handleFullScreenClick}>
                                        <FullScreen width="70%" height="70%" styleSvg="mx-auto my-auto"/>
                                    </Button>
                                )}
                            </div>
                            <Button
                                styleBtn="absolute top-6vw right-0 mr-1vw translate-y-1/2min w-2vw h-2vw rounded-0/5vw bg-secondary opacity-50 z-10 hover:opacity-100"
                                onclick={handleButtonClick}
                            >
                                <Arrow styleSvg={`${isOpen ? '' : 'rotate-180'} duration-300 w-1/2 h-1/2 mx-auto my-auto`}/>
                            </Button>
                            <div className={`relative flex flex-col justify-between h-full ${isOpen ? 'w-0' : 'w-25vw'} duration-300`} style={{ transform: isOpen ? 'translateX(18vw)' : 'translateX(0vw)' }}>
                                <div className={`link absolute flex flex-col ${showLink ? 'w-12vw' : 'w-0'} h-5vw rounded-bl-0/5vw overflow-hidden duration-300 bg-transpSecondary`} style={{right: "20vw", top:"0vw"}}>
                                    {showButtons && (
                                        <>
                                            <Button type="button" styleBtn="relative flex justify-center items-center gap-x-0/5vw h-1/2 w-12vw hover:before:block before:content-[''] before:hidden before:absolute before:w-full before:h-full before:bg-white before:opacity-40" onclick={handleDownloadClick}>
                                                <span className='flex w-1vw h-1vw '>
                                                    <Download styleSvg="m-auto" width="100%" height="100%" />
                                                </span>
                                                <span className='text-0/7vw text-white xdrk-c1-css'>Download</span>
                                            </Button>
                                            <Button type="button" styleBtn="relative flex justify-center items-center gap-x-0/5vw h-1/2 w-12vw hover:before:block before:content-[''] before:hidden before:absolute before:w-full before:h-full before:bg-white before:opacity-40" onclick={handleCopyLinkClick}>
                                                <span className='flex w-1vw h-1vw '>
                                                    <Copy styleSvg="m-auto" width="100%" height="100%" />
                                                </span>
                                                <span className='text-0/7vw text-white xdrk-c1-css'>Copy Link</span>
                                            </Button>
                                        </>
                                    )}
                                </div>
                                <div className="flex flex-col w-full duration-300 h-2/5 overflow-y-auto">
                                    <div className="relative flex w-full py-1/2vw">
                                        <span className="mx-auto my-auto text-1vw font-semibold text-grey xdrk-c1-css">Caption</span>
                                        <Button
                                            type="button"
                                            styleBtn='absolute top-2vw left-0 ms-1vw translate-y-1/2min flex w-2vw h-2vw bg-secondary rounded-0/5vw opacity-60 z-10 hover:opacity-100'
                                            onclick={handleLinkButtonClick}
                                        >
                                            <Other width="80%" height="80%" styleSvg="m-auto" fill="#fff" />
                                        </Button>
                                    </div>
                                    <div className='flex flex-col w-full gap-y-1vw px-1vw menu-bar-scroll overflow-y-auto'>
                                        <div className='w-full flex justify-start'>
                                            <span className='date text-0/7vw py-0/5vw px-1vw bg-secondary rounded-0/5vw text-white'>{date}</span>
                                        </div>
                                        <div className='flex flex-col mx-auto h-5/6 pr-0/5vw menu-bar-scroll overflow-y-auto' style={{width: "18vw"}}>
                                            <span className='break-words text-0/9vw xdrk-c1-css'>
                                                {caption}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`absolute bottom-0 z-10 flex flex-col w-full bg-white xdrk-bc1-css ${heightState ? 'top-[7.8%] h-[82.5%]' : 'top-[40%]'} h-1/2 duration-300 overflow-hidden`}>
                                    <div className="relative flex w-full py-1vw">
                                        <Button
                                            styleBtn="absolute top-1/2 right-0 mr-1vw translate-y-1/2min w-2vw h-2vw rounded-0/5vw bg-primary opacity-50 z-10 hover:opacity-100"
                                            onclick={hiddenCommentClick}
                                        >
                                            <Arrow styleSvg={`${heightState ? 'rotate-270' : 'rotate-90'} duration-300 w-1/2 h-1/2 mx-auto my-auto`} />
                                        </Button>
                                        <span className="mx-auto my-auto text-1vw font-semibold xdrk-c1-css">Comment</span>
                                    </div>
                                    <div className='flex flex-col items-center justify-center gap-y-1vw w-full h-full px-1vw menu-bar-scroll overflow-y-auto'>
                                        <div className='w-3vw h-3vw'>
                                            <Info />
                                        </div>
                                        <span className='text-center text-0/9vw w-full xdrk-c1-css'>
                                            The comment feature is currently unavailable. Please wait for the next update.
                                        </span>
                                    </div>
                                </div>
                                <div className='flex w-full px-1vw py-0/5vw' style={{ height: "10%" }}>
                                    <form action="#" className='relative flex flex-col justify-between w-full h-full' onSubmit={alertClick}>
                                        <input type="text" className='w-13vw text-0/8vw text-white py-0/2vw px-0/5vw bg-black focus:outline-none' required disabled placeholder='Enter Your Name' />
                                        <input type="text" className='w-13vw text-0/8vw font-light text-secondary py-0/2vw px-0/5vw bg-black focus:outline-none placeholder:text-secondary' required disabled placeholder='Enter Your Comments' />
                                        <Button type="submit" styleBtn="absolute top-1/2 right-0 translate-x-1/2min translate-y-1/2min w-2vw h-2vw hover:opacity-60">
                                            <Send/>
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            ) : (
                <Container styleScroll="h-full" hidden="true">
                    <div className='sticky top-0 left-0 bottom-0 right-0 w-full h-full backdrop-blur-1vw z-10'>
                        <div className='flex flex-col w-screen h-full overflow-y-auto'>
                            <div className='flex justify-end w-full bg-black'>
                                <Header></Header>
                            </div>
                            <div className='flex w-full'>
                                <div className='w-full h-full overflow-y-auto'>
                                    <div 
                                        className="relative flex flex-col w-full h-96vw overflow-hidden touch-manipulation"
                                        onTouchStart={handleTouchStart}
                                    >
                                        <div ref={imgRef} className='flex w-full h-full'>
                                            {src.length > 1 && (
                                                <>
                                                    <Button type="button" styleBtn="absolute top-1/2 right-2vw translate-y-1/2min flex w-10vw h-10vw bg-transpBlack rounded-full z-10" onclick={handlePrevClick}>
                                                        <Arrow2 width="100%" height="100%" styleSvg="mx-auto my-auto" />
                                                    </Button>
                                                    <Button type="button" styleBtn="absolute top-1/2 left-2vw translate-y-1/2min flex w-10vw h-10vw bg-transpBlack rounded-full z-10" onclick={handleNextClick}>
                                                        <Arrow2 width="100%" height="100%" styleSvg="mx-auto my-auto rotate-180" />
                                                    </Button>
                                                </>
                                            )}
                                            <div className='h-full w-full overflow-x-hidden'>
                                                <ul {...handlers} className= {isFullscreen ? "flex h-full duration-300 bg-white xdrk-bc2-css" : "flex h-full duration-300 bg-white xdrk-bc2-css"} style={{ width: `calc(100% * ${src.length})`, transform: `translateX(${translateX}%)` }}>
                                                    {src.map((image, index) => (
                                                        <li key={index} className="flex h-full w-full">
                                                            <img 
                                                                src={`/img-vid/image/galery/${image}`} 
                                                                alt="${image}" 
                                                                className={isFullscreen ? "max-w-full max-h-full mx-auto my-auto" : "w-full h-full object-cover object-center"}
                                                            />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        {isHovered && (
                                            <Button type="button" styleBtn="absolute top-1/2 left-1/2 translate-x-1/2min translate-y-1/2min flex w-10vw h-10vw bg-transpBlack rounded-3vw" onclick={handleFullScreenClick}>
                                                <FullScreen width="70%" height="70%" styleSvg="mx-auto my-auto" />
                                            </Button>
                                        )}
                                    </div>
                                    <div className={`flex flex-col w-full gap-y-3vw duration-300`}>
                                        <div className={`flex flex-col w-full duration-300`}>
                                            <div className="relative flex w-full px-3vw py-5vw">
                                                <span className="mx-auto my-auto text-5vw font-semibold text-grey xdrk-c1-css">Caption</span>
                                            </div>
                                            <div className='flex flex-col w-full gap-y-3vw px-3vw'>
                                                <div className='w-full flex justify-between'>
                                                    <span className='flex justify-center items-center text-3vw py-2vw px-7vw rounded-2vw text-white bg-secondary font-semibold'>{date}</span>
                                                    <Button
                                                        type="button"
                                                        styleBtn='flex w-10vw h-10vw my-auto bg-secondary rounded-full opacity-60 hover:opacity-100'
                                                        onclick={handleLinkButtonClick}
                                                    >
                                                        <Other width="80%" height="80%" styleSvg="m-auto" fill="#fff" />
                                                    </Button>
                                                </div>
                                                <div className={`flex flex-col w-full ${isExpandedDesc ? '' : ''}  rounded-3vw bg-slate-900`} onClick={handleExpandDescClick}>
                                                    <span className={`break-words px-3vw py-3vw pb-1vw text-4vw text-white ${isExpandedDesc ? '' : 'line-clamp-4'}`} >
                                                        {caption} 
                                                    </span>
                                                    <span className='flex ms-auto text-3vw px-5vw py-1/5vw mx-3vw mb-3vw bg-secondary rounded-1vw text-white'>
                                                        {isExpandedDesc ? 'Less More' : 'See More'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`flex flex-col bg-white xdrk-bc1-css border-t-1vw border-b-1vw border-black xdrk-bdr1-css z-10 ${heightState ? '!block fixed bottom-0 w-full h-full border-none overflow-y-auto' : ''} duration-300`}>
                                            <div className="relative flex w-full px-3vw py-5vw">
                                                <Button
                                                    styleBtn="absolute top-1/2 right-0 mr-3vw translate-y-1/2min w-10vw h-10vw rounded-3vw bg-primary opacity-50 z-10 hover:opacity-100"
                                                    onclick={hiddenCommentClick}
                                                >
                                                    <Arrow styleSvg={`${heightState ? 'rotate-270' : 'rotate-90'} duration-300 w-1/2 h-1/2 mx-auto my-auto`} />
                                                </Button>
                                                <span className="mx-auto my-auto text-5vw font-semibold xdrk-c1-css">Comment</span>
                                            </div>
                                            {heightState ? (
                                                <div className='flex flex-col items-center justify-center gap-y-3vw w-full h-full px-5vw menu-bar-scroll overflow-y-auto' style={{height: "100vmax"}}>
                                                    <div className='w-20vw h-20vw'>
                                                        <Info />
                                                    </div>
                                                    <span className='text-center text-4vw w-full xdrk-c1-css'>
                                                        The comment feature is currently unavailable. Please wait for the next update.
                                                    </span>
                                                </div>
                                            ) : (
                                                null
                                            )}
                                        </div>
                                        <div className='flex w-full px-3vw mt-2vw mb-4vw'>
                                            <form action="#" className='relative flex flex-col justify-between gap-y-3vw w-full h-full' onSubmit={alertClick}>
                                                <input type="text" className='w-75vw text-4vw text-white py-3vw px-5vw rounded-3vw bg-black border-0/5vw border-white xdrk-bc2-css focus:outline-none' required disabled placeholder='Enter Your Name' />
                                                <input type="text" className='w-75vw text-4vw font-light text-secondary py-3vw px-5vw rounded-3vw bg-black border-0/5vw border-secondary xdrk-bc3-css focus:outline-none placeholder:text-secondary' required disabled placeholder='Enter Your Comments' />
                                                <Button type="submit" styleBtn="absolute top-1/2 right-2vw flex bg-black px-3vw translate-y-1/2min w-15vw h-15vw rounded-full border-0/5vw border-white hover:opacity-60">
                                                    <Send styleSvg="mx-auto my-auto" stroke="#ffffff" />
                                                </Button>
                                            </form>
                                        </div>
                                        <div className={`fixed bottom-0 flex w-full h-0 bg-transpBlack z-10 ${showLink ? '!h-full' : ''} duration-300 backdrop-blur-1vw overflow-y-auto`}>
                                            {showButtons && (
                                                <>
                                                    <Button styleBtn="absolute top-5vw right-5vw flex w-12vw h-12vw bg-secondary rounded-full" onclick={handleLinkButtonClick}>
                                                        <Close styleSvg="mx-auto my-auto" fill="fill-white" width="80%" height="80%" />
                                                    </Button>
                                                    <div className='w-full overflow-y-auto' style={{ height: "90%", marginTop: "20vw" }}>
                                                        <Button type="button" styleBtn="relative flex justify-center items-center gap-x-3vw my-3vw h-15vw w-90vw mx-auto bg-green-500 rounded-3vw hover:before:block before:content-[''] before:hidden before:absolute before:w-full before:h-full before:bg-white before:rounded-3vw before:opacity-40" onclick={handleDownloadClick}>
                                                            <span className='flex w-7vw h-7vw '>
                                                                <Download styleSvg="m-auto" width="100%" height="100%" />
                                                            </span>
                                                            <span className='text-5vw text-white xdrk-c1-css'>Download</span>
                                                        </Button>
                                                        <Button type="button" styleBtn="relative flex justify-center items-center gap-x-3vw my-3vw h-15vw w-90vw mx-auto bg-purple-500 rounded-3vw hover:before:block before:content-[''] before:hidden before:absolute before:w-full before:h-full before:bg-white before:rounded-3vw before:opacity-40" onclick={handleCopyLinkClick}>
                                                            <span className='flex w-7vw h-7vw '>
                                                                <Copy styleSvg="m-auto" width="100%" height="100%" />
                                                            </span>
                                                            <span className='text-5vw text-white xdrk-c1-css'>Copy Link</span>
                                                        </Button>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            )}
        </Fragment>
    );
};

export default DisplayGallery;