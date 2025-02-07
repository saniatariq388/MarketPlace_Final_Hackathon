import Image from "next/image";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <>
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2">
                <span className="font-miniver text-[#195A00] text-lg">
                  Testimonials
                </span>
                <div className="w-8 h-[1px] bg-[#195A00]" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mt-4">
                Customer Review
              </h2>
            </div>

            {/* Quote Icon */}
            <div className="relative w-14 h-14">
              <Quote className="w-14 h-14 text-[#195A00]" />
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>

            {/* Customer Info */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/abdur.png"
                alt="Customer"
                width={72}
                height={72}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-gray-700">Abdur Rahman</h3>
                <p className="text-gray-500">Customer</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-2">
              <button className="p-2 border rounded-full hover:bg-gray-50">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="p-2 border rounded-full hover:bg-gray-50">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <Image
              src="/images/dish.png"
              alt="Food"
              width={200}
              height={100}
              className="rounded-lg object-cover w-full"
            />

            <Card className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800">Order now</h3>
                <span className="font-bold text-gray-600">10.00$</span>
              </div>

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#195A00] text-[#195A00]"
                  />
                ))}
              </div>

              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur elit. Quisque diam
                pellentesque bibendum fringilla bibendum. Urna, elit augue urna,
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
