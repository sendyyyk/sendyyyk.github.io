const Waves = (props) => {
    const {styleSvg, width, height, viewbox4, heightRect=320, yRect=0, xRect=0} = props;

    return (
        <svg className={`${styleSvg}`} width={`${width}`} height={`${height}`} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 1420 ${viewbox4}`}>
            <path fill="#24377b" fill-opacity="1" d="M0,96L34.3,85.3C68.6,75,137,53,206,80C274.3,107,343,181,411,181.3C480,181,549,107,617,112C685.7,117,754,203,823,213.3C891.4,224,960,160,1029,128C1097.1,96,1166,96,1234,117.3C1302.9,139,1371,181,1406,202.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            <rect x={`${xRect}`} y={`${yRect}`} width="1420" height={`${heightRect}`} fill="#24377b"/>
        </svg>
    )
}

export default Waves;