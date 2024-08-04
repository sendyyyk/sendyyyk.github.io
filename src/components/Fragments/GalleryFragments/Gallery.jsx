import React, { Fragment, useState, useEffect } from 'react';
import NotFoundGallery from "../HomeFragments/Gallery/NotFoundGallery";
import ListGallery from "../HomeFragments/Gallery/ListGallery";
import galleryItems from './galleryItems';

const Gallery = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    const [countGallery, setCountGallery] = useState(5);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    useEffect(() => {
        if (isMobile) {
            setCountGallery(12);
        } else {
            setCountGallery(10);
        }
    }, [isMobile]);

    useEffect(() => {
        sessionStorage.setItem('visibleItems', countGallery.toString());
        sessionStorage.setItem('galleryScrollPosition', '0');
    }, [countGallery]);

    const [visibleItems, setVisibleItems] = useState(countGallery);
    const [isFetching, setIsFetching] = useState(false);

    const loadMoreItems = () => {
        setTimeout(() => {
            setVisibleItems((prevItems) => {
                const newItemsCount = prevItems + countGallery;
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

        const savedScrollPosition = sessionStorage.getItem('galleryScrollPosition');
        if (savedScrollPosition) {
            container.scrollTop = parseInt(savedScrollPosition, 10);
        }

        const handleScroll = () => {
            sessionStorage.setItem('galleryScrollPosition', container.scrollTop.toString());
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const initialVisibleItems = parseInt(sessionStorage.getItem('visibleItems'), 10) || countGallery;
        setVisibleItems(initialVisibleItems);
    }, [countGallery]);

    // Pisahkan dan urutkan item berdasarkan properti 'popular'
    const popularItems = galleryItems.filter(item => item.popular);
    const nonPopularItems = galleryItems.filter(item => !item.popular);
    const sortedItems = [...popularItems, ...nonPopularItems];
    return (
        <Fragment>
            {!isMobile ? (
                <div className="flex w-full">
                    <ul className="flex flex-wrap w-65vw my-4vw mx-auto gap-y-0/8vw">
                        {sortedItems.length === 0 && (
                            <NotFoundGallery />
                        )}
                        {sortedItems.slice(0, visibleItems).map((galleryItem, index) => (
                            <ListGallery
                                key={index}
                                src={Array.isArray(galleryItem.src) ? galleryItem.src : [galleryItem.src]}
                                caption={galleryItem.caption}
                                date={galleryItem.date}
                                popular={galleryItem.popular}
                                randomName={galleryItem.randomName}
                            />
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="flex w-full">
                    <ul className="flex flex-wrap w-full gap-y-0/8vw gap-x-0/8vw">
                        {sortedItems.length === 0 && (
                            <NotFoundGallery />
                        )}
                        {sortedItems.slice(0, visibleItems).map((galleryItem, index) => (
                            <ListGallery
                                key={index}
                                src={Array.isArray(galleryItem.src) ? galleryItem.src : [galleryItem.src]}
                                caption={galleryItem.caption}
                                date={galleryItem.date}
                                popular={galleryItem.popular}
                                randomName={galleryItem.randomName}
                                styleFire="w-5vw h-5vw"
                                styleCopy="w-5vw h-5vw rounded-1vw"
                                styleIcon="gap-x-2vw px-1vw"
                            />
                        ))}
                    </ul>
                </div>
            )}
        </Fragment>
    );
}

export default Gallery;
