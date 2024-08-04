import React, { useEffect, useState } from 'react';
import ListSkills from "./ListSkills.jsx";
import Button from "../../../Elements/Button/Button";
import Close from "../../../Elements/Icon/Close";
import Arrow from "../../../Elements/Icon/Arrow";
import FileNotFound from '../../../Elements/Icon/FileNotFound.jsx';

const DetailSkills = ({ detail, nameSkills, closeDetail }) => {
    const { hardware, software } = detail;
    const [hardwareTranslateX, setHardwareTranslateX] = useState(0);
    const [disableHardwarePrev, setDisableHardwarePrev] = useState(true);
    const [disableHardwareNext, setDisableHardwareNext] = useState(false);
    const [softwareTranslateX, setSoftwareTranslateX] = useState(0);
    const [disableSoftwarePrev, setDisableSoftwarePrev] = useState(true);
    const [disableSoftwareNext, setDisableSoftwareNext] = useState(false);

    const calculateWidth = (length) => {
        const additionalWidth = length > 4 ? (length - 4) * 15 : 0;
        return `calc(100% + ${additionalWidth}vw)`;
    };

    const hardwareWidth = calculateWidth(hardware[0].src.length);
    const softwareWidth = calculateWidth(software[0].src.length);

    const maxHardwareTranslateX = -((hardware[0].src.length - 4) * 15);
    const minHardwareTranslateX = 0;

    const maxSoftwareTranslateX = -((software[0].src.length - 4) * 15);
    const minSoftwareTranslateX = 0;

    const handleHardwarePrevClick = () => {
        setHardwareTranslateX(prev => Math.min(prev + 15, minHardwareTranslateX));
    };

    const handleHardwareNextClick = () => {
        setHardwareTranslateX(prev => Math.max(prev - 15, maxHardwareTranslateX));
    };

    useEffect(() => {
        setDisableHardwarePrev(hardwareTranslateX >= minHardwareTranslateX);
        setDisableHardwareNext(hardwareTranslateX <= maxHardwareTranslateX);
    }, [hardwareTranslateX, minHardwareTranslateX, maxHardwareTranslateX]);

    const handleSoftwarePrevClick = () => {
        setSoftwareTranslateX(prev => Math.min(prev + 15, minSoftwareTranslateX));
    };

    const handleSoftwareNextClick = () => {
        setSoftwareTranslateX(prev => Math.max(prev - 15, maxSoftwareTranslateX));
    };

    useEffect(() => {
        setDisableSoftwarePrev(softwareTranslateX >= minSoftwareTranslateX);
        setDisableSoftwareNext(softwareTranslateX <= maxSoftwareTranslateX);
    }, [softwareTranslateX, minSoftwareTranslateX, maxSoftwareTranslateX]);

    const hardwareTransformStyle = { transform: `translateX(${hardwareTranslateX}vw)` };
    const softwareTransformStyle = { transform: `translateX(${softwareTranslateX}vw)` };

    return (
        <div className="fixed top-0 left-0 flex py-2vw w-full h-full bg-transpBlack z-20 container-def backdrop-blur-1vw overflow-y-auto">
            <div className="absolute top-0 flex justify-between items-center w-full">
                <span className="flex text-1/3vw ml-1vw border-b-0/1vw border-red cinzel-Decorative-font text-white">{nameSkills} || Skills</span>
                <Button type="button" styleBtn="mt-1vw mr-1vw w-3vw h-3vw" onclick={closeDetail}>
                    <Close width="100%" height="100%" fill="fill-white" />
                </Button>
            </div>
            <div className="flex flex-col w-60vw h-40vw mx-auto my-auto" >
                <div className="relative flex flex-col justify-between w-full h-20vw">
                    <div className="flex w-full h-4vw">
                        <span className="absolute top-1/2 left-0 text-1vw my-auto font-semibold text-black bg-white px-2vw py-1vw rounded-1vw" style={{ marginLeft: "-17vw" }}>Hardware :</span>
                    </div>
                    <div className="relative flex w-full h-15vw">
                        <Button styleBtn={`absolute top-1/2 left-0 translate-y-1/2min ml-min3vw flex w-3vw h-3vw rounded-full bg-secondary duration-300 shadow-0/4vwBlack hover:opacity-50 ${disableHardwarePrev ? 'opacity-50 cursor-default' : ''}`} onclick={handleHardwarePrevClick} disabled={disableHardwarePrev}>
                            <Arrow styleSvg="my-auto mx-auto" width="45%" height="45%" />
                        </Button>
                        <div className="w-full h-full overflow-x-hidden">
                            <ul className="hardware flex h-full duration-300" style={{ width: hardwareWidth, ...hardwareTransformStyle }}>
                                {hardware[0].src.length === 0 ? (
                                    <li className="flex flex-col w-15vw h-full">
                                        <div className='flex flex-col justify-center items-center gap-y-0/5vw w-4/5 h-4/5 mx-auto my-auto rounded-1vw bg-primary'>
                                            <FileNotFound width="3vw" height="3vw" />
                                            <span className='text-1vw font-semibold text-white'>Hardware not found</span>
                                        </div>
                                    </li>
                                ) : (
                                    hardware[0].src.map((src, index) => (
                                        <ListSkills key={index} src={src} name={hardware[1].name[index]} cat="hardware" nameSkills={nameSkills} />
                                    ))
                                )}
                            </ul>
                        </div>
                        <Button styleBtn={`absolute top-1/2 right-0 translate-y-1/2min mr-min3vw flex w-3vw h-3vw rounded-full bg-secondary shadow-0/4vwBlack duration-300 hover:opacity-50 ${disableHardwareNext ? 'opacity-50 cursor-default' : ''}`} onclick={handleHardwareNextClick} disabled={disableHardwareNext}>
                            <Arrow styleSvg="my-auto mx-auto rotate-180" width="45%" height="45%" />
                        </Button>
                    </div>
                </div>
                <div className="relative flex flex-col justify-between w-full h-20vw">
                    <div className="flex w-full h-4vw">
                        <span className="absolute top-1/2 left-0 text-1vw my-auto font-semibold text-black bg-white px-2vw py-1vw rounded-1vw" style={{ marginLeft: "-17vw" }}>Software :</span>
                    </div>
                    <div className="relative flex w-full h-15vw">
                        <Button styleBtn={`absolute top-1/2 left-0 translate-y-1/2min ml-min3vw flex w-3vw h-3vw rounded-full bg-secondary duration-300 shadow-0/4vwBlack hover:opacity-50 ${disableSoftwarePrev ? 'opacity-50 cursor-default' : ''}`} onclick={handleSoftwarePrevClick} disabled={disableSoftwarePrev}>
                            <Arrow styleSvg="my-auto mx-auto" width="45%" height="45%" />
                        </Button>
                        <div className="w-full h-full overflow-x-hidden">
                            <ul className="software flex h-full duration-300" style={{ width: softwareWidth, ...softwareTransformStyle }}>
                                {software[0].src.length === 0 ? (
                                    <li className="flex flex-col w-15vw h-full">
                                        <div className='flex flex-col justify-center items-center gap-y-0/5vw w-4/5 h-4/5 mx-auto my-auto rounded-1vw bg-primary'>
                                            <FileNotFound width="3vw" height="3vw" />
                                            <span className='text-1vw font-semibold text-white'>Software not found</span>
                                        </div>
                                    </li>
                                ) : (
                                    software[0].src.map((src, index) => (
                                        <ListSkills key={index} src={src} name={software[1].name[index]} cat="software" nameSkills={nameSkills} />
                                    ))
                                )}
                            </ul>
                        </div>
                        <Button styleBtn={`absolute top-1/2 right-0 translate-y-1/2min mr-min3vw flex w-3vw h-3vw rounded-full bg-secondary shadow-0/4vwBlack duration-300 hover:opacity-50 ${disableSoftwareNext ? 'opacity-50 cursor-default' : ''}`} onclick={handleSoftwareNextClick} disabled={disableSoftwareNext}>
                            <Arrow styleSvg="my-auto mx-auto rotate-180" width="45%" height="45%" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailSkills;
