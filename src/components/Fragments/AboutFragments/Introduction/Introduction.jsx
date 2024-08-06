import { useState, useEffect, Fragment } from "react";
import Profile from "../../../Layouts/Profile/Profile";
import AboutVideo from "./AboutVideo";
import Door from "../../../Elements/Icon/Door";

const Introduction = (props) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <div className="flex flex-col w-full mt-7vw">
                    <div className="flex w-full justify-center gap-x-1vw">
                        <span className="text-grey text-1/3vw mt-0/5vw xdrk-c1-css">Positive thoughts yield positive actions.</span>
                        <div className="text-10vw leading-0 mt-4vw cinzel-Decorative-font" style={{ textShadow: '0.1vw 0.1vw 0 #fff, -0.1vw -0.1vw 0 #fff, 0.1vw -0.1vw 0 #fff, -0.1vw 0.1vw 0 #fff' }}>About</div>
                    </div>
                    <div className="flex w-full justify-between mt-15vw">
                        <div className="flex flex-col w-36vw">
                            <span className="px-2vw py-2vw text-white text-1/3vw bg-secondary rounded-b-1vw baskervville-font mt-20vw">
                                My name is Sendy Kurniawan, and I'm a programmer, photographer, and drummer – I also enjoy creating graphic designs such as posters, banners, and more! The image above is one of the designs I created myself. I think the image is still not very good to look at, hehe, sorry.
                            </span>
                            <div className="relative w-full mt-10vw">
                                <AboutVideo src1="" src2=""/>
                            </div>
                        </div>
                        <div className="flex flex-col w-36vw">
                            <Profile/>
                            <div className="flex flex-col gap-y-1vw mt-20vw">
                                <span className="px-2vw py-2vw text-grey text-1/3vw xdrk-c1-css">
                                    You can also visit my gallery, where there are many interesting graphic designs and photos to see. To view them, you can click the button below.
                                </span>
                                <a href="/profile/gallery" className="relative flex justify-center items-center w-12vw h-5vw border-t-0/1vw border-b-0/1vw border-secondary hover:before:ml-7vw hover:after:ml-15vw before:content-[''] before:absolute before:left-0 before:bottom-1% before:w-12vw before:h-0/15vw before:duration-300 before:mb-0/5vw before:ml-2vw before:bg-secondary after:content-[''] after:absolute after:left-0 after:top-1% after:w-5vw after:h-5vw after:duration-300 after:mt-2vw after:ml-10vw after:border-t-0/2vw after:border-r-0/2vw after:border-secondary after:rotate-45">
                                    <Door width="70%" height="70%"/>
                                </a>
                            </div>
                            <div className="flex flex-col gap-y-1vw mt-4vw">
                                <span className="px-2vw py-2vw text-grey text-1/3vw xdrk-c1-css">
                                    And the video clip next to this is one of the most intriguing videos in my opinion. You can also watch other videos in full screen by clicking the button below.
                                </span>
                                <a href="/profile/videos" className="relative flex justify-center items-center w-12vw h-5vw ms-auto border-t-0/1vw border-b-0/1vw border-secondary hover:before:mr-7vw hover:after:mr-15vw before:content-[''] before:absolute before:right-0 before:bottom-1% before:w-12vw before:h-0/15vw before:duration-300 before:mb-0/5vw before:mr-2vw before:bg-secondary after:content-[''] after:absolute after:right-0 after:top-1% after:w-5vw after:h-5vw after:duration-300 after:mt-2vw after:mr-10vw after:border-b-0/2vw after:border-l-0/2vw after:border-secondary after:rotate-45">
                                    <Door width="70%" height="70%"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col w-full mt-15vw">
                    <div className="flex flex-col w-full justify-center gap-y-2vw" style={{marginTop: "-2vw"}}>
                        <span className="text-grey text-3/5vw mt-0/5vw xdrk-c1-css">Positive thoughts yield positive actions.</span>
                        <div className="text-20vw leading-0 mt-8vw ms-auto cinzel-Decorative-font" style={{ textShadow: '0.1vw 0.1vw 0 #fff, -0.1vw -0.1vw 0 #fff, 0.1vw -0.1vw 0 #fff, -0.1vw 0.1vw 0 #fff' }}>About</div>
                    </div>
                    <div className="flex flex-col w-full justify-center mt-15vw">
                        <Profile styleProfile="mx-auto !w-50vw !h-50vw before:!w-50vw before:!h-50vw" styleProfile2="!w-45vw !h-45vw" profileBtn="!w-10vw !h-10vw"/>
                        <span className="px-4vw py-4vw text-white text-4vw bg-transpSecondary rounded-b-3vw baskervville-font mt-5vw">
                            My name is Sendy Kurniawan, and I'm a programmer, photographer, and drummer – I also enjoy creating graphic designs such as posters, banners, and more! The image above is one of the designs I created myself. I think the image is still not very good to look at, hehe, sorry.
                        </span>
                        <div className="flex flex-col gap-y-2vw mt-20vw">
                            <span className="px-4vw py-4vw text-grey text-4vw xdrk-c1-css">
                                You can also visit my gallery, where there are many interesting graphic designs and photos to see. To view them, you can click the button below.
                            </span>
                            <a href="/profile/gallery" className="relative flex justify-center items-center w-40vw h-15vw border-t-0/3vw border-b-0/3vw border-secondary hover:before:ml-22vw hover:after:ml-50vw before:content-[''] before:absolute before:left-0 before:bottom-1% before:w-40vw before:h-0/5vw before:duration-300 before:mb-1vw before:ml-5vw before:bg-secondary after:content-[''] after:absolute after:left-0 after:top-5vw after:w-15vw after:h-15vw after:duration-300 after:mt-1vw after:ml-35vw after:border-t-0/5vw after:border-r-0/5vw after:border-secondary after:rotate-45">
                                <Door width="70%" height="70%"/>
                            </a>
                        </div>
                        <div className="relative w-full mt-10vw">
                            <AboutVideo src1="about-video.mp4" src2="about-video.mp4" styleWidthVid1="57.5vw" styleHeightVid1="29vw" styleMarginTopVid1="10.55vw" styleMarginLeftVid1="16.3vw" styleWidthVid2="40vw" styleHeightVid2="20.2vw" styleMarginTopVid2="49.6vw" styleMarginLeftVid2="25vw"/>
                        </div>
                        <div className="flex flex-col gap-y-2vw mt-0 z-10">
                            <span className="px-4vw py-4vw text-grey text-4vw xdrk-c1-css">
                                And the video clip next to this is one of the most intriguing videos in my opinion. You can also watch other videos in full screen by clicking the button below.
                            </span>
                            <a href="/profile/videos" className="relative flex justify-center items-center w-40vw h-15vw ms-auto border-t-0/3vw border-b-0/3vw border-secondary hover:before:mr-22vw hover:after:mr-50vw before:content-[''] before:absolute before:right-0 before:bottom-1% before:w-40vw before:h-0/5vw before:duration-300 before:mb-1vw before:mr-5vw before:bg-secondary after:content-[''] after:absolute after:right-0 after:top-5vw after:w-15vw after:h-15vw after:duration-300 after:mt-1vw after:mr-35vw after:border-b-0/5vw after:border-l-0/5vw after:border-secondary after:rotate-45">
                                <Door width="70%" height="70%"/>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default Introduction;