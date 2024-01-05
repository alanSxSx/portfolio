"use client";

import Image from "next/image";
import SliderComponent from "../Slider";
import { Svgs } from "../Common/Svgs";
import AboutImage from "./ImageTheme";

interface Details {
  moreDetails: {
    image: string | string[];
    titles: string[];
    texts: string[];
  };
  sizeImage: {
    width: number;
    height: number;
  };
  aspectRatio: string;
}

const AboutSectionTwo = ({ moreDetails, sizeImage, aspectRatio }: Details) => {
  let flex = { one: "lg:flex-1", two: "lg:flex-1" };

  const largeText = (): { one: string; two: string } => {
    if (sizeImage.width < sizeImage.height) {
      flex.two = "lg:flex-2";
      return flex;
    }
  };

  return (
    <section className="pt-16 md:pt-20">
      <div className="container">
        <div className="relative md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className={`w-full px-4 lg:w-1/2 ${largeText()?.one}`}>
              <div className="relative mx-auto mb-5 max-h-[27rem]  lg:my-0" style={{ aspectRatio: aspectRatio }}>
                {Array.isArray(moreDetails.image) ? (
                  //@ts-ignore
                  <SliderComponent images={AboutImage(moreDetails.image)} width={sizeImage.width} height={sizeImage.height} />
                ) : (
                  <Image
                    //@ts-ignore
                    src={AboutImage(moreDetails.image)}
                    loading="lazy"
                    quality={75}
                    alt="about-image"
                    width={sizeImage.width}
                    height={sizeImage.height}
                    className="mx-auto max-w-full object-contain lg:mr-0"
                  />
                )}
              </div>
            </div>
            <div className={`w-full px-4 lg:w-1/2 ${largeText()?.two}`}>
              <div className="mx-auto max-w-[780px]">
                {moreDetails?.titles?.map((item, index) => {
                  return (
                    <div className="mb-9" key={index}>
                      <h3 className="mb-4 text-xl font-bold text-black opacity-90 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        {item}
                      </h3>
                      <p className="text-base leading-relaxed text-body-color dark:text-dark-mode sm:text-lg sm:leading-relaxed">
                        {moreDetails.texts[index]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
            <Svgs type="sectionTwo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;