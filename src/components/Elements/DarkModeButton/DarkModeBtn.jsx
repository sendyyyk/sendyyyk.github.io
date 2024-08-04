import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import Button from "../Button/Button";
import Moon from "../Icon/Moon";
import Sun from "../Icon/Sun";

const DarkModeBtn = (props) => {
    const {styleDarkMode, fill} = props;
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Button typeBtn="button" onclick={toggleTheme} styleBtn={`flex my-auto w-1/5vw h-1/5vw bg-white rounded-full duration-300 ${styleDarkMode} hover:opacity-50`}>
            {theme === 'dark' ? (
                <Sun styleSvg="my-auto mx-auto" fill={fill} width="50%" height="50%" />
            ) : (
                <Moon styleSvg="my-auto mx-auto" fill={fill} width="50%" height="50%" />
            )}
        </Button>
    )
}

export default DarkModeBtn;