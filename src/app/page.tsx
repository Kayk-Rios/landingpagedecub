'use client'
import Footer from "@/components/footer/footer";
import ImageEnfermeira2 from "@/components/imagemEmfermeira/ImageEnfermeira2";
import { useEffect, useState } from "react";
import Typewriter from 'react-typewriter-effect';

export default function Home() {
  return (
    <>
      <div className="flex flex-col max-w-full mx-auto ">
        <section className="flex justify-between items-center mb-14">
          <div className="flex flex-col pl-[50px] max-w-[680px]  ">
            
            <a href="/layout" className="pb-9 text-white">
              <h1>Sobre</h1>
            </a>
              <Typewriter
                textStyle={{
                  fontFamily: "Exo 2",
                  fontWeight: 600,
                  fontSize: "2.2em",
                  maxWidth: "90%",
                  color: "#fff",
                  overflow: "hidden",
                }}
                startDelay={200}
                cursorColor="black"
                multiText={["Decubtech", "Seu tempo é precioso, invista nele", "O Decubtech faz intervenções precisas, reduzindo riscos de lesões por pressão."]}
                multiTextDelay={1000}
                typeSpeed={100}
                loop={true}
              />
    
            <iframe
              className=" flex sm:-w[300px] md:w-[500px] lg:w-[650px] "
              height="415"
              src="https://www.youtube.com/embed/6wW-Z3KZnt4?si=eWTauZpI_Xxg1C7J"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <button className="flex justify-center items-center mt-14  corButao rounded-full">
              <a
                href="https://wa.me/981699096?text=Desejo contratar os serviços do DecubTech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contatar
              </a>
            </button>
          </div>
          <div>
            <ImageEnfermeira2 />
          </div>
        </section>
        <div className="mt-32">
          <Footer />
        </div>
      </div>
    </>
  );
}
