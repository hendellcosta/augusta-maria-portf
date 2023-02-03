import profile from "./assets/media/profile.jpg";

import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';

function App() {
  return (
    <main className="flex flex-col items-center justify-center text-center lg:text-start px-6 py-10 gap-20 lg:px-20">
      <h1 id="title" className="w-full text-7xl font-semibold lg:py-4 sm:py-6">
        Augusta Maria
      </h1>

      <div className='flex flex-col lg:flex-row gap-20'>
      <div className="bg-black w-full flex flex-col items-center py-16 text-white gap-8 text-sm lg:text-lg rounded-lg lg:max-w-lg px-4 shadow-sm shadow-slate-700">
        <img src={profile} alt="Foto de Augusta Maria" id='profile' className='w-40 rounded-full shadow-sm shadow-slate-600' />

        <div className='flex flex-row gap-3'>
        <FaLinkedinIn id='linkedin' className='social rounded-md text-5xl p-2 text-linkedin shadow-slate-600 shadow-sm' />
        <BsInstagram id='instagram' className='social bg-likeBlack rounded-md text-5xl p-2 text-instagram shadow-slate-600 shadow-sm' />
        <FaFacebookF id='facebook' className='social bg-likeBlack rounded-md text-5xl p-2 text-facebook shadow-slate-600 shadow-sm' />
      </div>

        <div className='bg-likeBlack px-6 grid grid-cols-1 gap-2 divide-y divide-slate-700 rounded-xl text-xs sm:text-xl'>
          <div className='flex flex-row items-center gap-4 py-2'>
            <BsTelephoneFill className='text-phone text-4xl sm:text-5xl bg-black p-3 rounded-md hover:text-white transition-all' />
            <span className='flex flex-col text-start'>
              <p className='text-slate'>Telefone</p>
              <p className='font-semibold'>+351 933 250 133/+44 74 32 79 9034</p>
            </span>
          </div>

          <div className='flex flex-row items-center gap-4 py-2'>
            <MdEmail className='text-email text-4xl sm:text5xl bg-black p-3 rounded-md hover:text-white transition-all' />
            <span className='flex flex-col text-start'>
              <p className='text-slate'>Email</p>
              <p className='font-semibold'>domingosaugustamaria@gmail.com</p>
            </span>
          </div>

          <div className='flex flex-row items-center gap-4 py-2'>
            <FaLocationArrow className='text-location text-4xl sm:text-5xl bg-black p-3 rounded-md hover:text-white transition-all' />
            <span className='flex flex-col text-start'>
              <p className='text-slate'>Localização</p>
              <p className='font-semibold'>Lisboa, Portugal</p>
            </span>
          </div>
        </div>

      </div>

      <div className="bg-black w-full flex flex-col text-start py-16 text-slate text-base sm:text-xl rounded-lg px-6 lg:px-16 gap-20 shadow-sm shadow-slate-700">
        <div className='flex flex-col gap-8'>
        <h1 className='text-white font-semibold text-4xl lg:text-5xl'>Sobre mim</h1>

        <span className='flex flex-col gap-4'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium beatae provident adipisci, aut labore debitis tempora ut eveniet laboriosam eius consectetur sit
             consequuntur vel fuga similique autem ex, voluptate corporis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam, accusamus fuga nisi, nam delectus voluptatum earum ex vitae nesciunt quo culpa, cupiditate 
            laborum deleniti praesentium ipsum. Sequi, illo hic?
          </p>
        </span>
        </div>

        <div className='flex flex-col gap-8 text-white'>
        <h1 className='font-semibold text-4xl lg:text-5xl'>Especializações</h1>

        <div className='grid grid-cols-2 gap-3'>
          <span className='border-4 border-likeBlack text-center py-3 sm:py-12 hover:bg-likeBlack transition-all'><p className='sm:text-xl'>Neurociência</p></span>
          <span className='border-4 border-likeBlack text-center py-3 sm:py-12 hover:bg-likeBlack transition-all'><p className='sm:text-xl'>Neurobiologia</p></span>
          <span className='border-4 border-likeBlack text-center py-3 sm:py-12 hover:bg-likeBlack transition-all'><p className='sm:text-xl'>Massoterapia</p></span>
          <span className='border-4 border-likeBlack text-center py-3 sm:py-12 hover:bg-likeBlack transition-all'><p className='sm:text-xl'>Meditadora</p></span>
        </div>
        </div>

      </div>
      </div>
    </main>
  );
}

export default App;
