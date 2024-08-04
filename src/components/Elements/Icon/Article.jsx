const Article = (props) => {
    const {styleSvg, width, height, fill="#fff"} = props;

    return (
        <svg className={`${styleSvg}`} width={`${width}`} height={`${height}`} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill={fill}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <polygon class="st0" points="93.539,218.584 275.004,218.584 354.699,138.894 355.448,138.145 355.448,125.045 93.539,125.045 "></polygon> <polygon class="st0" points="402.213,433.724 46.77,433.724 46.77,78.276 402.213,78.276 402.213,91.467 448.983,56.572 448.983,31.506 0,31.506 0,480.494 448.983,480.494 448.983,289.204 402.213,335.974 "></polygon> <path class="st0" d="M229.358,274.708H93.539v28.062h120.476C218.602,292.858,223.932,283.312,229.358,274.708z"></path> <path class="st0" d="M93.539,349.539v28.062h110.935c-3.275-8.796-4.302-18.334-3.649-28.062H93.539z"></path> <path class="st0" d="M290.939,268.789c-15.501,15.501-55.612,80.76-40.11,96.27c15.51,15.51,80.76-24.609,96.27-40.11l63.755-63.77 l-56.155-56.15L290.939,268.789z"></path> <path class="st0" d="M500.374,115.509c-15.511-15.502-40.649-15.502-56.15,0l-76.682,76.685l56.156,56.15l76.676-76.685 C515.875,156.158,515.875,131.019,500.374,115.509z M400.166,202.361l-9.636-9.628l53.684-53.684l9.619,9.618L400.166,202.361z"></path> </g> </g></svg>
    )
}

export default Article;