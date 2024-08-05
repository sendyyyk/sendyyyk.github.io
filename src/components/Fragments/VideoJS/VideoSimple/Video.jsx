// VideoPlayer.jsx
import React, { Fragment, useEffect, useCallback, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoJSsimple = ({ src, Controls, poster, styleVideo, muted, loop, autoPlay }) => {
    const [player, setPlayer] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    
    const initializePlayer = useCallback((node) => {
        if (node) {
            const playerInstance = videojs(node, {
                controls: Controls,
                autoplay: autoPlay,
                muted: muted,
                loop: loop,
                preload: 'auto',
                sources: [{ src: `${src}`, type: 'video/mp4' }],
                poster: `${poster}`,
                userActions: {
                    hotkeys: false,
                },
                inactivityTimeout: 0,
            });

            setPlayer(playerInstance);
        }
    }, [src, poster, autoPlay, muted, loop]);

    useEffect(() => {
        return () => {
            if (player) {
                player.dispose();
            }
        };
    }, [player]);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <div className='vjs-simple w-full h-full'>
                    <div data-vjs-player>
                        <video ref={initializePlayer} className={`video-js ${styleVideo}`}></video>
                    </div>
                </div>
            ) : (
                <div className='vjs-simple-mobile w-full h-full'>
                    <div data-vjs-player>
                        <video ref={initializePlayer} className={`video-js ${styleVideo}`}></video>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default VideoJSsimple;
