import { Fragment, useState, useEffect } from "react";
import TextMore from "./TextMore";

const AboutInfoVideo = (props) => {
    const { text = "Blank" } = props;
    const [isMobile, setIsMobile] = useState(false);

    const firstLetter = text.charAt(0);
    const updatedText = text.slice(1);

    const [showTextMore, setShowTextMore] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setShowTextMore(true);
    };

    const handleClose = () => {
        setShowTextMore(false);
    };

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <div className="relative flex flex-col w-full h-11vw mt-45vw before:content-[''] before:absolute before:top-0 before:block before:w-8vw before:h-3vw before:mt-min2vw before:border-l-0/2vw before:border-b-0/2vw before:border-black">
                    <div className="absolute top-0 left-0 flex w-2vw h-2vw rounded-full bg-black ml-7vw">
                        <span className="mx-auto my-auto text-1/5vw font-semibold text-secondary">
                            {firstLetter}
                        </span>
                    </div>
                    <span className="w-full text-1/5vw text-ellipsis indent-9/3vw text-white line-clamp-5 overflow-hidden">
                        {updatedText}
                    </span>
                    <a href="/" className="absolute bottom-0 right-0 flex px-5vw py-1vw text-1vw font-semibold text-white bg-secondary hover:bg-grey" style={{ bottom: "-5vw" }} onClick={handleClick}>
                        Read More...
                    </a>
                </div>
            ) : (
                <div className="relative flex flex-col w-full before:content-[''] before:absolute before:top-0 before:block before:w-20vw before:h-9/2vw before:mt-min8/8vw before:border-l-1vw before:border-b-1vw before:border-secondary" style={{ marginTop: "112vw" }}>
                    <div className="absolute top-0 left-0 flex w-12vw h-12vw rounded-full bg-secondary ml-20vw" style={{ marginTop: "-6vw" }}>
                        <span className="mx-auto my-auto text-7vw font-bold text-white">
                            {firstLetter}
                        </span>
                    </div>
                    <span className="w-full text-4vw text-ellipsis indent-25vw text-white line-clamp-9 overflow-hidden">
                        {updatedText}
                    </span>
                    <a href="/" className="absolute bottom-0 right-0 flex px-12vw py-3vw text-3vw font-semibold text-white bg-secondary hover:bg-grey" style={{ bottom: "-15vw" }} onClick={handleClick}>
                        Read More...
                    </a>
                </div>
            )}
            {showTextMore && <TextMore text={`${firstLetter}${updatedText}`} onClose={handleClose} />}
        </Fragment>
    );
};

export default AboutInfoVideo;
