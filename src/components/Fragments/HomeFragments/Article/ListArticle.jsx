import { useEffect, useState } from "react";
import Button from "../../../Elements/Button/Button";
import Arrow from "../../../Elements/Icon/Arrow";
import Book from "../../../Elements/Icon/Book";
import ListPictureArticle from "./ListPictureArticle";

const ListArticle = (props) => {
    const { src = ["article-1.png"], description = "Not Yet Known", release = "Not Yet Known", minuteRead = 0 } = props;
    const [translateX, setTranslateX] = useState(0);

    const srcArray = Array.isArray(src) ? src : [src];
    
    const article = srcArray.map(image => ({ src: image }));

    const calculateWidth = (length) => {
        const additionalWidth = length > 1 ? (length - 1) * 24 : 0;
        return `calc(100% + ${additionalWidth}vw)`;
    };
    
    const originalWidth = calculateWidth(article.length);

    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);

    const maxTranslateX = -((article.length - 1) * 24);
    const minTranslateX = 0;

    const handlePrevClick = () => {
        setTranslateX(prev => Math.min(prev + 24, minTranslateX));
    };

    const handleNextClick = () => {
        setTranslateX(prev => Math.max(prev - 24, maxTranslateX));
    };

    useEffect(() => {
        setDisablePrev(translateX >= minTranslateX);
        setDisableNext(translateX <= maxTranslateX);
    }, [translateX, minTranslateX, maxTranslateX]);

    const transformStyle = { transform: `translateX(${translateX}vw)` };

    return (
        <li className="flex flex-col h-full" style={{width: "calc(100% / 3)"}}>
            <div className="flex flex-col w-22vw h-full mx-auto rounded-t-1vw overflow-hidden">
                <div className="relative w-full h-13vw border-secondary overflow-hidden">
                    {article.length > 1 && (
                        <Button styleBtn="absolute top-50% left-3% translate-y-1/2min flex w-2vw h-2vw rounded-full bg-primary shadow-0/4vwBlack cursor-pointer duration-300 opacity-60 z-10 hover:opacity-100"  onclick={handlePrevClick} disabled={disablePrev}>
                            <Arrow styleSvg="my-auto mx-auto" width="45%" height="45%" />
                        </Button>
                    )}
                    <ul className="flex h-full duration-300" style={{ width: originalWidth, ...transformStyle }}>
                        {article.map((article, index) => (
                            <ListPictureArticle 
                                key={index}
                                src={article.src}
                            />
                        ))}
                    </ul>
                    {article.length > 1 && (
                        <Button styleBtn="absolute top-50% right-3% translate-y-1/2min flex w-2vw h-2vw rounded-full bg-primary shadow-0/4vwBlack cursor-pointer duration-300 opacity-60 hover:opacity-100"  onclick={handleNextClick} disabled={disableNext}>
                            <Arrow styleSvg="my-auto mx-auto rotate-180" width="45%" height="45%" />
                        </Button>
                    )}
                </div>
                <div className="relative flex justify-between w-full h-2vw px-1/5vw bg-black">
                    <div className="absolute left-0 mx-1/5vw mt-0/5vw px-1vw py-0/5vw text-0/7vw font-light rounded-0/5vw text-white bg-secondary">{release}</div>
                    <div className="absolute right-0 mx-1/5vw mt-0/5vw px-1vw py-0/5vw text-0/7vw font-light rounded-0/5vw text-white bg-primary">{minuteRead} Min Read</div>
                </div>
                <div className="flex px-1/5vw py-1vw w-full h-15vw bg-black rounded-b-1vw overflow-hidden">
                    <span className="mx-auto my-auto text-ellipsis text-0/9vw text-white line-clamp-9 overflow-hidden">
                        {description}
                    </span>
                </div>
                <div className="flex w-full h-5vw">
                    <a href="/article" className="flex justify-center gap-x-0/5vw w-full mt-auto py-1vw duration-300 bg-secondary rounded-full hover:bg-black hover:opacity-80">
                        <Book width="1vw" height="1vw"/>
                        <span className="text-white text-0/9vw">Read More</span>
                    </a>
                </div>
            </div>
        </li>
    )
}

export default ListArticle;
