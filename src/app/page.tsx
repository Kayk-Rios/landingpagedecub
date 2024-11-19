'use client'
import Footer from "@/components/footer/footer";
import ImageEnfermeira2 from "@/components/imagemEmfermeira/ImageEnfermeira2";
import { useEffect, useState } from 'react';


export default function Home() {
 
  const [text, setText] = useState(""); 
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); 
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const phrases = [
    "Decubtech",
    "Seu tempo é precioso, invista nele"
  ];

  useEffect(() => {
    let interval:any;

    if (!isPaused) {
      interval = setInterval(() => {
        const currentPhrase = phrases[currentTextIndex];

        if (isDeleting) {
          setText((prevText) => prevText.slice(0, prevText.length - 1));
          if (text.length === 0) {
            setIsDeleting(false); 
            setIndex(0); 
            setIsPaused(true); // Pausa por 5 segundos após apagar
            setTimeout(() => {
              setIsPaused(false); 
              setCurrentTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            }, 2000); // Pausa por 5 segundos
          }
        } else {
          setText((prevText) => prevText + currentPhrase[index]);
          if (index === currentPhrase.length - 1) {
            setIsDeleting(true); 
            setIsPaused(true); 
            setTimeout(() => {
              setIsPaused(false); 
            }, 5000); // Pausa por 5 segundos
          } else {
            setIndex(index + 1);
          }
        }
      }, 100);
    }

    return () => clearInterval(interval); 
  }, [text, isDeleting, index, isPaused, currentTextIndex, phrases]); 

  return (
    <>
      <div className="flex flex-col max-w-full mx-auto ">
        <section className="flex justify-between items-center mb-14">
          <div className="flex flex-col pl-[50px] max-w-[680px]  ">
            
            <a href="/layout" className="pb-9 text-white">
              <h1>Sobre</h1>
            </a>
         
            <h1 className="text-white text-3xl font-bold" >{text}</h1>
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
