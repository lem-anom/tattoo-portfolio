

const About = () => {

    return(
        <div className="flex justify-center items-center h-100vh w-100vw p-4">
            <div className="p-5 mt-10 rounded-lg text-white/90 w-auto bg-zinc-900/70 flex flex-col items-center justify-center">
                <h1 className="whitespace-nowrap overflow-hidden text-ellipsis [text-shadow:_2px_2px_6px_rgba(200,200,200,0.25)] mt-2 text-white text-[clamp(2rem,6vw,4rem)] font-playfair">NOT JUST A TATTOO</h1>
                <hr className="border-white/70 border-1 my-3 w-full" />
                <p className="text-[clamp(1rem,3vw,1.5rem)]">We don’t just do tattoos. We create art that lives and breathes on skin.
                    Every piece we ink is a collaboration - between your story and our obsession with detail, flow, and raw visual impact. Whether it’s blackwork, realism, abstract, or something that’s never been done before, we treat every design like a canvas. Because it is.
                    This isn’t just a tattoo studio. It’s a creative lab. A visual rebellion. And yeah - it’s fuckin sick bro.
                    Come get something that  actually means something. Come get something that hits different.</p>
            </div>
        </div>     
    );

    
 
}     

export default About;
