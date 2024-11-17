import Footer from "component/Footer";
import Header from "component/Header";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Doctor", image: "/images/doctor.png" },
  { name: "Engineer", image: "/images/engineer.png" },
  { name: "Teacher", image: "/images/teacher.png" },
  { name: "Business", image: "/images/business.png" },
  { name: "Public Figure", image: "/images/public_figure.png" },
  { name: "Others", image: "/images/others.png" },
];

const features = [
  {
    title: "Take bookings 24/7",
    description: "With our Online Booking feature, your clients can make bookings 24x7.",
    image: "/images/clock.png",
  },
  {
    title: "Streamlined Appointment Management",
    description: "Easily handle all your scheduling needs with reminders, and calendar syncing.",
    image: "/images/calender.png",
  },
  {
    title: "Business Growth Support",
    description: "Expand your client base and increase revenue through optimized scheduling.",
    image: "/images/graph.png",
  },
];

export default function HomePage() {
  return (
    <div className="font-montserrat h-auto">
      <Header />

      <section className="flex flex-col md:flex-row w-full max-w-screen-lg lg:max-w-[1440px] mx-auto items-center py-10 px-6 lg:px-8 text-center md:text-left bg-white">
        <div className="w-full md:w-1/2 space-y-4 md:ml-10 lg:ml-[90px]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500">
            Effortless Appointment Management
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl">
            Streamline your scheduling process with our free online appointment management software, designed for
            businesses of all sizes.
          </p>
          <Link href="/signup">
            <button className="text-lg sm:text-xl lg:text-2xl px-6 py-3 mt-6 border font-semibold text-blue-500 rounded-md">
              Signup For Free
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image src="/images/illustration.png" alt="Illustration" width={400} height={300} className="rounded-lg" />
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-10 px-6 lg:px-8 bg-[#EEF8FFB2]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-blue-500 text-left lg:ml-[90px]">
          One Platform. For any Business
        </h2>
        <p className="text-base lg:ml-[90px]">Popular Categories</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-6 lg:ml-[90px] lg:mr-[90px]">
          {categories.map((category) => (
            <div key={category.name} className="p-6 bg-white shadow-md rounded-md flex items-center space-x-4">
              <div className="relative w-1/3 flex justify-center md:h-[108px] sm:h-[54px]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="md:w-[108px] md:h-[108px] sm:w-[54px] sm:h-[54px]"
                />
              </div>
              <div className="w-2/3 text-center sm:text-left">
                <h3 className="text-lg sm:text-sm lg:text-4xl font-medium">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold lg:ml-[90px] text-center lg:text-left">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mt-2 lg:ml-[90px] text-center lg:text-left">Core benefits</p>
        <div className="flex flex-col lg:flex-row lg:py-10 h-auto lg:h-[454px] space-y-6 lg:space-y-0 lg:space-x-10 lg:ml-[90px] lg:mr-[90px]">
          <div className="lg:basis-2/3 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                  <Image src={feature.image} alt={feature.title} fill />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex justify-center lg:basis-1/3">
            <Image src="/images/choose.png" alt="Illustration" width={400} height={300} className="rounded-lg " />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
