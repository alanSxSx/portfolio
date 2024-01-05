import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import TitleArea from "@/components/TitleArea";
import { dataAbout } from "@/public/data";
import React from "react";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <TitleArea
        title={"Projetos e Habilidades"}
        text={"Explore os projetos abaixo, exemplos concretos das minhas habilidades e frutos dos meus estudos. Cada projeto é uma oportunidade de demonstrar minha experiência e paixão por desenvolvimento."}
      />
      {dataAbout.map((item, index) => (
        <React.Fragment key={index}>
          <AboutSectionOne key={index} {...item} />
          <AboutSectionTwo moreDetails={item.moreDetails} sizeImage={item.sizeImg} aspectRatio={item.aspectRatio} />
        </React.Fragment>
      ))}
      
    </>
  );
}
