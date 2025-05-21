'use client'

import Image from 'next/image'
import Nav from './ui/nav'
import MediaNav from './ui/media-nav'
import { sacramento } from './ui/fonts'
import Link from 'next/link'


export default function Page () {
  return (
    <main className="relative lg:bg-[url('/bg2.png')] bg-contain bg-no-repeat bg-right flex h-[110vh] justify-center lg:justify-start">
      <div className="absolute w-full h-[10%]">
        <Nav />
      </div>
      <div className="flex flex-col absolute mt-25 lg:flex-row lg:mt-[10%] lg:ml-[3%]">
        <div className="w-auto flex flex-col items-center">
          <Image
            src="/zlote-logo.png"
            width={550}
            height={550}
            alt="logo"
          />
          <MediaNav />
        </div>
        <div className="flex flex-col items-center justify-center text-base mt-[15%] lg:mt-0 lg:text-xl gap-2">
          <p className={`${sacramento.className} text-7xl`}>Z miłością</p>
          <p className={`${sacramento.className} text-7xl mb-[7%]`}>do kwiatów</p>
          <p className="text-xl lg:text-3xl italic">Tworzymy profesjonalne dekoracje</p>
          <p className="text-xl lg:text-3xl italic">od 2014 roku</p>
          <p className="text-white">|</p>
          <div className="flex flex-col items-center gap-3">
            <p className="text-white">dekoracje ślubne,</p>
            <p className="text-white">dekoracje kościołów i sal weselnych,</p>
            <p className="text-white">śluby w plenerze,</p>
            <p className="text-white">dekoracje okolicznościowe,</p>
            <p className="text-white">kompozycje kwiatowe,</p>
            <p className="text-white">bukiety i boxy kwiatowe,</p>
          </div>
          <p className="text-white">|</p>
          <Link key="galeria" href="/galeria" className="mask-l-from-90% border-b-1 border-r-1 rounded-sm shadow-lg/30 shadow-yellow-200  px-2 hover:text-white text-2xl lg:text-4xl italic mb-[10%] lg:mb-0">Zobacz naszą galerię</Link>
        </div>
      </div>
    </main>
  )
};