import React, { useState, useEffect } from 'react';
import Home from '../Icon/Home';
import About from '../Icon/About';
import Video from '../Icon/Video';
import Galery from '../Icon/Galery';
import Article from '../Icon/Article';
import HambListMenu from './HambListMenu';
import HamburgerBtn from './HamburgerBtn';
import DarkModeBtn from '../DarkModeButton/DarkModeBtn';

const HambMenuMobile = ({ isActive, toggleHamb }) => {
    const [delayedActive, setDelayedActive] = useState(false);
    const [isLandscape, setIsLandscape] = useState(window.matchMedia("(orientation: landscape)").matches);

    useEffect(() => {
        let timer;
        if (isActive) {
            timer = setTimeout(() => {
                setDelayedActive(true);
                document.body.classList.add('overflow-hidden');
            }, 300);
        } else {
            setDelayedActive(false);
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            clearTimeout(timer);
            document.body.classList.remove('overflow-hidden');
        };
    }, [isActive]);

    useEffect(() => {
        const handleOrientationChange = () => {
            setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
        };

        window.addEventListener('resize', handleOrientationChange);

        return () => {
            window.removeEventListener('resize', handleOrientationChange);
        };
    }, []);

    return (
        <div className={`fixed top-0 left-0 right-0 bottom-0 w-full h-full duration-500 overflow-y-auto bg-transpBlack z-20 ${isActive ? 'active' : ''}`} onClick={toggleHamb}>
            <div
                className={`flex flex-col w-60vw ${isLandscape ? '' : 'h-full'} ms-auto bg-primary duration-500 shadow-3vwSecondary ${delayedActive ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='absolute flex justify-start px-5vw items-center w-full h-20vw !border-b-0/2vw'>
                    <span className='cursor-default text-white text-5vw font-semibold'>Menu</span>
                    <span className='absolute right-0 mx-5vw'>
                        <HamburgerBtn toggleHamb={toggleHamb} styleHamb="!w-12vw !h-12vw" />
                    </span>
                </div>
                <div className='menu-bar-scroll-mobile w-full mt-20vw mb-30vw overflow-y-auto'>
                    <ul className='flex flex-col w-full my-auto mx-auto'>
                        <HambListMenu href="" text="Home" styleLi="!my-0" styleAnchor="!py-5vw !rounded-none !shadow-none !gap-x-1vw !border-t-0/2vw !border-b-0/1vw !border-transpWhite" styleSpan2="text-3vw" styleSpan1="w-7vw h-7vw">
                            <Home styleSvg="my-auto mx-auto" fill="fill-white" height="70%" width="70%" />
                        </HambListMenu>
                        <HambListMenu href="about" text="About" styleLi="!my-0" styleAnchor="!py-5vw !rounded-none !shadow-none !gap-x-1vw !border-t-0/2vw !border-b-0/1vw !border-transpWhite" styleSpan2="text-3vw" styleSpan1="w-7vw h-7vw">
                            <About styleSvg="my-auto mx-auto" height="70%" width="70%" />
                        </HambListMenu>
                        <HambListMenu href="profile/videos" text="Videos" styleLi="!my-0" styleAnchor="!py-5vw !rounded-none !shadow-none !gap-x-1vw !border-t-0/2vw !border-b-0/1vw !border-transpWhite" styleSpan2="text-3vw" styleSpan1="w-7vw h-7vw">
                            <Video styleSvg="my-auto mx-auto" height="70%" width="70%" />
                        </HambListMenu>
                        <HambListMenu href="profile/gallery" text="Gallery" styleLi="!my-0" styleAnchor="!py-5vw !rounded-none !shadow-none !gap-x-1vw !border-t-0/2vw !border-b-0/1vw !border-transpWhite" styleSpan2="text-3vw" styleSpan1="w-7vw h-7vw">
                            <Galery styleSvg="my-auto mx-auto" height="70%" width="70%" />
                        </HambListMenu>
                        <HambListMenu href="profile/article" text="Article" styleLi="!my-0" styleAnchor="!py-5vw !rounded-none !shadow-none !gap-x-1vw !border-t-0/1vw !border-b-0/2vw !border-transpWhite" styleSpan2="text-3vw" styleSpan1="w-7vw h-7vw">
                            <Article styleSvg="my-auto mx-auto" height="60%" width="60%" />
                        </HambListMenu>
                    </ul>
                </div>
                <div className='absolute flex flex-col bottom-0 w-full h-30vw'>
                    <DarkModeBtn styleDarkMode="!w-full !h-15vw py-2vw !rounded-none !border-t-0/2vw !border-b-0/4vw !border-transpWhite xdrk-bc1-css hover:!opacity-100" fill="#008080" />
                    <a href="/" className='flex w-full !h-15vw bg-secondary'>
                        <span className='alex-font text-6vw text-white mx-auto my-auto'>Sendy Kurniawan</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HambMenuMobile;
