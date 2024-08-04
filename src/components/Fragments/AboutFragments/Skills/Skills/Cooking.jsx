import React, { Fragment, useState, useEffect } from 'react';
import DetailSkills from '../DetailSkills';
import DetailSkillsMobile from '../DetailSkillsMobile';

const Cooking = (props) => {
    const { nameSkills, closeDetail } = props
    const [isMobile, setIsMobile] = useState(false);

    const detail = {
        hardware: [
            {src: []},
            {name: []},
        ],
        software: [
            {src: []},
            {name: []},
        ],
    };

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <DetailSkills nameSkills={nameSkills} detail={detail} closeDetail={closeDetail}/>
            ) :(
                <DetailSkillsMobile nameSkills={nameSkills} detail={detail} closeDetail={closeDetail}/>
            )}
        </Fragment>
    );
};

export default Cooking;

