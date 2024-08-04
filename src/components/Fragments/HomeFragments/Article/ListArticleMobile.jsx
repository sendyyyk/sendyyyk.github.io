import { useEffect, useState } from "react";
import Button from "../../../Elements/Button/Button";
import Arrow from "../../../Elements/Icon/Arrow";
import Book from "../../../Elements/Icon/Book";
import ListPictureArticle from "./ListPictureArticle";

const ListArticleMobile = (props) => {
    const { src = ["article-1.png"], description = "Not Yet Known", release = "Not Yet Known", minuteRead = 0, styleArt = 3, styleArtDiv1, styleArtDiv1_1, styleArtDiv1_1Btn } = props;
    const [translateX, setTranslateX] = useState(0);

    const srcArray = Array.isArray(src) ? src : [src];
    
    const article = srcArray.map(image => ({ src: image }));

    const calculateWidth = (length) => {
        const additionalWidth = length > 1 ? (length - 1) * 90 : 0;
        return `calc(100% + ${additionalWidth}vw)`;
    };
    
    const originalWidth = calculateWidth(article.length);

    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);

    const maxTranslateX = -((article.length - 1) * 90);
    const minTranslateX = 0;

    const handlePrevClick = () => {
        setTranslateX(prev => Math.min(prev + 90, minTranslateX));
    };

    const handleNextClick = () => {
        setTranslateX(prev => Math.max(prev - 90, maxTranslateX));
    };

    useEffect(() => {
        setDisablePrev(translateX >= minTranslateX);
        setDisableNext(translateX <= maxTranslateX);
    }, [translateX, minTranslateX, maxTranslateX]);

    const transformStyle = { transform: `translateX(${translateX}vw)` };

    return (
        <li className="flex flex-col h-full w-full">
            <div className="flex flex-col w-full h-full mx-auto rounded-t-3vw overflow-hidden">
                <div className="relative w-full h-50vw border-secondary overflow-hidden">
                    {article.length > 1 && (
                        <Button styleBtn="absolute top-50% left-3% translate-y-1/2min flex w-10vw h-10vw rounded-full bg-primary shadow-0/4vwBlack cursor-pointer duration-300 opacity-60 z-10 hover:opacity-100"  onclick={handlePrevClick} disabled={disablePrev}>
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
                        <Button styleBtn="absolute top-50% right-3% translate-y-1/2min flex w-10vw h-10vw rounded-full bg-primary shadow-0/4vwBlack cursor-pointer duration-300 opacity-60 hover:opacity-100 ${styleArtDiv1_1Btn}"  onclick={handleNextClick} disabled={disableNext}>
                            <Arrow styleSvg="my-auto mx-auto rotate-180" width="45%" height="45%" />
                        </Button>
                    )}
                </div>
                <div className="relative flex justify-between w-full h-12vw px-5vw bg-black">
                    <div className="absolute left-0 mx-3vw mt-3vw px-7vw py-2vw text-3vw font-light rounded-2vw text-white bg-secondary">{release}</div>
                    <div className="absolute right-0 mx-3vw mt-3vw px-7vw py-2vw text-3vw font-light rounded-2vw text-white bg-primary">{minuteRead} Min Read</div>
                </div>
                <div className="flex px-4vw py-3vw w-full h-60vw bg-black rounded-b-3vw overflow-hidden">
                    <span className="mx-auto my-auto text-ellipsis text-4vw text-white line-clamp-9 overflow-hidden">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusamus eum aut. Adipisci officiis dignissimos culpa consequuntur praesentium temporibus delectus ratione? A dolor similique voluptas nesciunt molestias nulla voluptatibus placeat dignissimos accusamus expedita laudantium culpa consectetur delectus, totam natus facere exercitationem at deserunt sapiente eos, labore magnam aliquid. Repudiandae, alias ullam, temporibus exercitationem repellat consequatur eveniet odit soluta sed, ipsum quae ab dolores recusandae dolor fuga inventore expedita? Commodi provident dolorum nostrum architecto explicabo quos consequuntur debitis quisquam molestias magni esse quia repellendus reiciendis voluptates sapiente, necessitatibus incidunt dicta magnam! Rem blanditiis ipsum repudiandae. Molestiae eos quos esse sit eaque architecto voluptas accusamus saepe, reprehenderit nisi, nulla ab laboriosam porro commodi maiores asperiores sed fugit. Doloribus nesciunt perferendis saepe veritatis quia ipsam, dolore quo nemo minus qui temporibus voluptatum tempora iste sint rerum! Accusantium repellat atque illo similique voluptates saepe quod dolore eligendi explicabo, delectus veniam accusamus quidem a molestias praesentium, sapiente soluta excepturi natus alias? Quisquam, aperiam nesciunt corporis earum ab reprehenderit mollitia nostrum excepturi aliquid atque? Numquam natus ullam amet, veniam ipsa impedit. Aliquid dolorem eos iure asperiores dolor! Quos facilis dolorum vitae ipsam molestiae vel, fugiat nisi! Alias quasi est possimus libero. Quam, dignissimos deserunt nesciunt neque optio eum tempora nulla nisi eligendi rerum praesentium dicta debitis corporis nemo. Delectus asperiores deleniti, est autem laborum quisquam fuga veritatis ad illum, quasi vero dolorum nobis quibusdam doloribus. Optio nisi expedita pariatur asperiores repellat, maxime ullam sint odio sequi hic illo quod doloremque modi vero magnam veritatis dolore enim eum nobis voluptatem accusamus corporis distinctio voluptatibus et. Quibusdam explicabo tempora iure exercitationem reiciendis? Odio distinctio, fugiat iure tempore commodi beatae nulla maiores velit, minus consequuntur vitae nostrum optio rerum nesciunt laboriosam voluptatem! Illo corrupti voluptatibus fugiat ad sequi neque delectus totam vero repellendus cumque tempora, recusandae at, amet molestiae, labore cupiditate suscipit? Optio magni architecto maiores, reprehenderit ipsum tempore, qui minus cupiditate, alias tempora incidunt in! Optio tempore tempora unde voluptas quas iste explicabo possimus ad. Fugiat, numquam praesentium vel sit nihil nisi delectus adipisci sint unde accusamus dolore quis soluta architecto atque et, officia dolorum molestiae eveniet sunt quibusdam. Sint inventore repellendus molestias expedita praesentium molestiae libero vero delectus corporis a neque, sapiente quisquam! Quidem, doloremque dolore. Consequuntur alias ipsum obcaecati doloribus hic aspernatur sapiente, dolorum perspiciatis, commodi accusamus recusandae quibusdam vitae quam eum officia dolorem impedit praesentium aliquam ex voluptates animi fugit qui veniam. Quaerat, commodi porro. 
                    </span>
                </div>
                <div className="flex w-full h-20vw">
                    <a href="/article" className="flex justify-center gap-x-2vw w-full mt-auto py-5vw duration-300 bg-secondary rounded-full hover:bg-black hover:opacity-80">
                        <Book width="5vw" height="5vw" styleSvg="my-auto"/>
                        <span className="text-white text-4vw my-auto">Read More</span>
                    </a>
                </div>
            </div>
        </li>
    )
}

export default ListArticleMobile;
