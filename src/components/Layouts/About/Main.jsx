import React, { Fragment, useEffect, useRef, useState } from "react";
import ResizeObserver from 'resize-observer-polyfill';
import ContainerCenter from "../Container/ContainerCenter";
import AboutBackground from "../../Fragments/AboutFragments/AboutBackground/AboutBackground";
import WavesTransparent from "../../Elements/Icon/WavesTransparent";
import Waves from "../../Elements/Icon/Waves";
import Introduction from "../../Fragments/AboutFragments/Introduction/Introduction";
import Skills from "../../Fragments/AboutFragments/Skills/Skills";
import Hobby from "../../Fragments/AboutFragments/Hobby/Hobby";
import AboutInfoVideo from "../../Fragments/AboutFragments/AboutInfoVideo/AboutInfoVideo";

const Main = () => {
    const [isMobile, setIsMobile] = useState(false);
    const absoluteDivRef = useRef(null);
    const absoluteDivRefMobile = useRef(null);
    const [relativeDivHeight, setRelativeDivHeight] = useState('310vh');
    const [relativeDivHeightMobile, setRelativeDivHeightMobile] = useState('310vh');

    useEffect(() => {
        const updateHeight = () => {
            if (absoluteDivRef.current) {
                const height = absoluteDivRef.current.offsetHeight;
                setRelativeDivHeight(`${height}px`);
            }
        };

        const resizeObserver = new ResizeObserver(updateHeight);
        if (absoluteDivRef.current) {
            resizeObserver.observe(absoluteDivRef.current);
        }

        updateHeight();

        return () => {
            if (absoluteDivRef.current) {
                resizeObserver.unobserve(absoluteDivRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const updateHeight = () => {
            if (absoluteDivRef.current) {
                const height = absoluteDivRef.current.offsetHeight;
                setRelativeDivHeightMobile(`${height}px`);
            }
        };

        const resizeObserver = new ResizeObserver(updateHeight);
        if (absoluteDivRef.current) {
            resizeObserver.observe(absoluteDivRef.current);
        }

        updateHeight();

        return () => {
            if (absoluteDivRef.current) {
                resizeObserver.unobserve(absoluteDivRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <main className="relative flex w-full">
                    <div className="w-full h-full">
                        <div className="relative flex w-full" style={{ height: relativeDivHeight }}>
                            <AboutBackground background="about-background.png"/>
                        </div>
                        <div className="absolute w-full overflow-hidden" style={{bottom: "37.05vw"}}>
                            <WavesTransparent src="about-video.mp4"/>
                            <div className="w-full h-13vw bg-primary"></div>
                            <Waves viewbox4="310" yRect="310" styleSvg="rotate-180"/>
                        </div>
                    </div>
                    <div className="absolute flex w-full" ref={absoluteDivRef}>
                        <ContainerCenter>
                            <Introduction/>
                            <AboutInfoVideo text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus mollitia exercitationem dolorum quasi nam amet quod, eum asperiores impedit facilis, nostrum maxime temporibus error assumenda omnis non repellat sed nulla quibusdam iusto optio voluptatibus laboriosam ipsum. Eius, nulla? Fuga ratione atque sit odit corporis nesciunt odio, sequi reiciendis eveniet laudantium harum quisquam totam animi dolores praesentium eum sapiente nulla optio alias quam consectetur sint omnis cumque? Optio officia, voluptatum totam impedit aliquid cum temporibus voluptate rem provident vitae nobis modi reiciendis quaerat, veniam eum deleniti quam fuga hic porro perferendis ex nulla consequatur perspiciatis. Iusto accusamus laudantium reprehenderit nesciunt?"/>
                            <Skills/>
                            <Hobby/>
                        </ContainerCenter>
                    </div>
                </main>
            ) : (
                <main className="relative flex w-full" style={{marginBottom: "370vw"}}>
                    <div className="w-full h-full">
                        <div className="relative flex w-full" style={{ height: relativeDivHeightMobile, marginBottom: "350vw" }}>
                            <AboutBackground styleDiv="h-80vw mt-30vw" background="about-background.png"/>
                        </div>
                        <div className="absolute bottom-0 w-full overflow-hidden" style={{bottom: "0"}}>
                            <WavesTransparent src="about-video.mp4"/>
                            <div className="w-full h-80vw bg-primary"></div>
                            <Waves viewbox4="310" yRect="310" styleSvg="rotate-180"/>
                        </div>
                    </div>
                    <div className="absolute flex w-full" ref={absoluteDivRefMobile}>
                        <ContainerCenter styleContainer="w-90vw">
                            <Introduction/>
                            <AboutInfoVideo text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus mollitia exercitationem dolorum quasi nam amet quod, eum asperiores impedit facilis, nostrum maxime temporibus error assumenda omnis non repellat sed nulla quibusdam iusto optio voluptatibus laboriosam ipsum. Eius, nulla? Fuga ratione atque sit odit corporis nesciunt odio, sequi reiciendis eveniet laudantium harum quisquam totam animi dolores praesentium eum sapiente nulla optio alias quam consectetur sint omnis cumque? Optio officia, voluptatum totam impedit aliquid cum temporibus voluptate rem provident vitae nobis modi reiciendis quaerat, veniam eum deleniti quam fuga hic porro perferendis ex nulla consequatur perspiciatis. Iusto accusamus laudantium reprehenderit nesciunt?"/>
                            <Skills/>
                            <Hobby/>
                        </ContainerCenter>
                    </div>
                </main>
            )}
        
        </Fragment>
    )
}

export default Main;
