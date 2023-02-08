import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import profile from "../assets/media/profile.jpg";

import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Main() {
  return (
    <div>
      <h1
        id="title"
        className="w-full text-7xl font-semibold lg:py-4 sm:py-6 mb-10"
      >
        Augusta Maria
      </h1>

      <div className="flex flex-col lg:flex-row gap-20">
        <div className="bg-black w-full flex flex-col items-center py-16 text-white gap-8 text-sm lg:text-lg rounded-lg lg:max-w-lg px-4 shadow-sm shadow-slate-700">
          <img
            src={profile}
            alt="Foto de Augusta Maria"
            id="profile"
            className="w-40 rounded-full shadow-sm shadow-slate-600"
          />

          <div className="flex flex-row gap-3">
            <FaLinkedinIn
              id="linkedin"
              className="social rounded-md text-5xl p-2 text-linkedin shadow-slate-600 shadow-sm"
            />
            <BsInstagram
              id="instagram"
              className="social bg-likeBlack rounded-md text-5xl p-2 text-instagram shadow-slate-600 shadow-sm"
            />
            <FaFacebookF
              id="facebook"
              className="social bg-likeBlack rounded-md text-5xl p-2 text-facebook shadow-slate-600 shadow-sm"
            />
          </div>

          <div className="bg-likeBlack px-6 grid grid-cols-1 gap-2 divide-y divide-slate-700 rounded-xl text-xs sm:text-xl">
            <div className="flex flex-row items-center gap-4 py-2">
              <BsTelephoneFill className="text-phone text-4xl sm:text-5xl bg-black p-3 rounded-md hover:text-white transition-all" />
              <span className="flex flex-col text-start">
                <p className="text-slate">Telefone</p>
                <p className="font-semibold">
                  +351 933 250 133/+44 74 32 79 9034
                </p>
              </span>
            </div>

            <div className="flex flex-row items-center gap-4 py-2">
              <MdEmail className="text-email text-4xl sm:text-5xl bg-black p-3 rounded-md hover:text-white transition-all" />
              <span className="flex flex-col text-start">
                <p className="text-slate">Email</p>
                <p className="font-semibold">domingosaugustamaria@gmail.com</p>
              </span>
            </div>

            <div className="flex flex-row items-center gap-4 py-2">
              <FaLocationArrow className="text-location text-4xl sm:text-5xl bg-black p-3 rounded-md hover:text-white transition-all" />
              <span className="flex flex-col text-start">
                <p className="text-slate">Localização</p>
                <p className="font-semibold">Lisboa, Portugal</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h1 className="text-white font-semibold text-4xl lg:text-5xl">
              Contacte-me
            </h1>

            <form
              action="https://api.staticforms.xyz/submit"
              method="POST"
              className="bg-likeBlack px-6 grid grid-cols-1 gap-2 divide-y divide-slate-700 rounded-xl text-xs sm:text-xl w-[]"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Nome"
                className="bg-likeBlack px-4 py-2 outline-none"
              />
              <input
                type="phone-number"
                name="telefone"
                required
                placeholder="Telefone (+123 456 789 012)"
                className="bg-likeBlack px-4 py-2 outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="E-mail"
                className="bg-likeBlack px-4 py-2 outline-none"
              />
              <input
                type="text"
                name="message"
                required
                placeholder="Escreva a sua mensagem"
                className="bg-likeBlack px-4 py-2 outline-none"
              />

              <input
                type="hidden"
                name="accessKey"
                value="89793b23-1de5-4a1b-a967-2c9255dc7a00"
              />
              <input
                type="hidden"
                name="subject"
                value="Augusta Maria Portfólio - Contacto"
              />
              <input type="hidden" name="replyTo" value="@" />
              <input
                type="hidden"
                name="redirectTo"
                value={`${window.location.href}message-sent`}
              />
              <button
                type="submit"
                value="Submit"
                className="bg-likeBlack hover:text-instagram transition-all py-4 rounded-lg text-xl"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="bg-black w-full flex flex-col text-start py-16 text-slate text-base sm:text-xl rounded-lg px-6 lg:px-16 gap-20 shadow-sm shadow-slate-700">
          <div className="flex flex-col gap-8">
            <h1 className="text-white font-semibold text-4xl lg:text-5xl text-center lg:text-start">
              Sobre mim
            </h1>

            <span className="flex flex-col gap-4">
              <p>
                Sou Augusta Domingos, co-fundadora da "NOVA ESSÊNCIA",
                contribuindo para que você seja livre e tenha uma consciência
                reprogramada. Seja bem-vindo/a ao meu e ao nosso espaço.
              </p>
              <p>
                Como todos têm um passado... já vivi situações em que pensei que
                o mundo desabou. Parecia que estava presa em situações sem
                saída, sem solução. Olhava para todos os lugares e pensamentos
                como "Estou presa em um ciclo sem saída, parece que não há mais
                nada a fazer."
              </p>
              <p>
                Quando percebi que tudo era apenas falta de consciência
                desperta, eu mudei o jogo. Muitas vezes, me via conversando com
                o Deus do universo. Não é verdade o que estava acontecendo. Eu
                estava presa em uma realidade imposta por outros, que não era
                minha.
              </p>
              <p>
                Quando descobri que podia ser a verdadeira co-criadora da minha
                realidade, e mais do que isso, descobri que o meu propósito era
                contribuir para a vida das pessoas. Com tudo isso, comecei a
                colocar esse propósito em prática e atingir o maior número de
                pessoas possível.
              </p>
              <p>
                A pouco tempo atrás, comecei a entender que posso contribuir
                para a minha realidade por anos, vivendo a vida que me foi
                imposta, como uma carreira estável, casamento, uma casa, um
                carro, trabalho, casa, poucos momentos de lazer... Nada na vida
                vem para ficar. Tudo mudou no momento em que entendi que posso
                ser a criadora da minha realidade, sem seguir regras
                pré-estabelecidas, e que minha consciência seria meu guia. Estou
                estudando muito, cada vez mais, para poder evoluir e contribuir.
              </p>
            </span>
          </div>

          <div className="flex flex-col gap-8 mix-w-full">
            <h1 className="text-white font-semibold text-3xl lg:text-5xl text-center lg:text-start">
              "NOVA ESSÊNCIA"
            </h1>
            <p>
              O projeto "NOVA ESSÊNCIA", foi criado em 2012 e, desde então, sua
              missão e valores permanecem os mesmos. Criamos um método e
              conhecimentos para usar ferramentas efetivas, eliminando aquilo
              que não agrega valor. Sou responsável por atendimentos que
              contribuem com a Desprogramação Neurobiológica (DNB) e a
              Neurociência. Saiba que estou aqui para contribuir com você!
            </p>
          </div>

          <div className="flex flex-col gap-8 text-white">
            <h1 className="font-semibold text-3xl lg:text-5xl text-center lg:text-start">
              Especializações
            </h1>

            <div className="grid grid-cols-2 gap-3">
              <span className="border-4 border-likeBlack text-center py-3 sm:py-12 hover:bg-likeBlack transition-all">
                <p className="sm:text-xl">Neurociência</p>
              </span>
              <span className="border-4 border-likeBlack text-center py-3 sm:py-12 hover:bg-likeBlack transition-all">
                <p className="sm:text-xl">Neurobiologia</p>
              </span>
              <span className="border-4 border-likeBlack text-center py-3 sm:py-12 hover:bg-likeBlack transition-all">
                <p className="sm:text-xl">Massoterapia</p>
              </span>
              <span className="border-4 border-likeBlack text-center py-3 sm:py-12 hover:bg-likeBlack transition-all">
                <p className="sm:text-xl">Meditadora</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;