import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Layouts/Container/Container";
import Header from "../components/Layouts/Header/Header";
import Footer from "../components/Layouts/Footer/Footer";
import FooterMobile from "../components/Layouts/Footer/FooterMobile";

const ErrorPage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    useEffect(() => {
        if (isMobile) {
            document.body.setAttribute('data-device', 'mobile-phn');
        } else {
            document.body.removeAttribute('data-device');
        }
    }, [isMobile]);

    return (
        <Fragment>
            <Helmet>
                <title>About</title>
            </Helmet>
            {!isMobile ? (
                <Container hidden={true}>
                    <Header></Header>
                    <div className="flex flex-col justify-center items-center gap-y-2vw w-full" style={{height: "40vw"}}>
                        <div className="w-5vw h-5vw">
                            <svg fill="#000000" className="xdrk-fll1-css" height="100%" width="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54.971 54.971" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M51.173,3.801c-5.068-5.068-13.315-5.066-18.384,0l-9.192,9.192c-0.781,0.781-0.781,2.047,0,2.828s2.047,0.781,2.828,0 l9.192-9.192c1.691-1.69,3.951-2.622,6.363-2.622c2.413,0,4.673,0.932,6.364,2.623s2.623,3.951,2.623,6.364 c0,2.412-0.932,4.672-2.623,6.363L36.325,31.379c-3.51,3.508-9.219,3.508-12.729,0c-0.781-0.781-2.047-0.781-2.828,0 s-0.781,2.048,0,2.828c2.534,2.534,5.863,3.801,9.192,3.801s6.658-1.267,9.192-3.801l12.021-12.021 c2.447-2.446,3.795-5.711,3.795-9.192C54.968,9.512,53.62,6.248,51.173,3.801z"></path> <path d="M27.132,40.57l-7.778,7.778c-1.691,1.691-3.951,2.623-6.364,2.623c-2.412,0-4.673-0.932-6.364-2.623 c-3.509-3.509-3.509-9.219,0-12.728L17.94,24.306c1.691-1.69,3.951-2.622,6.364-2.622c2.412,0,4.672,0.932,6.363,2.622 c0.781,0.781,2.047,0.781,2.828,0s0.781-2.047,0-2.828c-5.067-5.067-13.314-5.068-18.384,0L3.797,32.793 c-2.446,2.446-3.794,5.711-3.794,9.192c0,3.48,1.348,6.745,3.795,9.191c2.446,2.447,5.711,3.795,9.191,3.795 c3.481,0,6.746-1.348,9.192-3.795l7.778-7.778c0.781-0.781,0.781-2.047,0-2.828S27.913,39.789,27.132,40.57z"></path> <path d="M34.003,44.007c-1.104,0-2,0.896-2,2v6c0,1.104,0.896,2,2,2s2-0.896,2-2v-6C36.003,44.902,35.108,44.007,34.003,44.007z"></path> <path d="M41.175,42.593c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l4.242,4.242c0.391,0.391,0.902,0.586,1.414,0.586 s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L41.175,42.593z"></path> <path d="M45.968,36.007h-6c-1.104,0-2,0.896-2,2s0.896,2,2,2h6c1.104,0,2-0.896,2-2S47.073,36.007,45.968,36.007z"></path> <path d="M18.003,13.007c1.104,0,2-0.896,2-2v-6c0-1.104-0.896-2-2-2s-2,0.896-2,2v6C16.003,12.111,16.899,13.007,18.003,13.007z"></path> <path d="M10.589,14.421c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L9.175,7.35 c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L10.589,14.421z"></path> <path d="M5.968,21.007h6c1.104,0,2-0.896,2-2s-0.896-2-2-2h-6c-1.104,0-2,0.896-2,2S4.864,21.007,5.968,21.007z"></path> </g> </g></svg>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2vw font-semibold text-black xdrk-c1-css">Sorry, the page you are looking for cannot be found.</span>
                            <span className="text-2vw font-semibold text-black xdrk-c1-css"> Please enter the correct URL !</span>
                        </div>
                    </div>
                    <Footer darkFont="xdrk-c1-css" fillSvg="xdrk-fll1-css" borderColor="xdrk-bdr1-css"></Footer>
                </Container>
            ) : (
                <Container hidden={true}>
                    <div className="fixed top-0 w-full h-screen overflow-y-auto">
                        <Header></Header>
                        <div className="flex flex-col justify-center items-center gap-y-5vw w-full " style={{height: "70vmax"}}>
                            <div className="w-10vw h-10vw">
                                <svg fill="#000000" className="xdrk-fll1-css" height="100%" width="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54.971 54.971" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M51.173,3.801c-5.068-5.068-13.315-5.066-18.384,0l-9.192,9.192c-0.781,0.781-0.781,2.047,0,2.828s2.047,0.781,2.828,0 l9.192-9.192c1.691-1.69,3.951-2.622,6.363-2.622c2.413,0,4.673,0.932,6.364,2.623s2.623,3.951,2.623,6.364 c0,2.412-0.932,4.672-2.623,6.363L36.325,31.379c-3.51,3.508-9.219,3.508-12.729,0c-0.781-0.781-2.047-0.781-2.828,0 s-0.781,2.048,0,2.828c2.534,2.534,5.863,3.801,9.192,3.801s6.658-1.267,9.192-3.801l12.021-12.021 c2.447-2.446,3.795-5.711,3.795-9.192C54.968,9.512,53.62,6.248,51.173,3.801z"></path> <path d="M27.132,40.57l-7.778,7.778c-1.691,1.691-3.951,2.623-6.364,2.623c-2.412,0-4.673-0.932-6.364-2.623 c-3.509-3.509-3.509-9.219,0-12.728L17.94,24.306c1.691-1.69,3.951-2.622,6.364-2.622c2.412,0,4.672,0.932,6.363,2.622 c0.781,0.781,2.047,0.781,2.828,0s0.781-2.047,0-2.828c-5.067-5.067-13.314-5.068-18.384,0L3.797,32.793 c-2.446,2.446-3.794,5.711-3.794,9.192c0,3.48,1.348,6.745,3.795,9.191c2.446,2.447,5.711,3.795,9.191,3.795 c3.481,0,6.746-1.348,9.192-3.795l7.778-7.778c0.781-0.781,0.781-2.047,0-2.828S27.913,39.789,27.132,40.57z"></path> <path d="M34.003,44.007c-1.104,0-2,0.896-2,2v6c0,1.104,0.896,2,2,2s2-0.896,2-2v-6C36.003,44.902,35.108,44.007,34.003,44.007z"></path> <path d="M41.175,42.593c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l4.242,4.242c0.391,0.391,0.902,0.586,1.414,0.586 s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L41.175,42.593z"></path> <path d="M45.968,36.007h-6c-1.104,0-2,0.896-2,2s0.896,2,2,2h6c1.104,0,2-0.896,2-2S47.073,36.007,45.968,36.007z"></path> <path d="M18.003,13.007c1.104,0,2-0.896,2-2v-6c0-1.104-0.896-2-2-2s-2,0.896-2,2v6C16.003,12.111,16.899,13.007,18.003,13.007z"></path> <path d="M10.589,14.421c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L9.175,7.35 c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L10.589,14.421z"></path> <path d="M5.968,21.007h6c1.104,0,2-0.896,2-2s-0.896-2-2-2h-6c-1.104,0-2,0.896-2,2S4.864,21.007,5.968,21.007z"></path> </g> </g></svg>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-y-3vw">
                                <span className="text-5vw font-semibold text-black text-center xdrk-c1-css">Sorry, the page you are looking for cannot be found.</span>
                                <span className="text-4vw font-semibold text-black text-center xdrk-c1-css"> Please enter the correct URL !</span>
                            </div>
                        </div>
                        <FooterMobile darkFont="xdrk-c1-css" styleFooter="px-5vw" fillSvg="xdrk-fll1-css" borderColor="xdrk-bdr1-css"></FooterMobile>
                    </div>
                </Container>

            )}
        </Fragment>
    )
}

export default ErrorPage;