const Book = (props) => {
    const { styleSvg, width, height, fill = "#24377b" } = props;

    return (
        <svg className={`${styleSvg}`} width={`${width}`} height={`${height}`} version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#ffffff" d="M31,7.663L2.516,0.067c-0.17-0.045-0.343-0.066-0.515-0.066c-0.437,0-0.866,0.142-1.22,0.413 C0.289,0.793,0,1.379,0,2v41.495l31,8.206V7.663z M24.43,40.274C24.304,40.714,23.903,41,23.469,41 c-0.092,0-0.184-0.013-0.275-0.038L8.727,36.829c-0.531-0.152-0.839-0.705-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.133C24.273,39.19,24.581,39.743,24.43,40.274z M24.43,33.274C24.304,33.714,23.903,34,23.469,34 c-0.092,0-0.184-0.013-0.275-0.038L8.727,29.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.134C24.273,32.19,24.581,32.744,24.43,33.274z M24.43,26.274C24.304,26.714,23.903,27,23.469,27 c-0.092,0-0.184-0.013-0.275-0.038L8.727,22.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.834,1.236-0.688 l14.467,4.134C24.273,25.19,24.581,25.744,24.43,26.274z M24.43,19.274C24.304,19.714,23.903,20,23.469,20 c-0.092,0-0.184-0.013-0.275-0.038L8.727,15.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.134C24.273,18.19,24.581,18.744,24.43,19.274z"></path> <path fill="#ffffff" d="M63.219,0.414c-0.354-0.271-0.784-0.413-1.221-0.413c-0.172,0-0.345,0.022-0.514,0.066L33,7.663v44.038 l31-8.206V2C64,1.379,63.711,0.793,63.219,0.414z M39.424,32l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688 c0.151,0.53-0.156,1.084-0.688,1.236l-14.467,4.134c-0.092,0.025-0.184,0.038-0.275,0.038c-0.435,0-0.835-0.286-0.961-0.726 C38.585,32.706,38.893,32.152,39.424,32z M54.742,36.829l-14.467,4.133C40.184,40.987,40.092,41,40,41 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.531,0.156-1.084,0.688-1.236l14.467-4.133c0.528-0.145,1.084,0.155,1.236,0.688 C55.581,36.124,55.273,36.677,54.742,36.829z M54.742,22.828l-14.467,4.134C40.184,26.987,40.092,27,40,27 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.146,1.084,0.155,1.236,0.688 C55.581,22.122,55.273,22.676,54.742,22.828z M54.742,15.828l-14.467,4.134C40.184,19.987,40.092,20,40,20 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688 C55.581,15.122,55.273,15.676,54.742,15.828z"></path> <polygon fill="#ffffff" points="31,53.77 0,45.564 0,47.495 31,55.701 "></polygon> <polygon fill="#ffffff" points="33,55.701 64,47.495 64,45.564 33,53.77 "></polygon> <path fill="#ffffff" d="M35,58.034c0,1.657-1.343,3-3,3s-3-1.343-3-3c0-0.266,0.046-0.52,0.11-0.765L0,49.564v2.435 c0,0.906,0.609,1.699,1.484,1.933l25.873,6.899C28.089,62.685,29.887,64,32,64s3.911-1.315,4.643-3.169l25.873-6.899 C63.391,53.698,64,52.905,64,51.999v-2.435L34.89,57.27C34.954,57.515,35,57.769,35,58.034z"></path> </g> </g></svg>
    )
}

export default Book;