import React, { forwardRef } from 'react';

const ContentVideo = forwardRef((props, ref) => {
    const { src } = props;

    return (
        <video ref={ref} className="w-full h-full object-cover" muted>
            <source src={src} type="video/mp4" />
        </video>
    );
});

export default ContentVideo;
