import ContainerCenter from "../Container/ContainerCenter";
import MenuBar from "../../Fragments/HomeFragments/MenuBar/MenuBar";
import DarkModeBtn from "../../Elements/DarkModeButton/DarkModeBtn";
import HamburgerBtn from "../../Elements/HamburgerButton/HamburgerBtn";
import HambMenu from "../../Elements/HamburgerButton/HambMenu";
import HambMenuMobile from "../../Elements/HamburgerButton/HambMenuMobile";
import { Fragment, useState, useEffect } from "react";

const Header = (props) => {
    const {styleHeader} = props;
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => setIsActive(prevState => !prevState);
    
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <header className={`relative w-full h-4vw bg-primary ${styleHeader}`}>
                    <ContainerCenter styleContainer="h-full">
                        <div className="w-full h-full flex justify-between">
                            <div className="logo-web flex h-full my-auto">
                                <a href="/" className="my-auto text-2vw alex-font text-white">Sendy Kurniawan</a>
                            </div>
                            <div className="flex gap-x-2vw">
                                <div className="menu-bar flex">
                                    <ul className="flex my-auto">
                                        <MenuBar href="about" styleAnchor="flex text-0/9vw font-light text-white duration-300 hover:opacity-50" text="About Me" />
                                    </ul>
                                </div>
                                <div className="flex">
                                    <DarkModeBtn/>
                                </div>
                            </div>
                            <div className="flex absolute left-0 top-1/2 translate-y-1/2min ms-1/5vw">
                                <HamburgerBtn toggleHamb={toggleMenu}/>
                            </div>
                            {isActive && <HambMenu isActive={isActive} toggleHamb={toggleMenu}/>}
                        </div>
                    </ContainerCenter>
                </header>
            ) :(
                <header className={`relative w-screen h-20vw bg-primary`}>
                    <ContainerCenter styleContainer="h-full w-90vw">
                        <div className="w-full h-full flex justify-between">
                            <div className="logo-web flex h-full my-auto">
                                <a href="/" className="my-auto text-8vw alex-font text-white">Sendy Kurniawan</a>
                            </div>
                            <div className="flex">
                                <HamburgerBtn toggleHamb={toggleMenu} styleHamb="!w-12vw !h-12vw"/>
                            </div>
                            {isActive && <HambMenuMobile isActive={isActive} toggleHamb={toggleMenu}/>}
                        </div>
                    </ContainerCenter>
                </header>
            )}
            
        </Fragment>
    )
}

export default Header;