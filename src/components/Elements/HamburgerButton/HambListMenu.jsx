import React, { Children } from 'react';
import Swal from 'sweetalert2';

const HambListMenu = (props) => {
    const {href, children, text, styleLi, styleAnchor, styleSpan1, styleSpan2} = props;

    const alertClick = (event) => {
        if (href === "profile/article") {
            event.preventDefault();
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: 'Sorry, the article page is currently unavailable. Please wait for the next update!',
            });
        }
    };

    return (
        <li className={`flex my-0/5vw ${styleLi}`}>
            <a href={`/${href}`} className={`flex w-full gap-x-0/2vw mx-auto my-auto py-0/5vw flex justify-center items-center duration-300 rounded-0/5vw shadow-0/1vw hover:bg-secondary hover:shadow-none ${styleAnchor}`} onClick={alertClick}>
                <span className={`flex w-1/5vw h-1/5vw ${styleSpan1}`}>
                    {children}
                </span>
                <span className={`text-0/7vw font-medium text-white ${styleSpan2}`}>
                    {text}
                </span>
            </a>
        </li>
    )
}

export default HambListMenu;