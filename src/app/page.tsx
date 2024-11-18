import Header from "../component/Header";
import Footer from "../component/Footer";
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
    description:
      "With our Online Booking feature, your clients can make bookings 24x7.",
    image: "/images/clock.png",
  },
  {
    title: "Streamlined Appointment Management",
    description:
      "Easily handle all your scheduling needs with reminders, and calendar syncing.",
    image: "/images/calender.png",
  },
  {
    title: "Business Growth Support",
    description:
      "Expand your client base and increase revenue through optimized scheduling.",
    image: "/images/graph.png",
  },
];

export default function HomePage() {
  return (
    <div className="h-auto">
      <Header />

      <section className="flex flex-col md:flex-row w-full items-center justify-center py-10 px-16  text-center md:text-left bg-white">
        <div className="w-full">
          <h1 className="text-xl md:text-[28px] font-bold text-primary-400">
            Effortless Appointment Management
          </h1>
          <p className="mt-4 text-black text-md md:text-justify">
            Streamline your scheduling process with our free online appointment
            management software, designed for businesses of all sizes.
          </p>
          <Link href="/sign-up">
            <button className="text-md px-6 py-2 mt-6 border font-semibold text-primary-400 rounded-md">
              Signup for free
            </button>
          </Link>
        </div>
        <div className="w-full flex justify-center mt-6 md:mt-0">
          <Image
            src="/images/illustration.png"
            alt="Illustration"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Business Types Section */}
      <section className="p-10 md:p-16 bg-primary-200">
        <h2 className="text-lg md:text-xl font-bold mb-2 text-primary-400">
          One Platform. For any Business
        </h2>
        <p className="text-base">Popular Categories</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 mt-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="px-6 py-4 bg-white shadow-md rounded-md flex items-center space-x-4"
            >
              <div className=" flex justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="md:w-[100px] md:h-[85px] w-16 h-10"
                />
              </div>
              <div className="">
                <p className="text-sm md:text-2xl  font-medium">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="p-10 md:p-16 bg-white">
        <h2 className="text-lg md:text-xl font-bold mb-2 text-primary-400">
          Why Choose Us
        </h2>
        <p className="text-base">Core benefits</p>
        <div className="flex flex-col items-center lg:flex-row  h-auto">
          <div className="lg:basis-2/3 space-y-10 md:py-12 py-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="md:w-12 md:h-12 w-16 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-semibold md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex justify-center lg:basis-1/3">
            <Image
              src="/images/choose.png"
              alt="Illustration"
              width={350}
              height={300}
              className="rounded-lg "
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
