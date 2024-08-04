const ImageNotFound = (props) => {
    const { styleSvg, width, height } = props;

    return (
        <svg className={`${styleSvg}`} width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM18 3H11V8C11 8.55228 10.5523 9 10 9H5V14.5858L7.79289 11.7929C8.18342 11.4024 8.81658 11.4024 9.20711 11.7929L13 15.5858L14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L19 17.5858V4C19 3.44772 18.5523 3 18 3ZM5 20V17.4142L8.5 13.9142L12.2929 17.7071C12.6834 18.0976 13.3166 18.0976 13.7071 17.7071L15 16.4142L18.9269 20.3411L18.9367 20.3508C18.7946 20.7301 18.4288 21 18 21H6C5.44772 21 5 20.5523 5 20ZM6.41421 7H9V4.41421L6.41421 7ZM14.5 13C15.3284 13 16 12.3284 16 11.5C16 10.6716 15.3284 10 14.5 10C13.6716 10 13 10.6716 13 11.5C13 12.3284 13.6716 13 14.5 13Z" fill="#fff"></path> </g></svg>
    )
}

export default ImageNotFound;


