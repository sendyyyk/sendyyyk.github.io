import Swal from 'sweetalert2';

const Welcome = (props) => {
    const alertClick = (event) => {
        event.preventDefault();
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: 'The "Contact Me" button is not yet functional.',
        });
    };

    return (
        <div className="flex w-full h-50vw z-40">
            <div className="flex flex-col mt-15vw mb-auto">
                <h1 className="text-3vw font-semibold cinzel-font text-black xdrk-c1-css">Selamat Datang</h1>
                <span className="text-1vw font-light text-black xdrk-c1-css">Terima Kasih Sudah Mengunjungi Website Saya</span>
                <div className="flex mt-3vw gap-x-0/5vw h-full">
                    <a href="/about" className="flex py-1vw px-2vw bg-secondary rounded-0/5vw duration-300 text-white hover:opacity-80">
                        <span className="text-0/9vw">About</span>
                    </a>
                    <a href="/contact" className="flex py-1vw px-2vw border-0/1vw border-secondary rounded-0/5vw duration-300 text-secondary hover:bg-primary hover:border-primary hover:text-white" onClick={alertClick}>
                        <span className="text-0/9vw">Contact Me</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Welcome;