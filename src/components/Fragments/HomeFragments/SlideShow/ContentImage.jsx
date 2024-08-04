const ContentImage = (props) => {
    const {src} = props;

    return (
        <img src={`${src}`} alt="picture" className="w-full h-full object-cover"/>
    )
}

export default ContentImage;