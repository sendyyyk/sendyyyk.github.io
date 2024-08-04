import Button from "../Button/Button";
import Hamb from "../Icon/Hamburger";

const HamburgerBtn = (props) => {
    const {styleHamb, toggleHamb} = props;

    return (
        <Button typeBtn="button" onclick={toggleHamb} styleBtn={`flex my-auto w-2vw h-2vw rounded-full duration-300 hover:opacity-50 ${styleHamb}`}>
            <Hamb width="100%" height="100%" />
        </Button>
    )
}

export default HamburgerBtn;