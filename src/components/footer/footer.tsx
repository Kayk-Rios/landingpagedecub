import Image from "next/image";
import imagemInstagram from "@/assets/instagram.png";

export default function Footer() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center w-full px-4 py-6  text-white">
        <a>© 2024 DecubTech. Todos os direitos reservados.</a>

        <section className="flex flex-col items-start mt-4 md:mt-0">
          <h1 className="font-bold mb-2">Desenvolvedores</h1>
          <a
            href="https://www.linkedin.com/in/kayk-dario/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mb-1"
          >
            Kayk Dario
          </a>
          <a
            href="https://www.linkedin.com/in/vitor-cavalcante-318362298/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mb-1"
          >
            Vitor Cavalcante
          </a>
          <a href="#" className="underline">Sobre</a>
        </section>

        <a
          href="https://www.instagram.com/decub_tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 md:mt-0"
        >
          <Image src={imagemInstagram} width={58} height={58} alt="Instagram" />
        </a>
      </div>
    </>
  );
}
