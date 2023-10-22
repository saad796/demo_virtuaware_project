import DigitalSection from "./DigitalSection"
import ServicesSection from "./ServicesSection"

function DiscoverMoreSection() {
  return (
    <div className="discover-bg-container w-full">
        <DigitalSection/>
        <div className="discover-container bg-black bg-opacity-40 h-[500px] text-white flex flex-col justify-center items-center gap-5">
            <h2 className="md:text-5xl text-4xl font-extrabold min-w-[50%]">
                The better information about the virtual world.
            </h2>
            <p className="w-[65%] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="register px-4 py-2 bg-blue-500 text-white font-medium border-2 border-blue-500 hover:bg-sky-400 cursor-pointer duration-100">Discover More</button>
        </div>
        <ServicesSection/>
    </div>
  )
}

export default DiscoverMoreSection