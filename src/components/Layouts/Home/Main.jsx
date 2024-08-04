import React, { Fragment, useEffect, useRef, useState } from "react";
import ContainerCenter from "../Container/ContainerCenter";
import Welcome from "../../Fragments/HomeFragments/Welcome/welcome";
import SlideShow from "../../Fragments/HomeFragments/SlideShow/SlideShow";
import Video from "../../Fragments/HomeFragments/Video/Video";
import Gallery from "../../Fragments/HomeFragments/Gallery/Gallery";
import Article from "../../Fragments/HomeFragments/Article/Article";
import Quotes from "../../Fragments/HomeFragments/Quotes/Quotes";
import Waves from "../../Elements/Icon/Waves";
import Footer from "../Footer/Footer";
import SlideShowMobile from "../../Fragments/HomeFragments/SlideShow/SlideShowMobile";
import WelcomeMobile from "../../Fragments/HomeFragments/Welcome/welcomeMobile";
import VideoMobile from "../../Fragments/HomeFragments/Video/VideoMobile";
import GalleryMobile from "../../Fragments/HomeFragments/Gallery/GalleryMobile";
import ArticleMobile from "../../Fragments/HomeFragments/Article/ArticleMobile";
import FooterMobile from "../Footer/FooterMobile";

const Main = () => {
    const absoluteDivRef = useRef(null);
    const absoluteDivRefMobile = useRef(null);
    const [relativeDivHeight, setRelativeDivHeight] = useState('310vh');
    const [relativeDivHeightMobile, setRelativeDivHeightMobile] = useState('310vh');
    const [isMobile, setIsMobile] = useState(false);
    const [childrenRendered, setChildrenRendered] = useState(false);

    const updateHeight = () => {
        if (absoluteDivRef.current) {
            const height = absoluteDivRef.current.offsetHeight;
            setRelativeDivHeight(`${height}px`);
        }
    };

    useEffect(() => {
        if (childrenRendered) {
            updateHeight();
            window.addEventListener('resize', updateHeight);
            return () => {
                window.removeEventListener('resize', updateHeight);
            };
        }
    }, [childrenRendered]);

    const updateHeightMobile = () => {
        if (absoluteDivRefMobile.current) {
            const height = absoluteDivRefMobile.current.clientHeight;
            setRelativeDivHeightMobile(`${height}px`);
        }
    };

    useEffect(() => {
        if (childrenRendered) {
            updateHeightMobile();
            window.addEventListener('resize', updateHeightMobile);
            return () => {
                window.removeEventListener('resize', updateHeightMobile);
            };
        }
    }, [childrenRendered]);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
        setChildrenRendered(true);
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <main className="relative flex w-full">
                    <div className="w-full h-full">
                        <div className="relative flex w-full" style={{ height: relativeDivHeight }}>
                            <SlideShow isMobile={false}/>
                        </div>
                        <div className="absolute bottom-0 w-full h-125vw">
                            <Waves viewbox4="1350" yRect="310" heightRect="1300"/>
                            <div className="absolute bottom-0 flex w-full h-28vw" style={{boxShadow: "inset 0 0 3vw 1vw black",backgroundImage: `url(img-vid/image/quotes/quotes-1.png)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                                <div className="w-full h-12vw mt-auto backdrop-blur-0/5vw"></div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex w-full" ref={absoluteDivRef}>
                        <ContainerCenter>
                            <Welcome />
                            <Video />
                            <Gallery /> 
                            <Article />
                            <Quotes/>
                            <Footer></Footer>
                        </ContainerCenter>
                    </div>
                </main>
            ) : (
                <main className="relative flex w-screen">
                    <div className="w-full h-full">
                        <div className="relative flex w-full" style={{ height: relativeDivHeightMobile }}>
                            <SlideShowMobile isMobile={true}/>
                        </div>
                        <div className="absolute bottom-0 w-full h-125vw" style={{height: "400vw"}}>
                            <Waves viewbox4="2800" yRect="310" heightRect="7000"/>
                            <div className="absolute bottom-0 flex w-full h-70vw" style={{boxShadow: "inset 0 0 3vw 1vw black",backgroundImage: `url(img-vid/image/quotes/quotes-1.png)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                                <div className="w-full h-34vw mt-auto backdrop-blur-0/5vw"></div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex w-full" ref={absoluteDivRefMobile}>
                        <ContainerCenter styleContainer="w-90vw">
                            <WelcomeMobile/>
                            <VideoMobile/>
                            <GalleryMobile/> 
                            <ArticleMobile/>
                            <Quotes divQuotes="h-25vw mb-7vw" span1Quotes="text-5vw" span2Quotes="text-3vw px-5vw" span3Quotes="text-3vw"/>
                            <FooterMobile/>
                        </ContainerCenter>
                    </div>
                </main>
            )}
        </Fragment>
    )
}

export default Main;
