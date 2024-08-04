const ListPictureArticle = (props) => {
    const {src} = props;
    
    return (
        <li className="w-full h-full bg-red-400">
            <img src={`img-vid/image/article/${src}`} alt="article-image" className="w-full h-full"/>
        </li>
    )
}

export default ListPictureArticle;