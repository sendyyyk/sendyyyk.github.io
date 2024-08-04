import React, { useEffect, useState } from 'react';
import ListHobby from './ListHobby.jsx';
import Button from "../../../Elements/Button/Button";
import Close from "../../../Elements/Icon/Close";
import Arrow from "../../../Elements/Icon/Arrow";
import FileNotFound from '../../../Elements/Icon/FileNotFound.jsx';

const DetailHobby = ({ detail, nameHobby, closeDetail }) => {
    const { desktop, mobile } = detail;
    const [desktopTranslateX, setDesktopTranslateX] = useState(0);
    const [disableDesktopPrev, setDisableDesktopPrev] = useState(true);
    const [disableDesktopNext, setDisableDesktopNext] = useState(false);
    const [mobileTranslateX, setMobileTranslateX] = useState(0);
    const [disableMobilePrev, setDisableMobilePrev] = useState(true);
    const [disableMobileNext, setDisableMobileNext] = useState(false);

    const calculateWidth = (length) => {
        const additionalWidth = length > 4 ? (length - 4) * 15 : 0;
        return `calc(100% + ${additionalWidth}vw)`;
    };

    const desktopWidth = calculateWidth(desktop[0].src.length);
    const mobileWidth = calculateWidth(mobile[0].src.length);

    const maxDesktopTranslateX = -((desktop[0].src.length - 4) * 15);
    const minDesktopTranslateX = 0;

    const maxMobileTranslateX = -((mobile[0].src.length - 4) * 15);
    const minMobileTranslateX = 0;

    const handleDesktopPrevClick = () => {
        setDesktopTranslateX(prev => Math.min(prev + 15, minDesktopTranslateX));
    };

    const handleDesktopNextClick = () => {
        setDesktopTranslateX(prev => Math.max(prev - 15, maxDesktopTranslateX));
    };

    useEffect(() => {
        setDisableDesktopPrev(desktopTranslateX >= minDesktopTranslateX);
        setDisableDesktopNext(desktopTranslateX <= maxDesktopTranslateX);
    }, [desktopTranslateX, minDesktopTranslateX, maxDesktopTranslateX]);

    const handleMobilePrevClick = () => {
        setMobileTranslateX(prev => Math.min(prev + 15, minMobileTranslateX));
    };

    const handleMobileNextClick = () => {
        setMobileTranslateX(prev => Math.max(prev - 15, maxMobileTranslateX));
    };

    useEffect(() => {
        setDisableMobilePrev(mobileTranslateX >= minMobileTranslateX);
        setDisableMobileNext(mobileTranslateX <= maxMobileTranslateX);
    }, [mobileTranslateX, minMobileTranslateX, maxMobileTranslateX]);

    const desktopTransformStyle = { transform: `translateX(${desktopTranslateX}vw)` };
    const mobileTransformStyle = { transform: `translateX(${mobileTranslateX}vw)` };

    return (
        <div className="fixed top-0 left-0 flex py-2vw w-full h-full bg-transpBlack z-20 container-def backdrop-blur-1vw overflow-y-auto">
            <div className="absolute top-0 flex justify-between items-center w-full">
                <span className="flex text-1/3vw ml-1vw border-b-0/1vw border-red cinzel-Decorative-font text-white">{nameHobby} || Hobby</span>
                <Button type="button" styleBtn="mt-1vw mr-1vw w-3vw h-3vw" onclick={closeDetail}>
                    <Close width="100%" height="100%" fill="fill-white" />
                </Button>
            </div>
            <div className="flex flex-col w-60vw h-40vw mx-auto my-auto" >
                <div className="relative flex flex-col justify-between w-full h-20vw">
                    <div className="flex w-full h-4vw">
                        <span className="absolute top-1/2 left-0 text-1vw my-auto font-semibold text-black bg-white px-2vw py-1vw rounded-1vw" style={{ marginLeft: "-17vw" }}>Desktop :</span>
                    </div>
                    <div className="relative flex w-full h-15vw">
                        <Button styleBtn={`absolute top-1/2 left-0 translate-y-1/2min ml-min3vw flex w-3vw h-3vw rounded-full bg-secondary duration-300 shadow-0/4vwBlack hover:opacity-50 ${disableDesktopPrev ? 'opacity-50 cursor-default' : ''}`} onclick={handleDesktopPrevClick} disabled={disableDesktopPrev}>
                            <Arrow styleSvg="my-auto mx-auto" width="45%" height="45%" />
                        </Button>
                        <div className="w-full h-full overflow-x-hidden">
                            <ul className="desktop flex h-full duration-300" style={{ width: desktopWidth, ...desktopTransformStyle }}>
                                {desktop[0].src.length === 0 ? (
                                    <li className="flex flex-col w-15vw h-full">
                                        <div className='flex flex-col justify-center items-center gap-y-0/5vw w-4/5 h-4/5 mx-auto my-auto rounded-1vw bg-primary'>
                                            <FileNotFound width="3vw" height="3vw" />
                                            <span className='text-1vw font-semibold text-white'>Desktop not found</span>
                                        </div>
                                    </li>
                                ) : (
                                    desktop[0].src.map((src, index) => (
                                        <ListHobby key={index} src={src} name={desktop[1].name[index]} cat="desktop" nameHobby={nameHobby} />
                                    ))
                                )}
                            </ul>
                        </div>
                        <Button styleBtn={`absolute top-1/2 right-0 translate-y-1/2min mr-min3vw flex w-3vw h-3vw rounded-full bg-secondary shadow-0/4vwBlack duration-300 hover:opacity-50 ${disableDesktopNext ? 'opacity-50 cursor-default' : ''}`} onclick={handleDesktopNextClick} disabled={disableDesktopNext}>
                            <Arrow styleSvg="my-auto mx-auto rotate-180" width="45%" height="45%" />
                        </Button>
                    </div>
                </div>
                <div className="relative flex flex-col justify-between w-full h-20vw">
                    <div className="flex w-full h-4vw">
                        <span className="absolute top-1/2 left-0 text-1vw my-auto font-semibold text-black bg-white px-2vw py-1vw rounded-1vw" style={{ marginLeft: "-17vw" }}>Mobile :</span>
                    </div>
                    <div className="relative flex w-full h-15vw">
                        <Button styleBtn={`absolute top-1/2 left-0 translate-y-1/2min ml-min3vw flex w-3vw h-3vw rounded-full bg-secondary duration-300 shadow-0/4vwBlack hover:opacity-50 ${disableMobilePrev ? 'opacity-50 cursor-default' : ''}`} onclick={handleMobilePrevClick} disabled={disableMobilePrev}>
                            <Arrow styleSvg="my-auto mx-auto" width="45%" height="45%" />
                        </Button>
                        <div className="w-full h-full overflow-x-hidden">
                            <ul className="mobile flex h-full duration-300" style={{ width: mobileWidth, ...mobileTransformStyle }}>
                                {mobile[0].src.length === 0 ? (
                                    <li className="flex flex-col w-15vw h-full">
                                        <div className='flex flex-col justify-center items-center gap-y-0/5vw w-4/5 h-4/5 mx-auto my-auto rounded-1vw bg-primary'>
                                            <FileNotFound width="3vw" height="3vw" />
                                            <span className='text-1vw font-semibold text-white'>Mobile not found</span>
                                        </div>
                                    </li>
                                ) : (
                                    mobile[0].src.map((src, index) => (
                                        <ListHobby key={index} src={src} name={mobile[1].name[index]} cat="mobile" nameHobby={nameHobby} />
                                    ))
                                )}
                            </ul>
                        </div>
                        <Button styleBtn={`absolute top-1/2 right-0 translate-y-1/2min mr-min3vw flex w-3vw h-3vw rounded-full bg-secondary shadow-0/4vwBlack duration-300 hover:opacity-50 ${disableMobileNext ? 'opacity-50 cursor-default' : ''}`} onclick={handleMobileNextClick} disabled={disableMobileNext}>
                            <Arrow styleSvg="my-auto mx-auto rotate-180" width="45%" height="45%" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailHobby;
