import React, { Fragment, useState, useEffect } from "react";
import Programming from "./Skills/Programming";
import Networking from "./Skills/Networking";
import GraphicDesign from "./Skills/GraphicDesign";
import Cooking from "./Skills/Cooking";

const Skills = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const media = [
        { href: "/skills/programming", bgImage: "programming.png", text: "Programming" },
        { href: "/skills/networking", bgImage: "networking.png", text: "Networking" },
        { href: "/skills/graphic-design", bgImage: "desaign.png", text: "Graphic Design" },
        { href: "/skills/cooking", bgImage: "cooking.png", text: "Cooking" },
    ];

    const handleClick = (event, skill) => {
        event.preventDefault();
        setSelectedSkill(skill);
    };

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <div className="flex flex-col gap-y-3vw w-full" style={{ marginTop: "20vw" }}>
                    <span className="flex mx-auto text-3vw cinzel-Decorative-font xdrk-c1-css">MY SKILLS</span>
                    <div className="flex w-full">
                        {media.map((item, index) => (
                            <div key={index} className="flex justify-center h-7vw" style={{ width: "calc(100% / 4)" }}>
                                <a
                                    href={item.href}
                                    className="relative h-full w-11/12 shadow-0/2vwSecondary duration-300 hover:shadow-none before:content-[''] before:absolute before:w-full before:h-full before:bg-transpBlack rounded-1vw overflow-hidden"
                                    style={{ backgroundImage: `url('/img-vid/image/skills-background/${item.bgImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}
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
                <div className="flex flex-col gap-y-13vw w-full" style={{ marginTop: "50vw"}}>
                    <span className="flex mx-auto text-10vw cinzel-Decorative-font xdrk-c1-css">MY SKILLS</span>
                    <div className="flex flex-col gap-y-8vw w-full">
                        {media.map((item, index) => (
                            <div key={index} className="flex justify-center w-full h-45vw">
                                <a
                                    href={item.href}
                                    className="relative h-full w-11/12 shadow-3vwSecondary duration-300 hover:shadow-none before:content-[''] before:absolute before:w-full before:h-full before:bg-transpBlack rounded-3vw overflow-hidden"
                                    style={{ backgroundImage: `url('/img-vid/image/skills-background/${item.bgImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}
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
            {selectedSkill === "Programming" && <Programming nameSkills={selectedSkill} closeDetail={() => setSelectedSkill(null)} />}
            {selectedSkill === "Networking" && <Networking nameSkills={selectedSkill} closeDetail={() => setSelectedSkill(null)} />}
            {selectedSkill === "Graphic Design" && <GraphicDesign nameSkills={selectedSkill} closeDetail={() => setSelectedSkill(null)} />}
            {selectedSkill === "Cooking" && <Cooking nameSkills={selectedSkill} closeDetail={() => setSelectedSkill(null)} />}
        </Fragment>
    );
};

export default Skills;
