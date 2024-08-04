import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Elements/DarkModeButton/ThemeProvider';
import ScrollPage from '../../Fragments/ScrollPage/ScrollPage';

const Container = (props) => {
    const { children, hidden, styleScroll = "h-screen" } = props;
    const { theme } = useContext(ThemeContext);

    const [displayData, setDisplayData] = useState(null);

    const handleDisplay = ({ src, caption }) => {
        setDisplayData({ src, caption });
    };

    const closeDisplay = () => {
        setDisplayData(null);
        window.history.back();
    };

    return (
        <div className={`container-def fixed w-full ${styleScroll} overflow-y-auto overflow-x-hidden duration-500 ${theme === 'dark' ? 'bg-grey' : 'bg-white'}`}>
            {children}
            <ScrollPage hidden={hidden} />
        </div>
    )
}

export default Container;