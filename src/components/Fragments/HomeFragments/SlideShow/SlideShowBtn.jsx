import Button from "../../../Elements/Button/Button";

const SlideShowBtn = ({ styleBtn, isActive, onClick }) => {
    const activeClass = isActive ? "bg-primary" : "bg-secondary shadow-0/2vwSecondary";
    return (
        <li>
            <Button typeBtn="button" onclick={onClick} styleBtn={`flex w-0/5vw h-0/5vw rounded-full duration-100 hover:opacity-80 ${styleBtn} ${activeClass}`}></Button>
        </li>
    )
}

export default SlideShowBtn;