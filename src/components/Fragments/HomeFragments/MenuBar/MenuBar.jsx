const MenuBar = (props) => {
    const {text, href, styleAnchor} = props;

    return (
        <li className="menuBar">
            <a href={`/${href}`}  className={`${styleAnchor}`}>
                {text}
            </a>
        </li>
    )
}

export default MenuBar;