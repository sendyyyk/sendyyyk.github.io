import React, { Fragment, useState, useEffect } from 'react';
import ListVideo from "../HomeFragments/Video/ListVideo";
import videosItems from './videosItems';
import NotFoundVideo from "../HomeFragments/Video/NotFoundVideo";

const Videos = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    const [countVideos, setCountVideos] = useState(6);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    useEffect(() => {
        if (isMobile) {
            setCountVideos(10);
        } else {
            setCountVideos(6);
        }
    }, [isMobile]);

    useEffect(() => {
        sessionStorage.setItem('visibleItems', countVideos.toString());
        sessionStorage.setItem('videosScrollPosition', '0');
    }, [countVideos]);

    const [visibleItems, setVisibleItems] = useState(() => {
        const savedVisibleItems = parseInt(sessionStorage.getItem('visibleItems'), 10);
        return isNaN(savedVisibleItems) ? countVideos : savedVisibleItems;
    });
    const [isFetching, setIsFetching] = useState(false);

    const loadMoreItems = () => {
        setTimeout(() => {
            setVisibleItems((prevItems) => {
                const newItemsCount = prevItems + countVideos;
                sessionStorage.setItem('visibleItems', newItemsCount.toString());
                return newItemsCount;
            });
            setIsFetching(false);
        }, 1000);
    };

    const handleScroll = () => {
        const container = document.querySelector(".container-def");
        if (container.scrollTop + container.clientHeight + 100 >= container.scrollHeight && !isFetching) {
            setIsFetching(true);
            loadMoreItems();
        }
    };

    useEffect(() => {
        const container = document.querySelector(".container-def");
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [isFetching]);

    useEffect(() => {
        const container = document.querySelector(".container-def");

        const savedScrollPosition = sessionStorage.getItem('videosScrollPosition');
        if (savedScrollPosition) {
            container.scrollTop = parseInt(savedScrollPosition, 10);
        }

        const handleScroll = () => {
            sessionStorage.setItem('videosScrollPosition', container.scrollTop.toString());
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const initialVisibleItems = parseInt(sessionStorage.getItem('visibleItems'), 10);
        setVisibleItems(isNaN(initialVisibleItems) ? countVideos : initialVisibleItems);
    }, [countVideos]);

    // Pisahkan dan urutkan item berdasarkan properti 'popular'
    const popularItems = videosItems.filter(item => item.popular);
    const nonPopularItems = videosItems.filter(item => !item.popular);
    const sortedItems = [...popularItems, ...nonPopularItems];


    return (
        <Fragment>
            {!isMobile ? (
                <div className="flex w-full">
                    <ul className="flex flex-wrap my-4vw w-full mx-auto gap-x-0/5vw gap-y-0/8vw" style={{ paddingLeft: "0.25vw" }}>
                        {sortedItems.length === 0 && (
                            <NotFoundVideo />
                        )}
                        {sortedItems.slice(0, visibleItems).map((videoItem, index) => (
                            <ListVideo
                                key={index}
                                src={Array.isArray(videoItem.src) ? videoItem.src : [videoItem.src]}
                                description={videoItem.description}
                                videoTitle={videoItem.videoTitle}
                                poster={Array.isArray(videoItem.poster) ? videoItem.poster : [videoItem.poster]}
                                date={videoItem.date}
                                popular={videoItem.popular}
                                randomName={videoItem.randomName}
                            />
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="flex w-full">
                    <ul className="flex flex-wrap justify-between w-full gap-y-1vw">
                        {sortedItems.length === 0 && (
                            <NotFoundVideo />
                        )}
                        {sortedItems.slice(0, visibleItems).map((videoItem, index) => (
                            <ListVideo
                                key={index}
                                src={Array.isArray(videoItem.src) ? videoItem.src : [videoItem.src]}
                                description={videoItem.description}
                                videoTitle={videoItem.videoTitle}
                                poster={Array.isArray(videoItem.poster) ? videoItem.poster : [videoItem.poster]}
                                date={videoItem.date}
                                popular={videoItem.popular}
                                randomName={videoItem.randomName}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </Fragment>
    );
}

export default Videos;
