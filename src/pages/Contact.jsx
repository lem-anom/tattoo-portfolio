

const Contact = () => {

    return (
        <div className="bg-black min-h-screen w-screen flex flex-col items-center text-white">
            <h1 className="mt-5 font-playfair text-white text-[clamp(2rem,6vw,3.5rem)]">CONTACT</h1>
            <div className="mt-5 h-[250px] w-screen bg-[url('/contact-banner.jpg')] bg-cover bg-center transition-all duration-500 ">

            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-screen-md mx-auto px-6 py-4 text-center">
                <div className="flex flex-col space-y-2 border-2 justify-center items-center border-zinc-900 p-4">
                    <h1 className="font-playfair font-semibold">PHONE</h1>
                    <p>012345678910</p>
                </div>
                <div className="flex flex-col p-4 space-y-2 justify-center items-center border-2 border-zinc-900">
                    <h1 className="font-playfair font-semibold">EMAIL</h1>
                    <p className="break-words">sicktattoos@tomotats.com</p>
                </div>
                <div className="flex flex-col space-y-1 border-2 justify-center items-center border-zinc-900 p-4">
                    <h1 className="pb-2 font-playfair font-semibold">ADDRESS</h1>
                    
                    <p>30 Some Place</p>
                    <p>Miles Away</p>
                    <p>Random Place</p>
                    <p>XZ11 1XX</p>
                </div>
                
            </div>
    </div>
    );

    

}

export default Contact;
