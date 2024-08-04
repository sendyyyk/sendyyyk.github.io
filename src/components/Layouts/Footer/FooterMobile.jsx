import React, { useEffect, useState } from "react";
import axios from "axios";
import Flag from "react-world-flags";
import ContainerCenter from "../Container/ContainerCenter";
import Facebook from "../../Elements/Icon/facebook";
import Instagram from "../../Elements/Icon/Instagram";
import Github from "../../Elements/Icon/Github";

const FooterMobile = (props) => {
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
        <footer className={`relative bottom-0 left-0 w-full h-30vw ${styleFooter}`}>
            <ContainerCenter styleContainer="h-full w-full ">
                <div className="relative flex justify-between w-full h-full justify-between">
                    <div className="flex flex-col gap-y-1vw mb-auto" style={{ width: "calc(100% / 2)" }}>
                        <span className={`text-3vw text-black ${darkFont}`}>© CopyRight {currentYear}</span>
                        <div className="flex w-full">
                            <span className="block px-4vw py-1/5vw rounded-full bg-black text-2vw font-semibold text-secondary">version 0.1</span>
                        </div>
                    </div>
                    <div className="absolute bottom-5vw left-1/2 translate-x-1/2min flex flex-col gap-y-1vw my-auto" style={{ width: "calc(100% / 2)" }}>
                        <span className={`mx-auto text-3vw text-black font-semibold ${darkFont}`}>www.sendyyyk.com</span>
                        <div className="flex gap-x-3vw justify-center mx-auto">
                            <span className={`py-1vw text-2vw text-black ${darkFont}`}>IP Address Detected:</span>
                            <div className="flex px-3vw py-1vw gap-x-1vw rounded-1vw bg-black">
                                <span className="text-1/5vw font-semibold text-secondary my-auto">
                                    {ipInfo.ip || "Loading..."}
                                </span>
                                <span className="w-2vw h-2vw flex my-auto">
                                    {ipInfo.country ? (
                                        <Flag code={ipInfo.country} height="100%" width="100%"/>
                                    ) : "Loading..."}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-x-2vw mb-auto" style={{ width: "calc(100% / 2)" }}>
                        <a href="https://www.facebook.com/10110.1001.11111010010.py/" target="_blank" className={`flex w-10vw h-10vw border-0/2vw border-dark ${borderColor} duration-300 rounded-1vw hover:bg-secondary`}>
                            <Facebook styleSvg={`mx-auto my-auto ${fillSvg}`} fillSvg={fillSvg} width="60%" height="60%" />
                        </a>
                        <a href="https://www.instagram.com/sndyyyk" target="_blank" className={`flex w-10vw h-10vw border-0/2vw border-dark ${borderColor} duration-300 rounded-1vw hover:bg-secondary`}>
                            <Instagram styleSvg="mx-auto my-auto" fillSvg={fillSvg} width="60%" height="60%" />
                        </a>
                        <a href="https://www.github.com/" target="_blank" className={`flex w-10vw h-10vw border-0/2vw border-dark ${borderColor} duration-300 rounded-1vw hover:bg-secondary`}>
                            <Github styleSvg="mx-auto my-auto" fillSvg={fillSvg} width="60%" height="60%" />
                        </a>
                    </div>
                </div>
            </ContainerCenter>
        </footer>
    );
}

export default FooterMobile;
