import FileNotFound from "../../../Elements/Icon/FileNotFound";

const NotFoundVideo = (props) => {
    const { rotate, styleVid= 3.05, styleVideo, text, widthIcon = "3vw", heightIcon = "3vw" } = props;

    return (
        <li className={`flex flex-col gap-y-1vw justify-center items-center w-full h-15vw bg-secondary rounded-1vw ${styleVideo}`} style={{ width: `calc(100% / ${styleVid})`, transform: `rotateY(${rotate}deg) rotateZ(${rotate}deg)` }}>
            <FileNotFound width={`${widthIcon}`} height={`${heightIcon}`} />
            <div className='flex flex-col items-center'>
                <span className={`text-0/7vw font-semibold text-white ${text}`}>Video Not Yet Found.</span>
                <span className={`text-0/7vw font-semibold text-white ${text}`}>Please Visit Another Time.</span>
            </div>
        </li>
    )
}

export default NotFoundVideo;