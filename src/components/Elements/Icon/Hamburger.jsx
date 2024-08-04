const Hamb = (props) => {
    const {styleSvg, width, height} = props;

    return (
        <svg className={`${styleSvg}`} width={`${width}`} height={`${height}`} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Menu</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Menu"> <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"> </rect> <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="#fff" stroke-width="2" stroke-linecap="round"> </line> <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="#fff" stroke-width="2" stroke-linecap="round"> </line> <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="#fff" stroke-width="2" stroke-linecap="round"> </line> </g> </g> </g></svg>
    )
}

export default Hamb;
