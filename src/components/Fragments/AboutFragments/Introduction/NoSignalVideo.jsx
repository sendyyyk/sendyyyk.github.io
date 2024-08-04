const NoSignalVideo = (props) => {

    return (
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2min flex flex-col gap-y-0/5vw my-auto mx-auto">
            <div className="w-3vw h-3vw mx-auto">
                <img src="/img-vid/image/signal/signal.gif" alt="signal" width="50%" height="50%" className="w-full h-full"/>
            </div>
            <span className="text-white mx-auto whitespace-nowrap text-0/9vw">No Signal</span>
        </div>
    )
}
    
export default NoSignalVideo;