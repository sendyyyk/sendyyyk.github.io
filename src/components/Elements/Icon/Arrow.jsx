const Arrow = (props) => {
    const { styleSvg, width, height } = props;

    return (
        <svg className={styleSvg} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="left-sign" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.86,2.49A1,1,0,0,0,19,2H10a1,1,0,0,0-.87.51l-5,9s0,.07,0,.11a1.39,1.39,0,0,0-.06.19.91.91,0,0,0,0,.38,1.39,1.39,0,0,0,.06.19s0,.07,0,.11l5,9A1,1,0,0,0,10,22h9a1,1,0,0,0,.86-.49,1,1,0,0,0,0-1L15.14,12l4.73-8.51A1,1,0,0,0,19.86,2.49Z" style={{ fill: '#fff' }}></path></g></svg>
    )
}

export default Arrow;