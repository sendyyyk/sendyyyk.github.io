import React, { useEffect, useState } from "react";
import axios from "axios";
import Flag from "react-world-flags";
import ContainerCenter from "../Container/ContainerCenter";
import Facebook from "../../Elements/Icon/facebook";
import Instagram from "../../Elements/Icon/Instagram";
import Github from "../../Elements/Icon/Github";

const Footer = (props) => {
    const {darkFont, styleFooter, fillSvg, borderColor} = props;
    const currentYear = new Date().getFullYear();
    const [ipInfo, setIpInfo] = useState({ ip: "", country: "" });

    useEffect(() => {
        const fetchIpInfo = async () => {
            try {
                const response = await axios.get("https://ipinfo.io/json?token=597b248244072b");
                setIpInfo({ ip: response.data.ip, country: response.data.country });
            } catch (error) {
                console.error("Error fetching IP info:", error);
            }
        };

        fetchIpInfo();
    }, []);

    return (
        <footer className={`absolute bottom-0 relative w-full h-12vw ${styleFooter}`}>
            <ContainerCenter styleContainer="h-full">
                <div className="flex w-full h-full justify-between">
                    <div className="flex flex-col gap-y-1vw my-auto" style={{ width: "calc(100% / 3)" }}>
                        <span className={`text-1/3vw text-black ${darkFont}`}>© CopyRight {currentYear}</span>
                        <div className="flex w-full">
                            <span className="block px-1/5vw py-0/5vw rounded-full bg-black text-0/7vw font-semibold text-secondary">version 0.1</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-0/7vw my-auto" style={{ width: "calc(100% / 3)" }}>
                        <span className={`mx-auto text-1/5vw text-black ${darkFont}`}>www.sendyyyk.com</span>
                        <div className="flex gap-x-1vw justify-center mx-auto">
                            <span className={`py-0/5vw text-0/9vw text-black ${darkFont}`}>IP Address Detected:</span>
                            <div className="flex px-1/5vw py-0/5vw gap-x-0/5vw rounded-0/5vw bg-black">
                                <span className="text-0/9vw font-semibold text-secondary">
                                    {ipInfo.ip || "Loading..."}
                                </span>
                                <span className="w-1vw h-1vw flex my-auto">
                                    {ipInfo.country ? (
                                        <Flag code={ipInfo.country} height="100%" width="100%"/>
                                    ) : "Loading..."}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-x-1vw my-auto" style={{ width: "calc(100% / 3)" }}>
                        <a href="https://www.facebook.com/10110.1001.11111010010.py/" target="_blank" className={`flex w-3vw h-3vw border-0/1vw border-dark ${borderColor} duration-300 rounded-0/5vw hover:bg-secondary`}>
                            <Facebook styleSvg={`mx-auto my-auto ${fillSvg}`} fillSvg={fillSvg} width="60%" height="60%" />
                        </a>
                        <a href="https://www.instagram.com/sndyyyk" target="_blank" className={`flex w-3vw h-3vw border-0/1vw border-dark ${borderColor} duration-300 rounded-0/5vw hover:bg-secondary`}>
                            <Instagram styleSvg="mx-auto my-auto" fillSvg={fillSvg} width="60%" height="60%" />
                        </a>
                        <a href="https://www.github.com/" target="_blank" className={`flex w-3vw h-3vw border-0/1vw border-dark ${borderColor} duration-300 rounded-0/5vw hover:bg-secondary`}>
                            <Github styleSvg="mx-auto my-auto" fillSvg={fillSvg} width="60%" height="60%" />
                        </a>
                    </div>
                </div>
            </ContainerCenter>
        </footer>
    );
}

export default Footer;
