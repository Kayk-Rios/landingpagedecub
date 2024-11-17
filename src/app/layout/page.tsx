"use client"
import Footer from "@/components/footer/footer";
import { useEffect, useState } from "react";

export default function Sobre(){
    const [rotation, setRotation] = useState(0);
    const [showSkeleton, setShowSkeleton] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          setShowSkeleton(window.innerWidth < 640); // sm breakpoint
        };
    
        window.addEventListener("resize", handleResize);
        handleResize(); // check initial size
    
        const timer = setInterval(() => {
          setRotation((prevRotation) => (prevRotation + 6) % 360);
        }, 16.67);
    
        return () => {
          window.removeEventListener("resize", handleResize);
          clearInterval(timer);
        };
      }, []);
    return(
        <>
        
        <div className="flex  flex-col justify-center items-center mb-72">
        <div
                className="pb-32"
              style={{
                position: "relative",
                margin: "50px auto",
                backgroundColor: "#c8e6c9",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "60px",
                  background: "#1b5e20",
                  position: "absolute",
                  top: "40px",
                  left: "50%",
                  transformOrigin: "bottom center",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                style={{
                  width: "4px",
                  height: "80px",
                  background: "#1b5e20",
                  position: "absolute",
                  top: "20px",
                  left: "50%",
                  transformOrigin: "bottom center",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                style={{
                  width: "2px",
                  height: "90px",
                  background: "#5b965d",
                  position: "absolute",
                  top: "10px",
                  left: "50%",
                  transformOrigin: "bottom center",
                  borderRadius: "5px",
                  transform: `rotate(${rotation}deg)`,
                }}
              ></div>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#1b5e20",
                  position: "absolute",
                  top: "94px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            </div>
        <div className="flex flex-col gap-8 justify-center p-8">
            <p>O sistema Decubtech é capaz de monitorar quanto tempo o paciente está em determinada posição e envia um alerta aos enfermeiros</p>
            <p>Desta forma, o sistema Decubtech informa ao enfermeiro o momento certo para executar a mudança de decúbito e assim evitar lesões como, as úlceras de pressão</p>
            <p>Atualmente, a mudança de decúbito é feita a cada duas horas de acordo com a inspeção visual do enfermeiro. Entretanto este tempo pode ser maior ou menor de acordo com o estado do paciente</p>
            <p>Projeto desenvolvido para inclusão nos hospitais do SUS e outras Instituições com a proposta de uma ferramenta de facilitação e melhoria da qualidade de vida dos assistidos</p>
        </div>
        
         
        </div>
        <Footer/>
        </>
    )
}