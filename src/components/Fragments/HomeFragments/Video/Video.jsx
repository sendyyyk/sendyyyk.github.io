import React from 'react';
import Other from '../../../Elements/Icon/Other';
import ListVideo from "./ListVideo";
import NotFoundVideo from './NotFoundVideo';
import videosItems from '../../VideosFragments/videosItems';

const Video = (props) => {

    const filteredVideosItems = videosItems.filter(item => item.popular);

    return (
        <div className={"flex w-full"}>
            <div className="relative flex flex-col w-full max-h-28vw">
                <div className="flex flex-col w-full h-22vw gap-y-0/7vw overflow-hidden">
                    <ul className="flex flex-wrap w-full px-1vw gap-x-0/5vw ">
                        {filteredVideosItems.length === 0 && (
                            <NotFoundVideo />
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
                            />
                        ))}
                    </ul>
                    <ul className="flex flex-wrap w-full px-1vw gap-x-0/5vw">
                        {filteredVideosItems.length === 0 && (
                            <NotFoundVideo rotate="180" />
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
                            />
                        ))}
                    </ul>
                </div>
                <div className="absolute bottom-0 flex w-full h-7vw backdrop-blur-0/2vw">
                    <div className="w-full h-0/5vw mt-auto bg-primary rounded-full">
                        <a href="/profile/videos" className="absolute bottom-25min left-50% flex h-4vw w-4vw translate-x-1/2min rounded-full border-0/7vw border-primary bg-white xdrk-bc1-css">
                            <Other width="90%" height="90%" styleSvg="my-auto mx-auto rounded-full duration-300 hover:rotate-180" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
