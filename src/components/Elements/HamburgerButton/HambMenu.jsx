import React, { useState, useEffect } from 'react';
import Home from '../Icon/Home';
import About from '../Icon/About';
import Video from '../Icon/Video';
import Galery from '../Icon/Galery';
import Article from '../Icon/Article';
import HambListMenu from './HambListMenu';
import HamburgerBtn from './HamburgerBtn';

const HambMenu = ({ isActive, toggleHamb }) => {
    const [delayedActive, setDelayedActive] = useState(false);

    useEffect(() => {
        let timer;
        if (isActive) {
            timer = setTimeout(() => {
                setDelayedActive(true);
            }, 300);
        } else {
            setDelayedActive(false);
        }
        return () => clearTimeout(timer);
    }, [isActive]);

    return (
        <div className={`fixed left-0 w-screen h-screen duration-500 bg-transpBlack z-20 ${isActive ? 'active' : ''}`} onClick={toggleHamb}>
            <div
                className={`relative flex flex-col w-15vw h-full bg-primary duration-500 before:content-[''] before:block before:absolute before:right-0 before:h-full before:w-0/1vw before:bg-white ${delayedActive ? 'translate-x-0' : 'translate-x-100min'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='absolute flex justify-center items-center w-full h-4vw'>
                    <span className='absolute left-0 mx-1/5vw'>
                        <HamburgerBtn toggleHamb={toggleHamb} />
                    </span>
                    <span className='cursor-default text-white text-1/3vw'>Menu</span>
                </div>
                <div className='menu-bar-scroll w-full mt-4vw mb-4vw px-1vw overflow-y-auto'>
                    <ul className='flex flex-col w-full my-auto mx-auto py-1vw'>
                        <HambListMenu href="" text="Home">
                            <Home styleSvg="my-auto mx-auto" fill="fill-white" height="70%" width="70%" />
                        </HambListMenu>
                        <HambListMenu href="about" text="About">
                            <About styleSvg="my-auto mx-auto" height="70%" width="70%" />
                        </HambListMenu>
                        <HambListMenu href="profile/videos" text="Videos">
                            <Video styleSvg="my-auto mx-auto" height="70%" width="70%" />
                        </HambListMenu>
                        <HambListMenu href="profile/gallery" text="Gallery">
                            <Galery styleSvg="my-auto mx-auto" height="70%" width="70%" />
                        </HambListMenu>
                        <HambListMenu href="profile/article" text="Article">
                            <Article styleSvg="my-auto mx-auto" height="60%" width="60%" />
                        </HambListMenu>
                    </ul>
                </div>
                <div className='absolute flex bottom-0 w-full h-4vw'>
                    <a href="/" className='flex mx-auto my-auto'>
                        <span className='alex-font text-1/3vw text-white'>Sendy Kurniawan</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HambMenu;
