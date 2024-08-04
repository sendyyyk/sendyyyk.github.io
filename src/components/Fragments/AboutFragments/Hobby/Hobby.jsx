import { Fragment, useState, useEffect } from "react";
import PlayingGames from "./Hobby/PlayingGames";

const Hobby = (props) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedHobby, setSelectedHobby] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const hobby = [
        { href: "/hobby/playing-game", bgImage: "playing-game.png", text: "Playing Games" },
    ];

    const handleClick = (event, hobby) => {
        event.preventDefault();
        setSelectedHobby(hobby);
    };

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <div className="flex flex-col gap-y-3vw w-full" style={{ marginTop: "10vw" }}>
                    <span className="flex mx-auto text-3vw cinzel-Decorative-font xdrk-c1-css">HOBBY</span>
                    <div className="flex w-full">
                        {hobby.map((item, index) => (
                            <div key={index} className="flex justify-center h-7vw" style={{ width: "calc(100% / 4)" }}>
                                <a
                                    href={item.href}
                                    className="relative h-full w-11/12 shadow-0/2vwPrimary duration-300 hover:shadow-none before:content-[''] before:absolute before:w-full before:h-full before:bg-transpBlack rounded-1vw overflow-hidden"
                                    style={{ backgroundImage: `url('/img-vid/image/hobby-background/${item.bgImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={(event) => handleClick(event, item.text)}
                                >
                                    <span className={`absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white font-semibold whitespace-nowrap text-1/3vw baskervville-font z-10 duration-300 ${hoveredIndex === index ? 'rotate-360' : ''}`}>
                                        {item.text}
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-y-13vw w-full" style={{ marginTop: "20vw" }}>
                    <span className="flex mx-auto text-10vw cinzel-Decorative-font xdrk-c1-css">HOBBY</span>
                    <div className="flex justify-center w-full">
                        {hobby.map((item, index) => (
                            <div key={index} className="flex justify-center w-full h-45vw">
                                <a
                                    href={item.href}
                                    className="relative h-full w-11/12 shadow-3vwPrimary duration-300 hover:shadow-none before:content-[''] before:absolute before:w-full before:h-full before:bg-transpBlack rounded-3vw overflow-hidden"
                                    style={{ backgroundImage: `url('/img-vid/image/hobby-background/${item.bgImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={(event) => handleClick(event, item.text)}
                                >
                                    <span className={`absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white font-semibold whitespace-nowrap text-7vw baskervville-font z-10 duration-300 ${hoveredIndex === index ? 'rotate-360' : ''}`}>
                                        {item.text}
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {selectedHobby === "Playing Games" && <PlayingGames nameHobby={selectedHobby} closeDetail={() => setSelectedHobby(null)} />}
        </Fragment>
    )
}

export default Hobby;