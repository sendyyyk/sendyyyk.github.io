import FileNotFound from "../../../Elements/Icon/FileNotFound";
import Book from "../../../Elements/Icon/Book";
import ImageNotFound from "../../../Elements/Icon/ImageNotFound";
import Swal from "sweetalert2";

const NotFoundArticle = (props) => {

    const alertClick = (event) => {
        event.preventDefault();
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: 'Sorry, the article page is currently unavailable. Please wait for the next update!',
        });
    };

    return (
        <li className="flex flex-col h-full overflow-hidden" style={{ width: "calc(100% / 3)" }}>
            <div className="flex flex-col w-22vw h-full mx-auto rounded-t-1vw overflow-hidden">
                <div className="flex w-full h-13vw bg-grey">
                    <div className="w-3vw h-3vw mx-auto my-auto">
                        <ImageNotFound width="100%" height="100%" />
                    </div>
                </div>
                <div className="relative flex justify-between w-full h-2vw px-1/5vw bg-black">
                    <div className="absolute left-0 mx-1/5vw mt-0/5vw px-1vw py-0/5vw text-0/7vw font-light rounded-0/5vw text-white bg-secondary">0 January 0000</div>
                    <div className="absolute right-0 mx-1/5vw mt-0/5vw px-1vw py-0/5vw text-0/7vw font-light rounded-0/5vw text-white bg-primary">0 Min Read</div>
                </div>
                <div className="flex flex-col justify-center items-center w-full h-15vw gap-y-1vw rounded-b-1vw bg-black">
                    <FileNotFound width="3vw" height="3vw" />
                    <div className='flex flex-col items-center'>
                        <span className='text-0/7vw font-semibold text-white'>Article Not Yet Found.</span>
                        <span className='text-0/7vw font-semibold text-white'>Please Visit Another Time.</span>
                    </div>
                </div>
                <div className="flex w-full h-5vw">
                    <a href="javascript:void(0)" className="flex justify-center gap-x-0/5vw w-full mt-auto py-1vw duration-300 bg-black rounded-full opacity-80 cursor-default" onClick={alertClick}>
                        <Book width="1vw" height="1vw" />
                        <span className="text-white text-0/9vw">Read More</span>
                    </a>
                </div>
            </div>
        </li>
    )
}

export default NotFoundArticle;