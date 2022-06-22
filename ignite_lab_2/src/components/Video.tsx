import { DiscordLogo } from "phosphor-react";
import React from "react";

export default function Video() {
  return (

    <div className="flex-1">

      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <video className="">
          </video>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] max-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2x1 font-bold">
              Aula 1 abertura
            </h1>
            <p className="mt-4 text-gray-200 leading-relexed">
              descricao
            </p>

            <div>
              <img src="https://github.com/ogoiddev.png" alt="Perfil de Diogo" />  
            </div>

          </div>

          <div className="flex flex-col gap-4">

            <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transituion-colors">
              <DiscordLogo size={24} />
              Acesse o desafio
            </a>

            <a href="" className="p-4 text-sm border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center  hover:bg-blue-500 transituion-colors">
              <DiscordLogo size={24} />
              Acesse o desafio
            </a>

          </div>
        </div>
        <div></div>
      </div>

    </ div>
  )
}