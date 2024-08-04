import FileNotFound from "../../../Elements/Icon/FileNotFound";

const NotFoundGallery = (props) => {
    const { rotate, styleVid= 3.05, styleVideo, text, widthIcon = "3vw", heightIcon = "3vw"} = props;

    return (
        <li className={`flex flex-col w-13vw h-13vw gap-y-1vw justify-center items-center bg-secondary rounded-1vw ${styleVideo}`} style={{ transform: `rotateY(${rotate}deg) rotateZ(${rotate}deg)` }}>
            <FileNotFound width={widthIcon} height={heightIcon} />
            <div className='flex flex-col items-center'>
                <span className={`text-0/7vw font-semibold text-white ${text}`}>Gallery Not Yet Found.</span>
                <span className={`text-0/7vw font-semibold text-white ${text}`}>Please Visit Another Time.</span>
            </div>
        </li>
    )
}

export default NotFoundGallery;