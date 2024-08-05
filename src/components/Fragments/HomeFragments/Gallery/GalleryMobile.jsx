import { useState, useEffect } from 'react';
import Other from '../../../Elements/Icon/Other';
import ListGallery from "./ListGallery";
import Button from "../../../Elements/Button/Button";
import Arrow from "../../../Elements/Icon/Arrow";
import NotFoundGallery from './NotFoundGallery';
import galleryItems from '../../GalleryFragments/galleryItems';

const GalleryMobile = (props) => {
    const [translateX, setTranslateX] = useState(0);
    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(2);

    const additionalGallery = galleryItems.filter(item => item.popular).map(gallery => ({
        ...gallery,
        rotate: "180"
    }));

    const calculateWidth = (length) => {
        const additionalWidth = length > 2 ? (length - 2) * 40 : 0;
        return `calc(100% + ${additionalWidth}vw)`;
    };

    const originalWidth = calculateWidth(galleryItems.filter(item => item.popular).length);
    const additionalWidth = calculateWidth(additionalGallery.length);


    const maxTranslateX = -((galleryItems.filter(item => item.popular).length - 2) * 40);
    const minTranslateX = 0;

    const handlePrevClick = () => {
        setTranslateX(prev => Math.min(prev + 40, minTranslateX));
    };

    const handleNextClick = () => {
        setTranslateX(prev => Math.max(prev - 40, maxTranslateX));
    };

    useEffect(() => {
        setDisablePrev(translateX >= minTranslateX);
        setDisableNext(translateX <= maxTranslateX);
        setCurrentIndex(Math.abs(translateX / 40) + 2);
        if (additionalGallery.length < 2) {
            setCurrentIndex(Math.abs(translateX / 40) + 1);
        }
    }, [translateX, minTranslateX, maxTranslateX]);

    const transformStyle = { transform: `translateX(${translateX}vw)` };

    const filteredGalleryItems = galleryItems.filter(item => item.popular);

    return (
        <div className="flex w-full mt-30vw">
            <div className="relative flex flex-col w-full">
                <div className=" flex w-full h-7vw mb-10vw backdrop-blur-0/2vw">
                    <span className="mx-auto payfair-font text-black text-10vw leading-0 xdrk-c1-css">Gallery</span>
                </div>
                <div className='absolute right-0 mt-7vw flex justify-center items-center w-15vw h-7vw ms-auto mb-4vw rounded-full bg-grey xdrk-bc3-css font-semibold text-3vw text-white xdrk-c2-css'>
                    {currentIndex}/{additionalGallery.length}
                </div>
                <div className="relative flex w-full h-60vw px-5vw">
                    <Button styleBtn="prev absolute top-15vw left-0 flex w-10vw h-10vw rounded-full bg-primary duration-300 shadow-0/4vwBlack cursor-pointer z-10" onclick={handlePrevClick} disabled={disablePrev}>
                        <Arrow styleSvg="my-auto mx-auto" width="45%" height="45%" />
                    </Button>
                    <div className="flex flex-col h-full w-full mb-auto gap-y-2vw overflow-hidden">
                        <ul className="flex h-full duration-300" style={{ width: originalWidth, ...transformStyle }}>
                            {filteredGalleryItems.length === 0 && (
                                <NotFoundGallery
                                    styleVideo="w-40vw h-40vw rounded-3vw mx-auto"
                                    text="text-2vw"
                                    widthIcon="7vw"
                                    heightIcon="7vw"
                                />
                            )}
                            {filteredGalleryItems.map((galleryItem, index) => (
                                <ListGallery
                                    key={index}
                                    src={Array.isArray(galleryItem.src) ? galleryItem.src : [galleryItem.src]}
                                    caption={galleryItem.caption}
                                    date={galleryItem.date}
                                    popular={galleryItem.popular}
                                    randomName={galleryItem.randomName}
                                    styleGalery="!w-40vw !h-40vw"
                                    styleDiv1Li="rounded-3vw !w-90% !h-90%"
                                    styleFire="w-5vw h-5vw"
                                    styleCopy="w-5vw h-5vw rounded-1vw"
                                    styleIcon="gap-x-2vw px-1vw"
                                />
                            ))}
                        </ul>
                        <ul className="flex h-full duration-300" style={{ width: additionalWidth, ...transformStyle }}>
                            {filteredGalleryItems.length === 0 && (
                                <NotFoundGallery
                                    rotate="180"
                                    styleVideo="w-40vw h-40vw rounded-3vw mx-auto"
                                    text="text-2vw"
                                    widthIcon="7vw"
                                    heightIcon="7vw"
                                />
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
                                    styleGalery="!w-40vw !h-40vw"
                                    styleDiv1Li="rounded-3vw !w-90% !h-90%"
                                    styleFire="w-5vw h-5vw"
                                    styleCopy="w-5vw h-5vw rounded-1vw"
                                    styleIcon="gap-x-2vw px-2vw"
                                />
                            ))}
                        </ul>
                    </div>
                    <Button styleBtn="next absolute top-15vw right-0 flex w-10vw h-10vw rounded-full bg-primary shadow-0/4vwBlack cursor-pointer duration-300 z-10" onclick={handleNextClick} disabled={disableNext}>
                        <Arrow styleSvg="my-auto mx-auto rotate-180" width="45%" height="45%" />
                    </Button>
                </div>
                <div className="absolute bottom-0 flex w-full h-20vw backdrop-blur-0/5vw">
                    <div className="flex w-full h-1/5vw mt-auto bg-primary rounded-full">
                        <a href="/profile/gallery" className="absolute bottom-25min left-50% flex h-10vw w-10vw translate-x-1/2min rounded-full border-1/3vw border-primary bg-white xdrk-bc1-css">
                            <Other width="90%" height="90%" styleSvg="my-auto mx-auto rounded-full duration-300 hover:rotate-180" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryMobile;
