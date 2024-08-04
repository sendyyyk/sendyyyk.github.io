import React, { useEffect, useState } from 'react';
import ListSkills from "./ListSkills.jsx";
import Button from "../../../Elements/Button/Button";
import Close from "../../../Elements/Icon/Close";
import Arrow from "../../../Elements/Icon/Arrow";
import FileNotFound from '../../../Elements/Icon/FileNotFound.jsx';

const DetailSkillsMobile = ({ detail, nameSkills, closeDetail }) => {
    const { hardware, software } = detail;

    const calculateWidth = (length) => {
        const additionalWidth = length > 3 ? (length - 3) * 40 : 0;
        return `calc(100% + ${additionalWidth}vw)`;
    };

    const hardwareWidth = calculateWidth(hardware[0].src.length);
    const softwareWidth = calculateWidth(software[0].src.length);

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 py-2vw w-full h-full bg-transpBlack z-20 container-def backdrop-blur-1vw overflow-y-auto">
            <div className="flex justify-between items-center w-full">
                <span className="flex text-5vw ml-5vw border-b-0/3vw border-red cinzel-Decorative-font text-white">{nameSkills} || Skills</span>
                <Button type="button" styleBtn="mt-1vw mr-5vw w-10vw h-10vw" onclick={closeDetail}>
                    <Close width="100%" height="100%" fill="fill-white" />
                </Button>
            </div>
            <div className="flex w-90vw h-140vw mx-auto mt-12vw overflow-hidden">
                <div className="relative flex flex-col justify-between w-1/2 h-full">
                    <div className="flex w-full h-10vw my-auto">
                        <span className="text-4vw my-auto mx-auto font-semibold text-black bg-white px-5vw py-2vw rounded-3vw">Hardware :</span>
                    </div>
                    <div className="relative flex w-full" style={{height: "160vw"}}>
                        <div className="w-full h-full menu-bar-scroll-mobile overflow-y-auto">
                            <ul className="hardware flex flex-col w-full duration-300" style={{ height: hardwareWidth}}>
                                {hardware[0].src.length === 0 ? (
                                    <li className="flex flex-col w-40vw h-40vw mx-auto">
                                    <div className='flex flex-col justify-center items-center gap-y-2vw w-4/5 h-4/5 mx-auto my-auto rounded-3vw bg-primary'>
                                        <FileNotFound width="10vw" height="10vw" />
                                        <span className='text-2/5vw font-semibold text-white'>Hardware not found</span>
                                    </div>
                                </li>
                                ) : (
                                    hardware[0].src.map((src, index) => (
                                        <ListSkills key={index} src={src} name={hardware[1].name[index]} cat="hardware" nameSkills={nameSkills} />
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col justify-between w-1/2 h-full">
                    <div className="flex w-full h-10vw my-auto">
                        <span className="text-4vw my-auto mx-auto font-semibold text-black bg-white px-5vw py-2vw rounded-3vw">Software :</span>
                    </div>
                    <div className="relative flex w-full" style={{height: "160vw"}}>
                        <div className="w-full h-full menu-bar-scroll-mobile overflow-y-auto ">
                            <ul className="software flex flex-col w-full duration-300" style={{ height: softwareWidth }}>
                                {software[0].src.length === 0 ? (
                                    <li className="flex flex-col w-40vw h-40vw mx-auto">
                                        <div className='flex flex-col justify-center items-center gap-y-2vw w-4/5 h-4/5 mx-auto my-auto rounded-3vw bg-primary'>
                                            <FileNotFound width="10vw" height="10vw" />
                                            <span className='text-2/5vw font-semibold text-white'>Software not found</span>
                                        </div>
                                    </li>
                                ) : (
                                    software[0].src.map((src, index) => (
                                        <ListSkills key={index} src={src} name={software[1].name[index]} cat="software" nameSkills={nameSkills} />
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DetailSkillsMobile;