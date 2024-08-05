import { useEffect, useState, useMemo } from "react";
import Button from "../../../Elements/Button/Button";

const SlideShowBtn = ({ styleBtn, isActive, onClick }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    const activeClass = useMemo(() => {
        return isMobile
            ? isActive ? "bg-primary" : "bg-secondary shadow-3vwSecondary"
            : isActive ? "bg-primary" : "bg-secondary shadow-0/2vwSecondary";
    }, [isMobile, isActive]);

    return (
        <li>
            <Button
                typeBtn="button"
                onclick={onClick}
                styleBtn={`flex w-0/5vw h-0/5vw rounded-full duration-100 hover:opacity-80 ${styleBtn} ${activeClass}`}
            />
        </li>
    );
}

export default SlideShowBtn;
