const SlideShowContent = (props) => {
    const { children, type, href } = props;

    return (
        <li className="w-full h-full">
            <a href={`${href}`} data-type={type} className="relative w-full h-full hover:before:block before:content-[''] before:absolute before:top-0 before:hidden before:w-full before:h-full before:bg-transpBlack before:z-10">
                {children}
            </a>
        </li>
    )
}

export default SlideShowContent;