import Image from 'next/image'
import { Truck, Utensils, Clock } from 'lucide-react'

export default function WhyChooseUs() {
  return (
  <>   
    <section className="
   bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Images */}
          <div className="lg:w-1/ flex relative mb-10 lg:mb-0">
            <div className="relative w-[424px] h-[523px]">
              <Image
                src="/images/why1.png?height=550&width=450"
                alt="Food image 1"
                objectFit="cover"
                className="rounded-lg"
                width={450}
                height={560}
              />
            </div>
            <div className="absolute z-100 opacity-60 left-[330px] -top-[70px] w-64 h-64 rotate-12">
              <Image
                src="/images/why3.png?height=260&width=220"
                alt="Food image 2"
                objectFit="cover"
                className="rounded-lg"
                width={65}
                height={65}
              />
            </div>
            <div className="relative z-1 top-20 -left-16 w-[385px] h-[516px]">
              <Image
                src="/images/why2.png?height=525&width=400"
                alt="Food image 1"
                objectFit="cover"
                className="rounded-lg"
                width={380}
                height={520}
              />
            </div>
          </div>

          {/* Text content */}
          <div className="lg:w-1/2 lg:pl-16">
            <span className="text-green-700 font-miniver text-lg">Why Choose us</span>
            <div className="w-10 h-0.5 bg-green-700 mt-2 mb-6"></div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why We are the best?</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <p className="text-gray-600 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>

            {/* Feature boxes */}
            <div className=" space-y-6">
              <FeatureBox icon={<Truck className="w-10 h-10" />} title="Fast Delivery" />
              <FeatureBox icon={<Utensils className="w-10 h-10" />} title="Fresh Food" />
              <FeatureBox icon={<Clock className="w-10 h-10" />} title="24/7 services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

function FeatureBox({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
      <div className="bg-green-700 p-3 rounded-lg mr-4">
        {icon}
      </div>
      <h3 className="font-bold text-gray-700">{title}</h3>
    </div>
  )
}



