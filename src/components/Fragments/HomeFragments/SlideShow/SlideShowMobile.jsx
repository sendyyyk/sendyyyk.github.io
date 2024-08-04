import { useState, useEffect, useRef } from "react";
import Button from "../../../Elements/Button/Button";
import Arrow from "../../../Elements/Icon/Arrow";
import SlideShowBtn from "./SlideShowBtn";
import SlideShowContent from "./SlideShowContent";
import ContentImage from "./ContentImage";
import ContentVideo from "./ContentVideo";
import FileNotFound from "../../../Elements/Icon/FileNotFound";
import useThrottle from "./useThrottle";

const SlideShowMobile = () => {
    const [transitionValue, setTransitionValue] = useState();
    const [activeSlideIndex, setActiveSlideIndex] = useState(1);
    const [transformValue, setTransformValue] = useState("-100vw");
    const [isManualClicking, setIsManualClicking] = useState(false);
    const [videoDuration, setVideoDuration] = useState(5000);

    const videoRefs = useRef([]);

    const slides = [
        { href: "/gallery/IknQ3jgUwt", src: "img-vid/image/slide-show/slide-show-1.png", type: "image" },
        { href: "/gallery/IknQ3jgUwt", src: "img-vid/image/slide-show/slide-show-2.png", type: "image" },
        { href: "/", src: "img-vid/video/slide-show/slide-show-2.mp4", type: "video" },
        { href: "/gallery/IknQ3jgUwt", src: "img-vid/image/slide-show/slide-show-3.png", type: "image" },
        { href: "/gallery/IknQ3jgUwt", src: "img-vid/image/slide-show/slide-show-4.png", type: "image" },
    ];

    const duplicatedSlides = [
        slides[slides.length - 1],
        ...slides,
        slides[0],
    ];

    const calculateWidth = (length) => `${length * 100}vw`;
    const ulWidth = calculateWidth(duplicatedSlides.length);

    const defaultTransform = -100;
    const referencePoint = (slides.length + 1) * 100;

    useEffect(() => {
        setActiveSlideIndex(1);
    }, []);

    useEffect(() => {
        const currentSlide = duplicatedSlides[activeSlideIndex];
        if (currentSlide.type === "video") {
            const videoElement = videoRefs.current[activeSlideIndex];
            if (videoElement) {
                setVideoDuration(videoElement.duration * 1000);
                videoElement.play();
            }
        } else {
            setVideoDuration(5000);
        }

        videoRefs.current.forEach((videoElement, index) => {
            if (index !== activeSlideIndex) {
                videoElement.pause();
                videoElement.currentTime = 0;
            }
        });
    }, [activeSlideIndex]);

    const updateSlide = (index) => {
        setTransitionValue("duration-300");
        setActiveSlideIndex(index);
        setTransformValue(`${-100 * index}vw`);
    };

    const handleNextClick = () => {
        setIsManualClicking(true);
        let newTransform = parseInt(transformValue, 10) - 100;
        let newActiveIndex = activeSlideIndex + 1;

        if (newTransform === -referencePoint) {
            setTransformValue(`${newTransform}vw`);
            setTimeout(() => {
                setTransitionValue("duration-0");
                setTransformValue(`${defaultTransform}vw`);
            }, 500);
            setActiveSlideIndex(1);
            setTransitionValue("duration-300");
        } else {
            setTransitionValue("duration-300");
            setTransformValue(`${newTransform}vw`);
            setActiveSlideIndex(newActiveIndex > slides.length ? 1 : newActiveIndex);
        }
    };

    const handlePrevClick = () => {
        setIsManualClicking(true);
        let newTransform = parseInt(transformValue, 10) + 100;
        let newActiveIndex = activeSlideIndex - 1;

        if (newTransform === 0) {
            setTransformValue(`${newTransform}vw`);
            setTimeout(() => {
                setTransitionValue("duration-0");
                setTransformValue(`${-referencePoint + 100}vw`);
            }, 500);
            setActiveSlideIndex(slides.length);
            setTransitionValue("duration-300");
        } else {
            setTransitionValue("duration-300");
            setTransformValue(`${newTransform}vw`);
            setActiveSlideIndex(newActiveIndex < 1 ? slides.length : newActiveIndex);
        }
    };

    const throttledNextClick = useThrottle(handleNextClick, 700);
    const throttledPrevClick = useThrottle(handlePrevClick, 700);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isManualClicking) {
                throttledNextClick();
            }
        }, videoDuration);

        return () => {
            clearInterval(interval);
        };
    }, [isManualClicking, throttledNextClick, videoDuration]);

    useEffect(() => {
        if (isManualClicking) {
            const timer = setTimeout(() => {
                setIsManualClicking(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isManualClicking]);

    const slideButtons = slides.map((_, index) => (
        <SlideShowBtn
            key={index}
            styleBtn="w-3vw h-3vw mr-1vw"
            isActive={activeSlideIndex === index + 1}
            onClick={() => updateSlide(index + 1)}
        />
    ));

    return (
        <div className="relative flex w-full" style={{ height: "80vw" }}>
            <div className="flex flex-col w-full h-full ms-auto z-10">
                <div className="relative flex w-screen h-3/4 ms-auto overflow-hidden before:content-[''] before:absolute before:z-10 before:bottom-0 before:left-0 before:bg-secondary before:duration-500 before:w-full before:shadow-2vwWhite xdrk-bxs1-css before:ms-min0/7vw ">
                    <div className="w-full h-full bg-black overflow-x-hidden">
                    <ul className={`flex h-full ${transitionValue}`} style={{ width: ulWidth, transform: `translateX(${transformValue})` }}>
                            {duplicatedSlides.length === 0 ? (
                                <li className="w-full h-full">
                                    <a href="/" className="relative text-white flex flex-col gap-y-1vw items-center justify-center w-full h-full hover:before:block before:content-[''] before:absolute before:top-0 before:hidden before:w-full before:h-full before:bg-transpBlack before:z-10">
                                        <FileNotFound width="5vw" height="5vw" />
                                        <span className="text-white text-2vw">No Items to Display</span>
                                    </a>
                                </li>
                            ) : (
                                duplicatedSlides.map((slide, index) => (
                                    <SlideShowContent href={slide.href} key={index}>
                                        {slide.type === "video" ? (
                                            <ContentVideo src={slide.src} ref={(el) => videoRefs.current[index] = el} />
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
                        <div className="loading-bar h-full bg-secondary ms-auto"></div>
                    </div>
                    <div className="flex mx-auto gap-x-2/5vw">
                        <Button typeBtn="button" styleBtn="absolute top-1/4 left-3% flex justify-center items-center w-10vw h-10vw rounded-full overflow-hidden bg-primary duration-300 opacity-50 hover:opacity-100" onclick={throttledPrevClick}>
                            <Arrow width="40%" height="40%"></Arrow>
                        </Button>
                        <div className="flex w-12vw mx-auto">
                            <ul className="absolute top-93vw left-7% flex justify-center gap-x-2vw my-auto">
                                {slideButtons}
                            </ul>
                        </div>
                        <Button typeBtn="button" styleBtn="absolute top-1/4 right-3% flex justify-center items-center w-10vw h-10vw rounded-full overflow-hidden bg-primary duration-300 opacity-50 hover:opacity-100" onclick={throttledNextClick}>
                            <Arrow width="40%" height="40%" styleSvg="rotate-180"></Arrow>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideShowMobile;
