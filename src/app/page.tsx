'use client'

import Image from 'next/image'
import Nav from './ui/nav'
import MediaNav from './ui/media-nav'


export default function Page () {
  return (
    <main className="relative md:bg-[url('/bg2.png')] bg-contain bg-no-repeat bg-right flex h-[110vh]">
      <div className="absolute w-full md:w-auto">
        <Nav />
      </div>
      <div className="w-full h-full flex flex-col items-center mt-[25%] md:mt-[7%] md: md:mr-150">
        <Image
          src="/zlote-logo.png"
          width={700}
          height={700}
          alt="logo"
        />
        <MediaNav />
      </div>
    </main>
  )
};