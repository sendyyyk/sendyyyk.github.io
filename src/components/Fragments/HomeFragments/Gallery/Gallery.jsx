import { useState, useEffect } from 'react';
import Other from '../../../Elements/Icon/Other';
import ListGallery from "./ListGallery";
import Button from "../../../Elements/Button/Button";
import Arrow from "../../../Elements/Icon/Arrow";
import NotFoundGallery from './NotFoundGallery';
import galleryItems from '../../GalleryFragments/galleryItems';

const Gallery = (props) => {
    const [translateX, setTranslateX] = useState(0);
    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(5);

    const additionalGallery = galleryItems.filter(item => item.popular).map(gallery => ({
        ...gallery,
        rotate: "180"
    }));

    const calculateWidth = (length) => {
        const additionalWidth = length > 5 ? (length - 5) * 15 : 0;
        return `calc(100% + ${additionalWidth}vw)`;
    };

    const originalWidth = calculateWidth(galleryItems.filter(item => item.popular).length);
    const additionalWidth = calculateWidth(additionalGallery.length);


    const maxTranslateX = -((galleryItems.filter(item => item.popular).length - 5) * 13);
    const minTranslateX = 0;

    const handlePrevClick = () => {
        setTranslateX(prev => Math.min(prev + 13, minTranslateX));
    };

    const handleNextClick = () => {
        setTranslateX(prev => Math.max(prev - 13, maxTranslateX));
    };

    useEffect(() => {
        setDisablePrev(translateX >= minTranslateX);
        setDisableNext(translateX <= maxTranslateX);
        setCurrentIndex(Math.abs(translateX / 13) + 5);
        if (additionalGallery.length < 5) {
            setCurrentIndex(Math.abs(translateX / 13) + additionalGallery.length);
        }
    }, [translateX, minTranslateX, maxTranslateX]);

    const transformStyle = { transform: `translateX(${translateX}vw)` };

    const filteredGalleryItems = galleryItems.filter(item => item.popular);

    return (
        <div className="flex w-full mt-15vw">
            <div className="relative flex flex-col w-full">
                <div className=" flex w-full h-7vw mb-2vw backdrop-blur-0/2vw">
                    <span className="mx-auto payfair-font text-black text-5vw leading-0 xdrk-c1-css">Gallery</span>
                </div>
                <div className='absolute right-0 mt-5vw flex justify-center items-center w-5vw h-2/5vw ms-auto mb-4vw rounded-full bg-grey xdrk-bc3-css font-semibold text-1vw text-white xdrk-c2-css'>
                    {currentIndex}/{additionalGallery.length}
                </div>
                <div className="relative flex w-full h-20vw px-5vw">
                    <Button styleBtn="absolute top-5vw left-0 flex w-3vw h-3vw rounded-full bg-primary duration-300 shadow-0/4vwBlack cursor-pointer hover:opacity-80" onclick={handlePrevClick} disabled={disablePrev}>
                        <Arrow styleSvg="my-auto mx-auto" width="45%" height="45%" />
                    </Button>
                    <div className="flex flex-col h-full w-full mb-auto gap-y-0/7vw overflow-hidden">
                        <ul className="flex h-full duration-300" style={{ width: originalWidth, ...transformStyle }}>
                            {filteredGalleryItems.length === 0 && (
                                <NotFoundGallery />
                            )}
                            {filteredGalleryItems.map((galleryItem, index) => (
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
                        <ul className="flex h-full duration-300" style={{ width: additionalWidth, ...transformStyle }}>
                            {filteredGalleryItems.length === 0 && (
                                <NotFoundGallery rotate="180" />
                            )}
                            {filteredGalleryItems.map((galleryItem, index) => (
                                <ListGallery
                                    key={index}
                                    src={Array.isArray(galleryItem.src) ? galleryItem.src : [galleryItem.src]}
                                    caption={galleryItem.caption}
                                    date={galleryItem.date}
                                    popular={galleryItem.popular}
                                    randomName={galleryItem.randomName}
                                    rotate="180"
                                />
                            ))}
                        </ul>
                    </div>
                    <Button styleBtn="absolute top-5vw right-0 flex w-3vw h-3vw rounded-full bg-primary shadow-0/4vwBlack cursor-pointer duration-300 hover:opacity-80" onclick={handleNextClick} disabled={disableNext}>
                        <Arrow styleSvg="my-auto mx-auto rotate-180" width="45%" height="45%" />
                    </Button>
                </div>
                <div className="absolute bottom-0 flex w-full h-7vw backdrop-blur-0/2vw">
                    <div className="flex w-full h-0/5vw mt-auto bg-primary rounded-full">
                        <a href="/profile/gallery" className="absolute bottom-25min left-50% flex h-4vw w-4vw translate-x-1/2min rounded-full border-0/7vw border-primary bg-white xdrk-bc1-css">
                            <Other width="90%" height="90%" styleSvg="my-auto mx-auto rounded-full duration-300 hover:rotate-180" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
