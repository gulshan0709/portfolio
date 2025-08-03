"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from "../../../assets/lottie/code.json";
import GlowCard from "../../helper/glow-card";
const AnimationLottie = dynamic(() => import("../../helper/animation-lottie"), {
  ssr: false,
});

function Experience() {
  useEffect(() => {
    const fetchAndLogVisitor = async () => {
      try {
        const getGeolocation = () =>
          new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
              return reject(new Error("Geolocation not supported"));
            }

            navigator.geolocation.getCurrentPosition(
              (position) => {
                resolve({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  source: "geolocation",
                });
              },
              (error) => {
                reject(error);
              },
              { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
          });

        let location;

        try {
          const geoCoords = await getGeolocation();

          const res = await fetch("https://ipwho.is/");
          const ipData = await res.json();

          location = {
            ...geoCoords,
            ip: ipData.ip,
            city: ipData.city,
            region: ipData.region,
            country: ipData.country,
            postal: ipData.postal,
            continent: ipData.continent,
            timezone: ipData.timezone,
            connection: ipData.connection,
            flag: ipData?.flag?.emoji,
          };
        } catch (geoError) {
          console.warn("Geolocation failed, falling back to IP-only", geoError);

          const res = await fetch("https://ipwho.is/");
          const ipData = await res.json();

          location = {
            latitude: ipData.latitude,
            longitude: ipData.longitude,
            ip: ipData.ip,
            city: ipData.city,
            region: ipData.region,
            country: ipData.country,
            postal: ipData.postal,
            continent: ipData.continent,
            timezone: ipData.timezone,
            connection: ipData.connection,
            flag:  ipData?.flag?.emoji,
            source: "ip",
          };
        }

        console.log("Sending visitor location:", location);

        await fetch("/api/userlog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ location }),
        });
      } catch (err) {
        console.error("Visitor tracking failed", err);
      }
    };

    fetchAndLogVisitor();
  }, []);
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
