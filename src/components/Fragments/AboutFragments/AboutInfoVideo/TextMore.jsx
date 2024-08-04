import { Fragment, useEffect, useState } from "react";
import Button from "../../../Elements/Button/Button";
import Close from "../../../Elements/Icon/Close";

const TextMore = (props) => {
    const { text, onClose } = props;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    useEffect(() => {
        // Add class to body to prevent scrolling
        document.body.classList.add('overflow-hidden');

        // Clean up by removing the class when component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <div className='fixed top-0 left-0 flex justify-center items-center w-full h-full py-2vw z-20 container-def backdrop-blur-1vw overflow-y-auto bg-transpBlack'>
                    <Button type="button" styleBtn="absolute right-0 top-0 mt-1vw mr-1vw w-3vw h-3vw" onclick={onClose}>
                        <Close width="100%" height="100%" fill="fill-white" />
                    </Button>
                    <div className="flex w-60vw h-35vw bg-primary mx-auto my-auto px-2vw py-2vw rounded-1vw">
                        <div className="flex w-full h-full pr-0/5vw overflow-y-auto menu-bar-scroll">
                            <span className="flex text-1/5vw text-white font-semibold">
                                {text}
                            </span>
                        </div>
                    </div>
                </div>
            ) :(
                <div className='fixed top-0 left-0 flex justify-center items-center w-full h-full py-2vw z-20 container-def backdrop-blur-1vw overflow-y-auto bg-transpBlack'>
                    <Button type="button" styleBtn="absolute right-3% top-3% mt-1vw mr-1vw w-10vw h-10vw" onclick={onClose}>
                        <Close width="100%" height="100%" fill="fill-white" />
                    </Button>
                    <div className="flex w-90vw h-125vw bg-transpPrimary mx-auto my-auto px-4vw py-4vw rounded-3vw">
                        <div className="flex w-full h-full pr-5vw overflow-y-auto menu-bar-scroll-mobile">
                            <span className="flex text-5vw text-white font-semibold">
                                {text}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default TextMore;
