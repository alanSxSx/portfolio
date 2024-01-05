"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SliderComponent from "../Slider";
import { Svgs } from "../Common/Svgs";
import AboutImage from "./ImageTheme";

interface About {
  title: string;
  paragraph: string;
  arraySkills: string[];
  image: string | string[];
  link: string;
  sizeImg: {
    width: number;
    height: number;
  };
  aspectRatio: string;
}

const AboutSectionOne = ({ title, paragraph, arraySkills, image, link, sizeImg, aspectRatio }: About) => {
  const firstPartArray = arraySkills?.slice(0, (arraySkills.length + 1) / 2);
  const secondPartArray = arraySkills?.slice((arraySkills.length + 1) / 2);

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color dark:text-dark-mode">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        <Svgs type="checkIcon" />
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-12 md:pt-24 lg:pt-28">
      <div className="container">
        <div className="pb-12">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle title={title} paragraph={paragraph} mb="44px" />

              <div className="mb-12 lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="px-3 w-full sm:w-1/2">
                    {firstPartArray.map((item, index) => (
                      <List key={index} text={item} />
                    ))}
                  </div>
                  <div className="px-3 w-full sm:w-1/2">
                    {secondPartArray.map((item, index) => (
                      <List key={index} text={item} />
                    ))}
                  </div>
                </div>
              </div>
              {link && (
                <a
                  href={link}
                  className="mx-auto my-6 flex w-[16rem] cursor-pointer items-center justify-center rounded-md bg-primary py-3 text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 sm:mx-0"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  Acessar link do projeto
                </a>
              )}
            </div>

            <div className="relative w-full px-4 lg:w-1/2">
              <Svgs type="blurObj" />
              <div className="relative mx-auto mt-10 max-h-[27rem] lg:mt-0" style={{ aspectRatio: aspectRatio }}>
                {Array.isArray(image) ? (
                  //@ts-ignore
                  <SliderComponent images={AboutImage(image)} width={sizeImg.width} height={sizeImg.height} />
                ) : (
                  <Image
                    //@ts-ignore
                    src={AboutImage(image)}
                    loading="lazy"
                    quality={75}
                    alt="about-image"
                    width={sizeImg.width}
                    height={sizeImg.height}
                    className="mx-auto max-w-full object-contain lg:mr-0"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;