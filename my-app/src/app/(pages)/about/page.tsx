import Navbar from "../../component/Header";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer"
import Image from "next/image";
import { aboutData1, aboutData2, aboutData3 } from "../../data/aboutData";

export default function AboutPage() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <Banner />

                {/* About first image section */}
                <div className="relative flex-grow px-4 md:px-12 py-8 md:py-12">
                    {aboutData1.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row md:items-center md:mt-40">
                            {/* Image container */}
                            <div className="md:absolute md:right-24 md:w-1/2 mb-4 md:mb-0">
                                <Image src={item.img} alt="About first image section" className="w-full h-auto object-cover" />
                            </div>
                            {/* Text container */}
                            <div className="relative md:absolute md:top-48  md:left-24 bg-white p-6 rounded-xl shadow-lg shadow-secondary-300 w-full md:w-1/2 mt-[-110px] md:mt-0">
                                <h2 className="text-primary-400 font-bold text-xl md:text-2xl mb-2">{item.heading}</h2>
                                <div className="w-28 h-1 bg-primary-400 my-4"></div>
                                <p className="text-justify leading-6 text-secondary-400 text-sm md:text-md">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* About second image section */}
                <div className="relative flex-grow px-4 md:px-12 py-8 md:py-12  md:mt-96">
                    {aboutData2.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row md:items-center">
                            {/* Text container */}
                            <div className="absolute md:right-24 md:top-12 top-[7rem] z-10 bg-white md:p-6 p-2 rounded-xl shadow-lg shadow-secondary-300 w-full md:w-1/2 mb-4 md:mb-0">
                                <h2 className="text-primary-400 font-bold text-xl md:text-2xl mb-2">{item.heading}</h2>
                                <div className="w-28 h-1 bg-primary-400 my-4"></div>
                                {aboutData3.map((item, index)=>(
                                    <div key={index}>
                                    <h3 className="text-primary-400 font-bold mb-1 text-sm md:text-md">{item.subheading}</h3>
                                    <p className="text-secondary-400 text-xs md:text-sm mb-4">{item.text}</p>
                                    </div>
                                ))}
                               

                            </div>
                            {/* Image container */}
                            <div className="absolute mt-[-60px] md:left-24 w-[390px] md:w-1/2">
                                <Image src={item.img} alt="About second image section" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

      <div className="md:mt-[22rem] mt-[20rem]">
      <Footer  />
      </div>
        </>
    );
}
