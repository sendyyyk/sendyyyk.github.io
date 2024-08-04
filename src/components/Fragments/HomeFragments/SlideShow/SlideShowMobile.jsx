import { useEffect, useRef, useState } from "react";
import Button from "../../../Elements/Button/Button";
import Arrow from "../../../Elements/Icon/Arrow";
import SlideShowBtn from "./SlideShowBtn";
import SlideShowContent from "./SlideShowContent";
import ContentImage from "./ContentImage";
import ContentVideo from "./ContentVideo";
import FileNotFound from "../../../Elements/Icon/FileNotFound";
import useThrottle from "./useThrottle";

const SlideShowMobile = () => {
    const [contentCount, setContentCount] = useState(0);
    const [activeIndex, setActiveIndex] = useState(2);
    const [intervalDuration, setIntervalDuration] = useState(5000);
    const [resetLoading, setResetLoading] = useState(false);
    const contentRef = useRef(null);
    const loadingBarRef = useRef(null);
    const videoRefs = useRef([]);

    const slides = [
        { href: "/gallery/IknQ3jgUwt", src: "img-vid/image/slide-show/slide-show-1.png", type: "image" },
        { href: "/", src: "img-vid/video/slide-show/slide-show-2.mp4", type: "video" },
    ];

    useEffect(() => {
        if (contentRef.current) {
            const childrenArray = Array.from(contentRef.current.children);
            if (childrenArray.length > 0) {
                const firstSlide = childrenArray[0].cloneNode(true);
                const lastSlide = childrenArray[childrenArray.length - 1].cloneNode(true);

                contentRef.current.insertBefore(lastSlide, childrenArray[0]);
                contentRef.current.appendChild(firstSlide);

                setContentCount(childrenArray.length);
            }
        }
    }, [contentRef, slides.length]);

    useEffect(() => {
        if (contentRef.current) {
            const ulContent = contentRef.current;
            ulContent.style.transform = `translateX(-${100 * activeIndex}vw)`;

            if (activeIndex === contentCount) {
                setTimeout(() => {
                    ulContent.classList.add('duration-500');
                    setTimeout(() => {
                        ulContent.classList.remove('duration-500');
                        setActiveIndex(2);
                    }, 420);
                }, 0);
                setTimeout(() => {
                    ulContent.classList.add('duration-500');
                }, 550);
            } else if (activeIndex === 1) {
                setTimeout(() => {
                    ulContent.classList.add('duration-500');
                    setTimeout(() => {
                        ulContent.classList.remove('duration-500');
                        setActiveIndex(contentCount - 1);
                    }, 420);
                }, 0);
                setTimeout(() => {
                    ulContent.classList.add('duration-500');
                }, 550);
            }
        }
    }, [activeIndex, contentCount]);

    useEffect(() => {
        if (contentRef.current) {
            const slides = Array.from(contentRef.current.children);
            const currentSlide = slides[activeIndex];
            const videoElement = currentSlide.querySelector('video');
            if (videoElement) {
                const updateDuration = () => {
                    return new Promise((resolve) => {
                        if (videoElement.readyState >= 1) {
                            resolve(videoElement.duration);
                        } else {
                            videoElement.addEventListener('loadedmetadata', () => {
                                resolve(videoElement.duration);
                            });
                        }
                    });
                };

                updateDuration().then((duration) => {
                    setIntervalDuration(parseInt(duration * 1000));
                });
            } else {
                setIntervalDuration(5000);
            }
        }
    }, [activeIndex]);

    const handleSlideChange = (index) => {
        if (index > contentCount) {
            setActiveIndex(2);
        } else {
            setActiveIndex(index);
        }
        setResetLoading(true);
    };

    const throttledHandleSlideChange = useThrottle(handleSlideChange, 600);

    useEffect(() => {
        const interval = setInterval(() => {
            throttledHandleSlideChange(activeIndex + 1);
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [activeIndex, throttledHandleSlideChange, intervalDuration]);

    useEffect(() => {
        const loadingBar = loadingBarRef.current;
        if (loadingBar) {
            loadingBar.style.transition = 'none';
            loadingBar.style.width = '0%';
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    loadingBar.style.transition = `width ${intervalDuration}ms linear`;
                    loadingBar.style.width = '100%';
                });
            });
        }
        setResetLoading(false);
    }, [resetLoading, intervalDuration]);

    useEffect(() => {
        videoRefs.current = Array.from(contentRef.current?.children || []).map((child) => child.querySelector('video'));

        videoRefs.current.forEach((video) => {
            setTimeout(() => {
                if (video && video !== videoRefs.current[activeIndex]) {
                    video.pause();
                    video.currentTime = 0;
                }
            }, 100)
        });

        const activeVideo = videoRefs.current[activeIndex];
        setTimeout(() => {
            if (activeVideo) {
                activeVideo.play();
            }
        }, 100)
    }, [activeIndex]);

    const ulContentStyle = {
        width: `calc(100% * ${contentCount + 2})`,
    };

    return (
        <div className="relative flex w-full" style={{height: "80vw"}}>
            <div className="flex flex-col w-full h-full ms-auto z-10">
                <div className="relative flex w-screen h-3/4 ms-auto overflow-hidden before:content-[''] before:absolute before:z-10 before:bottom-0 before:left-0 before:bg-secondary before:duration-500 before:w-full before:shadow-2vwWhite xdrk-bxs1-css before:ms-min0/7vw ">
                    <div className="w-full h-full bg-black overflow-x-hidden">
                        <ul ref={contentRef} className="flex h-full duration-500" style={ulContentStyle}>
                            {slides.length === 0 ? (
                                <li className="w-full h-full">
                                    <a href="/" className="relative text-white flex flex-col gap-y-3vw items-center justify-center w-full h-full hover:before:block before:content-[''] before:absolute before:top-0 before:hidden before:w-full before:h-full before:bg-transpBlack before:z-10">
                                        <FileNotFound width="10vw" height="10vw"/>
                                        <span className="text-white text-5vw">No Items to Display</span>
                                    </a>
                                </li>
                            ) : (
                                slides.map((slide, index) => (
                                    <SlideShowContent href={slide.href} key={index}>
                                        {slide.type === "video" ? (
                                            <ContentVideo src={slide.src} />
                                        ) : (
                                            <ContentImage src={slide.src} />
                                        )}
                                    </SlideShowContent>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
                <div className="flex w-full h-2vw mt-1/5vw">
                    <div className="loading-progress absolute top-0 right-0 flex w-full h-0/5vw z-10">
                        <div ref={loadingBarRef} className="loading-bar h-full bg-secondary ms-auto"></div>
                    </div>
                    <div className="flex mx-auto gap-x-2/5vw">
                        <Button typeBtn="button" styleBtn="absolute top-1/4 left-3% flex justify-center items-center w-10vw h-10vw rounded-full overflow-hidden bg-primary duration-300 opacity-50 hover:opacity-100" onclick={() => throttledHandleSlideChange(activeIndex - 1)}>
                            <Arrow width="40%" height="40%"></Arrow>
                        </Button>
                        <div className="flex w-12vw mx-auto">
                            <ul className="absolute top-93vw left-7% flex justify-center gap-x-2vw my-auto">
                                {Array.from({ length: contentCount }).map((_, index) => (
                                    (index !== 0 && index !== contentCount - 1) && (
                                        <SlideShowBtn
                                            key={index}
                                            isActive={index === activeIndex - 1}
                                            onClick={() => throttledHandleSlideChange(index + 1)}
                                            styleBtn="w-2/5vw h-2/5vw"
                                        />
                                    )
                                ))}
                            </ul>
                        </div>
                        <Button typeBtn="button" styleBtn="absolute top-1/4 right-3% flex justify-center items-center w-10vw h-10vw rounded-full overflow-hidden bg-primary duration-300 opacity-50 hover:opacity-100" onclick={() => throttledHandleSlideChange(activeIndex + 1)}>
                            <Arrow width="40%" height="40%" styleSvg="rotate-180"></Arrow>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideShowMobile;
