import React, { Fragment, useState, useEffect } from 'react';

const ListSkills = (props) => {
    const {src, name, nameSkills, cat} = props;
    const [link, setLink] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=> {
        if(cat == "hardware") {
            if (nameSkills == "Programming") {
                setLink("/img-vid/image/skills/programming/hardware/")
            } else if (nameSkills == "Networking") {
                setLink("/img-vid/image/skills/networking/hardware/")
            } else if (nameSkills == "Graphic Design") {
                setLink("/img-vid/image/skills/graphic-design/hardware/")
            } else if (nameSkills == "Cooking") {
                setLink("/img-vid/image/skills/cooking/hardware/")
            }
        } else {
            if (nameSkills == "Programming") {
                setLink("/img-vid/image/skills/programming/software/")
            } else if (nameSkills == "Networking") {
                setLink("/img-vid/image/skills/networking/software/")
            } else if (nameSkills == "Graphic Design") {
                setLink("/img-vid/image/skills/graphic-design/software/")
            } else if (nameSkills == "Cooking") {
                setLink("/img-vid/image/skills/cooking/software/")
            }
        }
    }, [nameSkills])

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
                        <span className='w-4/5 my-auto mx-auto text-ellipsis text-center text-overflow text-1/3vw text-white baskervville-font font-semibold line-clamp-1'>
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
                        <span className='w-4/5 my-auto mx-auto text-ellipsis text-center text-overflow text-5vw text-white baskervville-font font-semibold line-clamp-1'>
                            {name}
                        </span>
                    </div>
                </li>
            )}
        </Fragment>
    );
};

export default ListSkills;
