import bodyBuildingImage from "../assets/body-building.jpg";


const Hero = () => {
    return <div className="relative">
        <div className="">
            <img src={bodyBuildingImage} className="h-[480px] w-full object-cover"/>
        </div>
        <div className="absolute top-20 left-8 right-8 xs:top-12 xs:left-12 text-white text-5xl xs:text-7xl opacity-70">
            <span className="uppercase">Get fit &</span>
            <span className="uppercase block">Become the</span>
            <span className="uppercase block">best <span className="text-orange-600 font-bold">you</span></span>
        </div>
    </div>
}

export default Hero;