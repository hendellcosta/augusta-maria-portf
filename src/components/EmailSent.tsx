import React from 'react';
import { MdDoneOutline } from "react-icons/md";

function EmailSent() {
  return (
    <div className="flex flex-col items-center justify-center text-center lg:text-start gap-20 text-white h-[100vh]">
      <MdDoneOutline className="text-9xl text-instagram bg-likeBlack rounded-full p-4" />
      <h1 className="text-4xl">A sua mensagem foi enviada com sucesso!</h1>
      <a href={window.location.origin} className="text-blue-700 hover:underline">
        Clique aqui para voltar
      </a>
    </div>
  );
}

export default EmailSent;