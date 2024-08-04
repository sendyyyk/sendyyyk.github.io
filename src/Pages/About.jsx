import { Fragment, useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import Container from "../components/Layouts/Container/Container";
import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/About/Main";
import Footer from "../components/Layouts/Footer/Footer";
import FooterMobile from "../components/Layouts/Footer/FooterMobile";

const About = () => {
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
                <Container>
                    <Header></Header>
                    <Main></Main>
                    <Footer darkFont="xdrk-c1-css" styleFooter="mt-7vw" fillSvg="xdrk-fll1-css" borderColor="xdrk-bdr1-css"></Footer>
                </Container>
            ) : (
                <Container styleScroll={"h-full !w-screen"} hidden={true}>
                    <Header></Header>
                    <Main></Main>
                    <FooterMobile darkFont="xdrk-c1-css" styleFooter="px-5vw" fillSvg="xdrk-fll1-css" borderColor="xdrk-bdr1-css"></FooterMobile>
                </Container>
            )}
        </Fragment>
    )
}

export default About;