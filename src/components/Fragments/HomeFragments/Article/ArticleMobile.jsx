import Other from "../../../Elements/Icon/Other";
import ListArticle from "./ListArticle";
import ListArticleMobile from "./ListArticleMobile";
import NotFoundArticle from "./NotFoundArticle";
import Swal from "sweetalert2";
import NotFoundArticleMobile from "./NotFoundArticleMobile";

const ArticleMobile = (props) => {

    const alertClick = (event) => {
        event.preventDefault();
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: 'Sorry, the article page is currently unavailable. Please wait for the next update!',
        });
    };

    const articles = [
        // {
        //     src: ["article-1.png", "article-1.png", "about-background.png"],
        //     minuteRead: "2",
        //     release: "4 March 2024",
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum suscipit nihil molestias laborum odio, illum culpa tempora similique numquam."
        // },
        // {
        //     src: ["article-1.png", "article-1.png"],
        //     minuteRead: "3",
        //     release: "14 December 2024",
        //     description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus laborum corporis pariatur in esse, explicabo totam rem eveniet nobis repellendus maiores ab, ullam, ratione a? Placeat atque, soluta id sed nulla, ab aliquam possimus iusto ipsum facere nemo, suscipit iste ipsam consequatur est perspiciatis! Eligendi cumque ducimus unde distinctio ea voluptatum voluptatem consequuntur aspernatur quam sequi praesentium aut culpa quo saepe autem, asperiores eum nemo cum assumenda itaque ex quibusdam?"
        // },
    ];
    
    return (
        <div className="flex flex-col w-full mt-25vw" style={{marginTop: "45vw"}}>
            <div className="flex w-full h-7vw mb-10vw backdrop-blur-0/2vw">
                <span className="mx-auto payfair-font text-white text-10vw leading-0">Article</span>
            </div>
            <div className="relative flex w-full h-full">
                <ul className="flex flex-col w-full h-full gap-y-5vw">
                    {articles.length === 0 ? (
                        <NotFoundArticleMobile/>
                    ) : (
                        articles.map((article, index) => (
                            <ListArticleMobile
                                key={index}
                                src={article.src}
                                minuteRead={article.minuteRead}
                                release={article.release}
                                description={article.description}
                            />
                        ))
                    )}
                </ul>
            </div>
            <div className="flex w-full h-35vw backdrop-blur-0/5vw">
                <div className="relative w-full h-1/5vw my-auto rounded-full bg-white xdrk-bc1-css">
                    <a href="/profile/article" className="absolute bottom-25min left-50% flex h-10vw w-10vw translate-x-1/2min rounded-full border-1/3vw  border-secondary bg-white xdrk-bc1-css" style={{bottom: "-4vw"}} onClick={alertClick}>
                        <Other width="90%" height="90%" fill="#008080" styleSvg="my-auto mx-auto rounded-full duration-300 hover:rotate-180" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ArticleMobile;