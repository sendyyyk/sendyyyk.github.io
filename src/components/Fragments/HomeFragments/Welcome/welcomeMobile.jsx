import Swal from 'sweetalert2';

const WelcomeMobile = (props) => {
    const alertClick = (event) => {
        event.preventDefault();
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: 'The "Contact Me" button is not yet functional.',
        });
    };

    return (
        <div className="flex w-full h-50vw" style={{ marginTop: "55vw", height: "90vw" }}>
            <div className="flex flex-col w-full mt-15vw mb-auto">
                <h1 className="text-10vw font-semibold cinzel-font text-black xdrk-c1-css">Selamat Datang</h1>
                <span className="text-3/3vw font-light text-black xdrk-c1-css">Terima Kasih Sudah Mengunjungi Website Saya</span>
                <div className="flex mt-12vw gap-x-2vw h-full">
                    <a href="/about" className="flex py-4vw px-10vw bg-secondary  rounded-3vw duration-300 text-white hover:opacity-80">
                        <span className="text-3vw mx-auto my-auto">About</span>
                    </a>
                    <a href="/contact" className="flex py-4vw px-10vw border-0/3vw border-secondary rounded-3vw duration-300 text-secondary hover:bg-primary hover:border-primary hover:text-white" onClick={alertClick}>
                        <span className="text-3vw mx-auto my-auto">Contact Me</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WelcomeMobile;