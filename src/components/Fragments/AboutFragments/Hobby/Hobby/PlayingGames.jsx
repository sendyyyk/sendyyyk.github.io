import React, { Fragment, useState, useEffect } from 'react';
import DetailHobby from '../DetailHobby';
import DetailHobbyMobile from '../DetailHobbyMobile';

const PlayingGames = (props) => {
    const {nameHobby, closeDetail} = props
    const [isMobile, setIsMobile] = useState(false);

    const detail = {
        desktop: [
            {src: ["point-blank.png", "counter-strike-2.png", "counter-strike-source.png", "lost-saga.png", "audition-ayodance.png", "minecraft-java.png", "pro-evolution-soccer-2021.png"]},
            {name: ["Point Blank", "Counter Strike 2", "Counter Strike Source", "Lost Saga", "Audition Ayodance", "Minecraft Java", "Pro Evolution Soccer 2021"]},
        ],
        mobile: [
            {src: ["mobile-legend.png", "real-drum.png", "dragon-city.png", "clash-of-clans.png", "clash-royale.png", "8-ball-pool.png", "get-rich.png", "minecraft.png", "efootball-2024.png"]},
            {name: ["Mobile Legend", "Real Drum", "Dragon City", "Clash Of Clans", "Clash Royale", "8 Ball Poool", "Let's Get Rich", "Minecraft", "EFootBall 2024"]},
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
                <DetailHobby nameHobby={nameHobby} detail={detail} closeDetail={closeDetail}/>
            ) :(
                <DetailHobbyMobile nameHobby={nameHobby} detail={detail} closeDetail={closeDetail}/>
            )}
        </Fragment>
    );
};

export default PlayingGames;

