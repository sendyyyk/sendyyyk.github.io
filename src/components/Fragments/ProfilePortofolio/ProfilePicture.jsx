import { Fragment, useRef, useEffect, useState } from "react";
import Button from "../../Elements/Button/Button";
import Camera from "../../Elements/Icon/Camera";

const ProfilePicture = (props) => {
    const { src, styleProfile, styleProfile2, profileBtn, top } = props;
    const imgRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [resizedSrc, setResizedSrc] = useState('');
    const [defaultSrc, setDefaultSrc] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(document.fullscreenElement !== null);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
        };
    }, []);

    useEffect(() => {
        const img = new Image();
        img.src = `/img-vid/image/profile-picture/${src}`;
        img.onload = () => {
            const maxDimension = 360; // Sesuaikan dengan resolusi yang diinginkan
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            let { width, height } = img;

            // Menyimpan gambar dengan resolusi default
            setDefaultSrc(img.src);

            // Menyesuaikan ukuran gambar jika melebihi dimensi maksimum
            if (width > height) {
                if (width > maxDimension) {
                    height *= maxDimension / width;
                    width = maxDimension;
                }
            } else {
                if (height > maxDimension) {
                    width *= maxDimension / height;
                    height = maxDimension;
                }
            }

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            // Mengonversi canvas menjadi data URL
            setResizedSrc(canvas.toDataURL('image/jpeg'));
        };
    }, [src]);

    const handleFullScreenClick = () => {
        if (imgRef.current) {
            if (isFullscreen) {
                document.exitFullscreen();
            } else {
                if (imgRef.current.requestFullscreen) {
                    imgRef.current.requestFullscreen();
                } else if (imgRef.current.mozRequestFullScreen) {
                    imgRef.current.mozRequestFullScreen();
                } else if (imgRef.current.webkitRequestFullscreen) {
                    imgRef.current.webkitRequestFullscreen();
                } else if (imgRef.current.msRequestFullscreen) {
                    imgRef.current.msRequestFullscreen();
                }
            }
        }
    };

    // Memperbarui src gambar berdasarkan mode fullscreen
    const imageSrc = isFullscreen ? defaultSrc : resizedSrc;

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);

    return (
        <Fragment>
            {!isMobile ? (
                <div className={`flex ms-auto px-1vw py-1vw rounded-full backdrop-blur-0/5vw before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full before:w-20vw before:h-20vw before:z-10min before:shadow-0/2vwSecondary ${styleProfile} `} style={{ width: "20vw", height: "20vw", top: `${top}` }}>
                    <div className={`profile relative mx-auto my-auto rounded-full overflow-hidden duration-300 hover:before:block before:content-[''] before:absolute before:hidden before:top-0 before:left-0 before:w-full before:h-full before:bg-transpBlack before:z-10 ${styleProfile2}`} style={{ width: "18vw", height: "18vw", boxShadow: "0 0 0.7vw 0.1vw white" }}>
                        <img ref={imgRef} src={imageSrc} alt="Profile Picture" className={isFullscreen ? "max-w-full max-h-full" : "w-full h-full object-cover"} />
                        <Button styleBtn={`absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2min w-3vw h-3vw rounded-full bg-black z-10 opacity-40 hover:opacity-100 ${profileBtn}`} onclick={handleFullScreenClick}>
                            <Camera width="50%" height="50%" styleSvg="mx-auto my-auto" />
                        </Button>
                    </div>
                </div>
            ) : (
                <div className={`flex ms-auto px-1vw py-1vw rounded-full backdrop-blur-0/5vw before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full before:w-50vw before:h-50vw before:z-10min before:shadow-3vwSecondary ${styleProfile} `} style={{ width: "50vw", height: "50vw", top: `${top}`, left: "5vw" }}>
                    <div className={`profile relative mx-auto my-auto rounded-full overflow-hidden duration-300 hover:before:block before:content-[''] before:absolute before:hidden before:top-0 before:left-0 before:w-full before:h-full before:bg-transpBlack before:z-10 ${styleProfile2}`} style={{ width: "45vw", height: "45vw", boxShadow: "0 0 0.7vw 0.1vw white" }}>
                        <img ref={imgRef} src={imageSrc} alt="Profile Picture" className={isFullscreen ? "max-w-full max-h-full" : "w-full h-full object-cover"} />
                        <Button styleBtn={`absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2min w-10vw h-10vw rounded-full bg-black z-10 opacity-60 hover:opacity-100 ${profileBtn}`} onclick={handleFullScreenClick}>
                            <Camera width="50%" height="50%" styleSvg="mx-auto my-auto" />
                        </Button>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default ProfilePicture;
