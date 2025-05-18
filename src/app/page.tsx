'use client'

import Image from 'next/image'
import Nav from './ui/nav'
import MediaNav from './ui/media-nav'


export default function Page () {
  return (
    <main className="relative bg-[url('/bg2.png')] bg-contain bg-no-repeat bg-right flex h-[110vh]">
      <div className="absolute">
        <Nav />
      </div>
      <div className="w-full flex flex-col items-center justify-center mr-150 mb-20">
        <Image
          src="/zlote-logo.png"
          width={700}
          height={700}
          className="hidden md:block"
          alt="logo"
        />
        <MediaNav />
      </div>
    </main>
  )
};