import { Fragment, useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import Container from "../components/Layouts/Container/Container";
import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Home/Main";

const Home = () => {
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
                <title>Sendy Kurniawan</title>
            </Helmet>
            {!isMobile ? (
                <Container>
                    <Header></Header>
                    <Main></Main>
                    {/* Footer Ada Di Dalam Main */}
                </Container>
            ) : (
                <Container styleScroll={"h-full !w-screen"} hidden={true}>
                    <Header></Header>
                    <Main></Main>
                    {/* Footer Ada Di Dalam Main */}
                </Container>
            )}
        </Fragment>
    )
}

export default Home;