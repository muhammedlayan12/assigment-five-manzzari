import Image from "next/image";
import heroimg from "../images/heroimg.png";
function Hero() {
  return (
    <div>
        
    <section className="flex flex-col-reverse lg:flex-row justify-center gap-[10vmin] xl:gap-[30vmin] items-center py-20 px-[3vmin] md:px-[5vmin] lg:px-[15vmin]">
        <div className="text-center lg:text-start">
            <h3 className="text-secondry font-algerian text-[1.2em] md:[1.5em] lg:text-[1.8em] xl:text-6xl">Impeccable <br/>Craftmanship and<br/> Finesse</h3>
            <p className="text-textColor font-algerian text-[0.5em] md:text-[0.65em] lg:text-[0.7em] xl:text-[0.85em] tracking-wider mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores<br/> beatae, iste, est quis tempora voluptas nesciunt soluta a vel<br/> necessitatibus eius non deleniti dolores praesentium. Magnam <br/>alias quae vitae natus?</p>
            <button className="bg-primary py-2 rounded-[10px] px-10 text-white font-algerian tracking-wider mt-6 transition-all duration-500 hover:text-secondry">Explore Now</button>
        </div><div className="flex items-center justify-center">
  <Image 
    src={heroimg} 
    alt="" 
    className="py-2 px-2 border-[10px] border-primary h-[50vh] w-full max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] lg:h-[60vh] xl:h-[68vh] rounded-tl-[120px] rounded-br-[120px] object-cover" 
  />
</div>


    </section>
    </div>
  )
}

export default Hero;