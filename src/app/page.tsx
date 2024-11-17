import Footer from "@/components/footer/footer";
import ImageEnfermeira2 from "@/components/imagemEmfermeira/ImageEnfermeira2";

export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <section className="flex justify-between items-center mb-14">

          <div className="flex flex-col pl-[30px] ">
             <a href="/layout" className="pb-9 text-white"><h1>Sobre</h1></a>
            <iframe

              width="580"
              height="415"
              src="https://www.youtube.com/embed/6wW-Z3KZnt4?si=eWTauZpI_Xxg1C7J"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <button className="flex justify-center items-center mt-14  corButao rounded-full">
              Contatar
            </button>
          </div>
          <div>
            <ImageEnfermeira2 />
          </div>
        </section>
        <div className="mr-16"><Footer/></div>
      </div>
    </>
  );
}
