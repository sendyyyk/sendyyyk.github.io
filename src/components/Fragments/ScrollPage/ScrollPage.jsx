import { useState } from 'react';
import Button from "../../Elements/Button/Button";
import ArrowScroll from "../../Elements/Icon/ArrowScroll";

const ScrollPage = (props) => {
    const { hidden } = props;

    const [isHovered, setIsHovered] = useState(false);

    // Fungsi untuk scroll ke atas
    const scrollToTop = () => {
        document.querySelector(".container-def").scrollTo({
            top: 0,
            behavior: 'smooth' // Mengatur scroll agar halus
        });
    };

    // Hanya render div jika hidden bernilai false
    if (hidden) {
        return null;
    }

    return (
        <div
            className={"fixed right-1% bottom-0 flex w-5vw h-5vw overflow-hidden"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Button
                styleBtn={`flex justify-center items-center w-3vw h-3vw mx-auto my-auto duration-300 rounded-full overflow-hidden bg-secondary z-10 shadow-0/1vw hover:opacity-80 ${isHovered ? 'translate-y-0' : 'translate-y-2/4'}`}
                onclick={scrollToTop} // Tambahkan handler klik
            >
                <ArrowScroll width="70%" height="70%"/>
            </Button>
        </div>
    );
};

export default ScrollPage;
