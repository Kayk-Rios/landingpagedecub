import Image from "next/image";
import imagemInstagram  from "@/assets/instagram.png"
export default function Footer() {
  return (
    <>
      <div className="flex  justify-around items-center text-white  ">
       <hr />
        <a> © 2024 DecubTech. Todos os direitos reservados.</a>
        <section className="flex flex-col">
          <h1>Desenvolvedores</h1>
          <a href="https://www.linkedin.com/in/kayk-dario/" 
          target="_blank" 
          className="underline">
            Kayk Dario
          </a>
          <a
            href="https://www.linkedin.com/in/vitor-cavalcante-318362298/"
            target="_blank"
            className="underline"
          >
            Vitor Cavalcante
          </a>
          <a href="#">Sobre</a>
        </section>
        <a href="https://www.instagram.com/decub_tech/" target="_blank">
            <Image src={imagemInstagram} width={58} height={58} alt="imagemInstagram" />
        </a>
      </div>
    </>
  );
}
