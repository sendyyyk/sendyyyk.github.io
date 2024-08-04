import FileNotFound from "../../../Elements/Icon/FileNotFound";
import Book from "../../../Elements/Icon/Book";
import ImageNotFound from "../../../Elements/Icon/ImageNotFound";
import Swal from "sweetalert2";

const NotFoundArticleMobile = (props) => {

    const alertClick = (event) => {
        event.preventDefault();
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: 'Sorry, the article page is currently unavailable. Please wait for the next update!',
        });
    };

    return (
        <li className="flex flex-col w-full h-full overflow-hidden">
            <div className="flex flex-col w-full h-full mx-auto rounded-t-3vw overflow-hidden">
                <div className="flex w-full h-50vw bg-grey">
                    <div className="w-10vw h-10vw mx-auto my-auto">
                        <ImageNotFound width="100%" height="100%" />
                    </div>
                </div>
                <div className="relative flex justify-between w-full h-12vw px-5vw bg-black">
                    <div className="absolute left-0 mx-3vw mt-3vw px-7vw py-2vw text-3vw font-light rounded-3vw text-white bg-secondary">0 January 0000</div>
                    <div className="absolute right-0 mx-3vw mt-3vw px-7vw py-2vw text-3vw font-light rounded-3vw text-white bg-primary">0 Min Read</div>
                </div>
                <div className="flex flex-col justify-center items-center w-full h-60vw gap-y-3vw rounded-b-3vw bg-black">
                    <FileNotFound width="10vw" height="10vw" />
                    <div className='flex flex-col items-center'>
                        <span className='text-3vw font-semibold text-white'>Article Not Yet Found.</span>
                        <span className='text-3vw font-semibold text-white'>Please Visit Another Time.</span>
                    </div>
                </div>
                <div className="flex w-full h-20vw">
                    <a href="javascript:void(0)" className="flex justify-center gap-x-2vw w-full mt-auto py-5vw duration-300 bg-black rounded-full opacity-80 cursor-default" onClick={alertClick}>
                        <Book width="5vw" height="5vw" />
                        <span className="text-white text-4vw my-auto">Read More</span>
                    </a>
                </div>
            </div>
        </li>
    )
}

export default NotFoundArticleMobile;