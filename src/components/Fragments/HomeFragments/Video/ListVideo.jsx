import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import DisplayVideos from '../../DisplayMedia/DisplayVideos/DisplayVideos';
import VideoJSsimple from '../../VideoJS/VideoSimple/Video';
import Fire from '../../../Elements/Icon/Fire';
import Copy from '../../../Elements/Icon/Copy';

const ListVideo = (props) => {
    const { src, poster, styleVideo, styleVid = "3.05", styleDuration, styleParentDuration, styleVideoTitle, videoTitle, styleIcon, styleFire, styleCopy, date, rotate, description, popular, randomName } = props;
    const [isHovered, setIsHovered] = useState(false);
    const [isDisplayVisible, setIsDisplayVisible] = useState(false);
    const [containerDef, setContainerDef] = useState(null);
    const [duration, setDuration] = useState('');
    const [resizedPosters, setResizedPosters] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    const formatDuration = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);

        if (h > 0) {
            return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
        } else {
            return `${m}:${s < 10 ? '0' : ''}${s}`;
        }
    };

    const fetchVideoDuration = (src) => {
        return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.src = `/img-vid/video/videos/${src[0]}`;
            video.onloadedmetadata = () => {
                resolve(video.duration);
            };
            video.onerror = () => {
                reject('Error loading video metadata');
            };
        });
    };

    useEffect(() => {
        fetchVideoDuration(src)
            .then((videoDuration) => {
                setDuration(formatDuration(videoDuration));
            })
            .catch((error) => {
                console.error(error);
            });
    }, [src]);

    useEffect(() => {
        setContainerDef(document.querySelector('.container-def'));
        Promise.all(poster.map(posterItem => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = `/img-vid/image/poster-video/${posterItem}`;
                img.onload = () => {
                    const maxDimension = 720;
                    const canvas = document.createElement('canvas');
                    let { width, height } = img;

                    if (width > height) {
                        if (width > maxDimension) {
                            height *= maxDimension / width;
                            width = maxDimension;
                        }
                    } else {
                        if (height > maxDimension) {
                            width *= maxDimension / height;
                            height = maxDimension;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    resolve(canvas.toDataURL('image/jpeg'));
                };
            });
        }))
        .then(resizedPosters => {
            setResizedPosters(resizedPosters);
        });
    }, [poster]);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));

        const handlePopState = () => {
            setIsDisplayVisible(false);
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);


    const handleClick = (event) => {
        event.preventDefault();
        setIsDisplayVisible(true);
        window.history.pushState({}, '', `/videos/${randomName}`);
    };

    const closeDisplay = () => {
        setIsDisplayVisible(false);
        window.history.back();
    };

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <>
                    <li className={`relative h-15vw bg-black rounded-1vw overflow-hidden ${styleVideo}`}
                        style={{ width: `calc(100% / ${styleVid})`, transform: `rotateY(${rotate}deg) rotateZ(${rotate}deg)` }} >
                        <div className={`absolute top-3% right-3% flex bg-black rounded-0/5vw cursor-default z-10 ${styleParentDuration} ${isHovered ? 'hidden' : ''}`}>
                            <span className={`durasi-video py-0/4vw px-0/8vw text-white text-0/7vw ${styleDuration}`}>
                                {duration}
                            </span>
                        </div>
                        <div className={`absolute bottom-0 rounded-b-1vw flex w-full px-1/5vw bg-transpBlack cursor-default z-10 ${isHovered ? 'hidden' : ''}`}>
                            <span className={`mx-auto py-0/5vw overflow-hidden whitespace-nowrap text-0/9vw text-white text-ellipsis ${styleVideoTitle}`} title={videoTitle}>
                                {videoTitle}
                            </span>
                        </div>
                        <div className={`absolute top-4% flex gap-x-0/5vw px-0/5vw w-full ${styleIcon}`}>
                            {popular === true && (
                                <div className={`flex w-1/5vw h-1/5vw bg-black rounded-full z-10 ${styleFire} ${isHovered ? 'hidden' : ''}`}>
                                    <Fire styleSvg="mx-auto my-auto" width="60%" height="60%"/>        
                                </div>
                            )}
                            {src.length > 1 && (
                                <div className={`flex w-1/5vw h-1/5vw bg-black rounded-0/5vw z-10 ${styleCopy} ${isHovered ? 'hidden' : ''}`}>
                                    <Copy styleSvg="mx-auto my-auto" width="50%" height="50%"/>
                                </div>
                            )}
                        </div>
                        <div className="relative w-full h-full cursor-pointer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            
                        >
                            <div className='absolute w-full h-full z-10' onClick={handleClick}></div>
                            {isHovered ? (
                                <VideoJSsimple
                                    styleVideo="w-full h-full object-cover"
                                    src={`/img-vid/video/videos/${src[0]}`}
                                    poster={`/img-vid/image/poster-video/${poster[0]}`}
                                    Controls
                                    muted
                                    autoPlay
                                    loop
                                />
                            ) : (
                                <div className='w-full h-full'>
                                    {resizedPosters.map((resizedPoster, index) => (
                                        <img key={index} src={resizedPoster} alt={videoTitle} className='w-full h-full object-cover' />
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                    {isDisplayVisible && containerDef && ReactDOM.createPortal(
                        <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-transpBlack backdrop-blur-0/5vw z-10'>
                            <DisplayVideos src={src} poster={poster} videoTitle={videoTitle} description={description} date={date} onClose={closeDisplay} />
                        </div>,
                        containerDef
                    )}
                </>
            ) : (
                <>
                    <li className={`relative h-30vw bg-black overflow-hidden ${styleVideo}`}
                        style={{ width: `calc(100% / 2.02)`, transform: `rotateY(${rotate}deg) rotateZ(${rotate}deg)` }} >
                        <div className={`absolute top-3% right-3% flex bg-black rounded-2vw cursor-default z-10 ${styleParentDuration} ${isHovered ? 'hidden' : ''}`}>
                            <span className={`durasi-video py-1vw px-2vw text-white text-2vw ${styleDuration}`}>
                                {duration}
                            </span>
                        </div>
                        <div className={`absolute bottom-0 flex w-full px-3vw bg-transpBlack cursor-default z-10 ${isHovered ? 'hidden' : ''}`}>
                            <span className={`mx-auto py-1vw overflow-hidden whitespace-nowrap text-2vw text-white text-ellipsis ${styleVideoTitle}`} title={videoTitle}>
                                {videoTitle}
                            </span>
                        </div>
                        <div className={`absolute top-4% flex gap-x-1vw px-1vw w-full ${styleIcon}`}>
                            {popular === true && (
                                <div className={`flex w-4vw h-4vw bg-black rounded-full z-10 ${styleFire} ${isHovered ? 'hidden' : ''}`}>
                                    <Fire styleSvg="mx-auto my-auto" width="60%" height="60%"/>        
                                </div>
                            )}
                            {src.length > 1 && (
                                <div className={`flex w-4vw h-4vw bg-black rounded-0/5vw z-10 ${styleCopy} ${isHovered ? 'hidden' : ''}`}>
                                    <Copy styleSvg="mx-auto my-auto" width="50%" height="50%"/>
                                </div>
                            )}
                        </div>
                        <div className="relative w-full h-full cursor-pointer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            
                        >
                            <div className='absolute w-full h-full z-10' onClick={handleClick}></div>
                            {isHovered ? (
                                <VideoJSsimple
                                    styleVideo="w-full h-full object-cover"
                                    src={`/img-vid/video/videos/${src[0]}`}
                                    poster={`/img-vid/image/poster-video/${poster[0]}`}
                                    Controls
                                    muted
                                    autoPlay
                                    loop
                                />
                            ) : (
                                <div className='w-full h-full'>
                                    {resizedPosters.map((resizedPoster, index) => (
                                        <img key={index} src={resizedPoster} alt={videoTitle} className='w-full h-full object-cover' />
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                    {isDisplayVisible && containerDef && ReactDOM.createPortal(
                        <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-transpBlack backdrop-blur-1vw z-10'>
                            <DisplayVideos src={src} poster={poster} videoTitle={videoTitle} description={description} date={date} onClose={closeDisplay} />
                        </div>,
                        containerDef
                    )}
                </>
            )}
        </Fragment>
    );
}

export default ListVideo;
