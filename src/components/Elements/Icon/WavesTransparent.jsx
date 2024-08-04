import React, { Fragment, useEffect, useState } from 'react';
import VideoJSsimple from '../../Fragments/VideoJS/VideoSimple/Video';

const WavesTransparent = (props) => {
    const { styleSvg, width, height, src } = props;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <svg className={styleSvg} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 625">
                    <defs>
                        <clipPath id="waveClipPath">
                            <path fill="none" d="M0,288L30,261.3C60,235,120,181,180,181.3C240,181,300,235,360,256C420,277,480,267,540,229.3C600,192,660,128,720,133.3C780,139,840,213,900,234.7C960,256,1020,224,1080,202.7C1140,181,1200,171,1260,181.3C1320,192,1380,224,1410,240L1440,256L1440,625L1410,625C1380,625,1320,625,1260,625C1200,625,1140,625,1080,625C1020,625,960,625,900,625C840,625,780,625,720,625C660,625,600,625,540,625C480,625,420,625,360,625C300,625,240,625,180,625C120,625,60,625,30,625L0,625Z"></path>
                        </clipPath>
                    </defs>
                    <foreignObject x="0" y="0" width="1400" height="625" clipPath="url(#waveClipPath)">
                        <VideoJSsimple
                            styleVideo="video-background"
                            src={`/img-vid/video/videos/${src}`}
                            poster={`/img-vid/image/poster-video/`}
                            muted
                            autoPlay
                            loop
                        />
                    </foreignObject>
                    <path fill="none" stroke="black" strokeWidth="1" d="M0,288L30,261.3C60,235,120,181,180,181.3C240,181,300,235,360,256C420,277,480,267,540,229.3C600,192,660,128,720,133.3C780,139,840,213,900,234.7C960,256,1020,224,1080,202.7C1140,181,1200,171,1260,181.3C1320,192,1380,224,1410,240L1440,256L1440,625L1410,625C1380,625,1320,625,1260,625C1200,625,1140,625,1080,625C1020,625,960,625,900,625C840,625,780,625,720,625C660,625,600,625,540,625C480,625,420,625,360,625C300,625,240,625,180,625C120,625,60,625,30,625L0,625Z"></path>
                </svg>
            ) : (
                <svg className={styleSvg} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 1300">
                    <defs>
                        <clipPath id="waveClipPath">
                            <path fill="none" d="M0,288L30,261.3C60,235,120,181,180,181.3C240,181,300,235,360,256C420,277,480,267,540,229.3C600,192,660,128,720,133.3C780,139,840,213,900,234.7C960,256,1020,224,1080,202.7C1140,181,1200,171,1260,181.3C1320,192,1380,224,1410,240L1440,256L1440,1300L1410,1300C1380,1300,1320,1300,1260,1300C1200,1300,1140,1300,1080,1300C1020,1300,960,1300,900,1300C840,1300,780,1300,720,1300C660,1300,600,1300,540,1300C480,1300,420,1300,360,1300C300,1300,240,1300,180,1300C120,1300,60,1300,30,1300L0,1300Z"></path>
                        </clipPath>
                    </defs>
                    <foreignObject x="0" y="0" width="1400" height="1300" clipPath="url(#waveClipPath)">
                        <VideoJSsimple
                            styleVideo="video-background"
                            src={`/img-vid/video/videos/${src}`}
                            poster={`/img-vid/image/poster-video/`}
                            muted
                            autoPlay
                            loop
                        />
                    </foreignObject>
                    <path fill="none" stroke="black" strokeWidth="1" d="M0,288L30,261.3C60,235,120,181,180,181.3C240,181,300,235,360,256C420,277,480,267,540,229.3C600,192,660,128,720,133.3C780,139,840,213,900,234.7C960,256,1020,224,1080,202.7C1140,181,1200,171,1260,181.3C1320,192,1380,224,1410,240L1440,256L1440,1300L1410,1300C1380,1300,1320,1300,1260,1300C1200,1300,1140,1300,1080,1300C1020,1300,960,1300,900,1300C840,1300,780,1300,720,1300C660,1300,600,1300,540,1300C480,1300,420,1300,360,1300C300,1300,240,1300,180,1300C120,1300,60,1300,30,1300L0,1300Z"></path>
                </svg>


            )}
        </Fragment>
    );
}

export default WavesTransparent;