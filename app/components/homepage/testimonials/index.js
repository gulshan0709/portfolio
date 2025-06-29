// @flow strict
"use client";
import Image from "next/image";
import { testimonialData } from "@/utils/data/testimonialData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  return (
    <div
      id="testimonial"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Testimonial
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          pauseOnHover={true}
        >
          {testimonialData.map((testimonial, id) => (
            <div
              className="w-full max-w-5xl h-fit flex transition-all duration-500 m-3 sm:m-5 mx-auto rounded-lg group relative hover:scale-[1.02] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>

                <div className="flex items-center p-6 gap-6">
                  <div className="flex-1 flex flex-col justify-center gap-4">
                    <div>
                      <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                        {testimonial.description}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-violet-400 text-sm sm:text-base font-medium">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.compnay}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-32 sm:w-40 md:w-48">
                    <div className="aspect-square rounded-lg overflow-hidden border-2 border-violet-500/20 group-hover:border-violet-500/50 transition-all duration-500">
                      <Image
                        src={testimonial.photo}
                        alt={testimonial.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
