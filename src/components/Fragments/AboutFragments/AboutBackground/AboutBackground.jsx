import React, { useState, useEffect } from 'react';

const AboutBackground = (props) => {
    const { background, styleDiv } = props;
    const [resizedImage, setResizedImage] = useState('');

    useEffect(() => {
        const img = new Image();
        img.src = `/img-vid/image/about-background/${background}`;
        img.onload = () => {
            const maxDimension = 2040;
            const canvas = document.createElement('canvas');
            let { width, height } = img;

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
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            // Mengonversi canvas menjadi data URL dengan format JPEG
            setResizedImage(canvas.toDataURL('image/jpeg'));
        };
    }, [background]);

    return (
        <div className={`w-screen h-45vw mt-10vw ${styleDiv}`}>
            <img src={resizedImage} alt="About Background" className="w-full h-full" />
        </div>
    );
};

export default AboutBackground;
