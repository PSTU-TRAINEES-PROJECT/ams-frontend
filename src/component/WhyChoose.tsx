import React from 'react'
import Image from "next/image";
import { features } from 'utils/helper/dummy-data/features';


const WhyChoose = () => {
  return (
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
              <Image width={100} height={100}
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
  )
}

export default WhyChoose