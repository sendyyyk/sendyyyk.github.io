const ContentVideo = (props) => {
    const {src} = props;

    return (
        <video className="w-full h-full object-cover" muted>
            <source src={src} type="video/mp4"/>
        </video>
    )
}
    
export default ContentVideo;