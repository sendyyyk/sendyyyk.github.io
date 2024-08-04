import { Fragment } from "react";
import NoSignalVideo from "./NoSignalVideo";
import VideoJSsimple from "../../VideoJS/VideoSimple/Video";

const AboutVideo = (props) => {
    const {src1, src2, styleWidthVid1="23vw", styleWidthVid2 = "16vw", styleHeightVid1 = "11.7vw", styleHeightVid2 = "8vw", styleMarginTopVid1="4.1vw", styleMarginTopVid2="19.9vw", styleMarginLeftVid1="6.5vw", styleMarginLeftVid2="10vw" } = props;

    return (
        <Fragment>
            <div className="absolute top-0 flex bg-black overflow-hidden" style={{width: styleWidthVid1, height: styleHeightVid1, marginTop: styleMarginTopVid1, marginLeft: styleMarginLeftVid1}}>
                {src1 ? (
                    <VideoJSsimple
                        styleVideo="w-full h-full object-cover"
                        src={`/img-vid/video/videos/${src1}`}
                        muted
                        autoPlay
                        loop
                    />
                ) : (
                    <NoSignalVideo />
                )}
            </div>
            <div className="absolute top-0 flex bg-black" style={{width: styleWidthVid2, height: styleHeightVid2, marginTop: styleMarginTopVid2, marginLeft: styleMarginLeftVid2}}>
                {src2 ? (
                    <VideoJSsimple
                        styleVideo="w-full h-full object-cover"
                        src={`/img-vid/video/videos/${src2}`}
                        muted
                        autoPlay
                        loop
                    />
                ) : (
                    <NoSignalVideo />
                )}
            </div>
            <img src="/img-vid/image/about-image/television-background.png" alt="image"/>
        </Fragment>
    )
}
    
export default AboutVideo;