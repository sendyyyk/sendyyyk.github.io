import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Other from '../../../Elements/Icon/Other';
import ListVideo from "./ListVideo";
import NotFoundVideo from './NotFoundVideo';
import videosItems from '../../VideosFragments/videosItems';

const VideoMobile = (props) => {
    const filteredVideosItems = videosItems.filter(item => item.popular);
    const [currentIndex, setCurrentIndex] = useState(0);
    const dynamicStyleVid = `${filteredVideosItems.length}.1`;

    const handleSwipe = (direction) => {
        if (direction === 'LEFT' && currentIndex < filteredVideosItems.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (direction === 'RIGHT' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('LEFT'),
        onSwipedRight: () => handleSwipe('RIGHT'),
        trackMouse: true,
    });

    return (
        <div className={"flex w-full rounded-3vw"} {...swipeHandlers}>
            <div className="relative flex flex-col w-full max-h-80vw rounded-3vw">
                <div className='flex justify-center items-center w-15vw h-7vw ms-auto mb-4vw rounded-full bg-grey xdrk-bc3-css font-semibold text-3vw text-white xdrk-c2-css'>
                    {currentIndex + 1}/{filteredVideosItems.length}
                </div>
                <div className="flex flex-col w-full h-70vw gap-y-2/5vw overflow-hidden rounded-3vw">
                    <ul
                        className="flex justify-between w-full rounded-3vw transition-transform duration-300"
                        style={{
                            width: `calc(100% * ${filteredVideosItems.length === 0 ? 1 : filteredVideosItems.length})`,
                            transform: `translateX(-${(currentIndex * 100) / filteredVideosItems.length}%)`,
                        }}
                    >
                        {filteredVideosItems.length === 0 && (
                            <NotFoundVideo
                                styleVid={filteredVideosItems.length === 0 ? 1.1 : filteredVideosItems.length}
                                styleVideo="h-52vw rounded-3vw mx-auto gap-y-3vw"
                                text="text-3vw"
                                widthIcon="10vw"
                                heightIcon="10vw"
                            />
                        )}
                        {filteredVideosItems.map((videosItem, index) => (
                            <ListVideo
                                key={index}
                                src={Array.isArray(videosItem.src) ? videosItem.src : [videosItem.src]}
                                videoTitle={videosItem.videoTitle}
                                description={videosItem.description}
                                poster={videosItem.poster}
                                date={videosItem.date}
                                popular={videosItem.popular}
                                randomName={videosItem.randomName}
                                styleVid={dynamicStyleVid}
                                styleVideo="h-52vw rounded-3vw mx-2vw one-video !w-full"
                                styleParentDuration="rounded-2vw"
                                styleDuration="text-3vw px-3vw py-1/5vw"
                                styleVideoTitle="text-3vw px-2vw py-1/5vw"
                                styleIcon="gap-x-2vw px-2vw"
                                styleFire="w-5vw h-5vw"
                                styleCopy="w-5vw h-5vw rounded-1vw"
                            />
                        ))}
                    </ul>
                    <ul
                        className="flex justify-between w-full transition-transform duration-300"
                        style={{
                            width: `calc(100% * ${filteredVideosItems.length === 0 ? 1 : filteredVideosItems.length})`,
                            transform: `translateX(-${(currentIndex * 100) / filteredVideosItems.length}%)`,
                        }}
                    >
                        {filteredVideosItems.length === 0 && (
                            <NotFoundVideo
                                styleVid={filteredVideosItems.length === 0 ? 1.1 : filteredVideosItems.length}
                                styleVideo="h-52vw rounded-3vw mx-auto gap-y-3vw"
                                text="text-3vw"
                                widthIcon="10vw"
                                heightIcon="10vw"
                                rotate="180"
                            />
                        )}
                        {filteredVideosItems.map((videosItem, index) => (
                            <ListVideo
                                key={index}
                                src={Array.isArray(videosItem.src) ? videosItem.src : [videosItem.src]}
                                videoTitle={videosItem.videoTitle}
                                description={videosItem.description}
                                poster={videosItem.poster}
                                date={videosItem.date}
                                popular={videosItem.popular}
                                randomName={videosItem.randomName}
                                rotate="180"
                                styleVid={dynamicStyleVid}
                                styleVideo="h-45vw rounded-3vw mx-2vw"
                                styleParentDuration="rounded-2vw"
                                styleDuration="text-3vw px-3vw py-1/5vw"
                                styleVideoTitle="text-3vw px-2vw py-1/5vw"
                                styleIcon="gap-x-2vw px-2vw"
                                styleFire="w-5vw h-5vw"
                                styleCopy="w-5vw h-5vw rounded-1vw"
                            />
                        ))}
                    </ul>
                </div>
                <div className="absolute bottom-0 flex w-full h-17vw backdrop-blur-0/5vw z-10">
                    <div className="w-full h-1/5vw mt-auto bg-primary rounded-full">
                        <a href="/profile/videos" className="absolute bottom-25min left-50% flex h-10vw w-10vw translate-x-1/2min rounded-full border-1/3vw border-primary bg-white xdrk-bc1-css">
                            <Other width="90%" height="90%" styleSvg="my-auto mx-auto rounded-full duration-300 hover:rotate-180" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoMobile;
