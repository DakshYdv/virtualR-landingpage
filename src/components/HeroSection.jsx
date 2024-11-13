import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-15">
        <h1 className="text-4xl sm:text-6xl lg-text-7xl text-center tracking-wide">
            VirtualR buil tools
            <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent text-4xl sm:text-6xl lg-text-7xl">
                {""} for Developers
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Empower your creativity and bring your VR app ideas to life with our initiative development tools. 
            Get started today and turn your imagination into immersive reality!
        </p>
        <div className="flex justify center my-10">
            <a href="#" className="px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-900 rounded-md">
                Start for free
            </a>
            <a href="#" className="py-3 px-4 mx-4 rounded-md border ">Documentation</a>
        </div>
        <div className="flex mt-10 justify-center space-x-2">
            <video autoPlay loop muted className="rounded-lg w-1/2 lg:w-2/5 border border-orange-700" src={video1} ></video>
            <video autoPlay loop muted className="rounded-lg w-1/2 lg:w-2/5 border border-orange-700" src={video2} ></video>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
