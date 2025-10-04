  

const Gallery = () => {
    const imageUrls = [
        "/tat1.jpg",
        "/tat2.jpg",
        "/tat3.jpg",
        "/tat4.jpg",
        "/tat5.jpg",
        "/tat6.jpg",
        "/tat7.jpg",
        "/tat8.jpg",
        "/tat9.jpg",
        
    ]

    return(
        
        <div className="min-h-screen w-full text-center mt-5 bg-black">
            <h1 className="[text-shadow:_2px_2px_6px_rgba(200,200,200,0.25)] mt-5 text-white text-[clamp(2rem,6vw,4rem)] font-playfair">
                GALLERY
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 max-w-screen-lg mx-auto">
                {imageUrls.map((url, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-md" >
                <img src={url}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover" 
                />
                </div>
                ))}
            </div>
        </div>
        

    );
    

}

export default Gallery;
