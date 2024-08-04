import React, { Fragment, useState, useEffect } from 'react';

const ListHobby = (props) => {
    const {src, name, nameHobby, cat} = props;
    const [link, setLink] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=> {
        if(cat == "desktop") {
            if (nameHobby == "Playing Games") {
                setLink("/img-vid/image/hobby/playing-games/desktop/")
            } 
        } else {
            if (nameHobby == "Playing Games") {
                setLink("/img-vid/image/hobby/playing-games/mobile/")
            } 
        }
    }, [nameHobby])

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
        setIsMobile(mobileDevices.test(userAgent));
    }, []);
    
    return (
        <Fragment>
            {!isMobile ? (
                <li className="flex flex-col w-15vw h-full">
                    <div className='flex w-4/5 h-4/5 mx-auto rounded-1vw overflow-hidden'>
                        <img src={`${link}${src}`} alt={`${name}`} className='w-4/5 h-4/5 object-cover m-auto'/>
                    </div>
                    <div className='flex w-full h-1/5'>
                        <span className='w-4/5 my-auto mx-auto text-ellipsis text-center text-overflow text-1/3vw text-white baskervville-font font-semibold line-clamp-1' title={name}>
                            {name}
                        </span>
                    </div>
                </li>
            ) : (
                <li className="flex flex-col w-40vw h-40vw mx-auto">
                    <div className='flex w-4/5 h-4/5 mx-auto rounded-3vw overflow-hidden'>
                        <img src={`${link}${src}`} alt={`${name}`} className='w-4/5 h-4/5 object-cover m-auto'/>
                    </div>
                    <div className='flex w-full h-1/5'>
                        <span className='w-4/5 my-auto mx-auto text-ellipsis text-center text-overflow text-5vw text-white baskervville-font font-semibold line-clamp-1' title={name}>
                            {name}
                        </span>
                    </div>
                </li>
            )}

        </Fragment>
    );
};

export default ListHobby;
