'use client'

import Image from 'next/image'
import Nav from './ui/nav'
import MediaNav from './ui/media-nav'
import { sacramento } from './ui/fonts'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { motion } from "framer-motion";
import { useEffect, useState } from 'react'

export default function Page () {
  const [showArrow, setShowArrow] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="flex flex-col">

      {/* Front */}
      <div className="flex flex-col justify-center lg:h-[95vh] sticky top-0 h-[85vh]">
        {/* Tło */}
        <Image
          src='/2.jpg'
          alt='bg1'
          fill
          className="h-[85vh] absolute brightness-80 object-cover object-bottom lg:rounded-b-4xl rounded-b-2xl mask-x-from-95% mask-x-to-105%"
        />

        {/* Menu */}
        <div className="w-full z-50">
          <Nav />
        </div>

        {/* Logo */}
        <div className="w-full h-full flex justify-center items-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="flex lg:w-[60vh] lg:h-[60vh] justify-center items-center w-[35vh] h-[35vh]">
              <Image
                src="/zlote-logo.png"
                width={320}
                height={320}
                alt="logo"
                className="drop-shadow-md lg:w-auto w-50"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div
        id="home"
        className="p-10 lg:px-150 min-h-screen flex items-center justify-center bg-gradient-to-b from-stone-950 to-stone-900 px-4 sticky top-0 z-10"
      >
        {/* Strzałka tylko gdy showArrow === true */}
        {showArrow && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center space-y-6"
        >
          <p className="lg:text-5xl p-2 underline decoration-white decoration-2 underline-offset-3 text-4xl">
            Dekorujemy od 2014 roku
          </p>

          {/* Guziki */}
          <div className="lg:p-15 p-8">
            <button
              onClick={() => {
                const el = document.getElementById("oferta");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative inline-flex items-center justify-center px-6 py-3 lg:mr-2 lg:mb-0 mb-1 overflow-hidden text-lg font-medium text-white transition-all duration-300 ease-in-out rounded-full bg-gradient-to-r from-yellow-400/50 via-yellow-500/50 to-yellow-600/50 shadow-lg hover:from-yellow-500 hover:to-yellow-700 hover:scale-105 hover:shadow-yellow-500/50 focus:outline-none"
            >
              <span className="z-10 relative group-hover:translate-y-[-2px] group-hover:brightness-110 transition-all duration-300 lg:text-medium text-sm">
                Zobacz naszą ofertę
              </span>
              <span className="absolute inset-0 w-full h-full transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-10 rounded-full"></span>
              <span className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-yellow-400/60 transition duration-300 ease-in-out"></span>
            </button>

            <Link href="/galeria">
              <button
                className="group relative inline-flex items-center justify-center px-6 py-3 lg:ml-2 lg:mt-0 mt-1 overflow-hidden text-lg font-medium text-white transition-all duration-300 ease-in-out rounded-full bg-gradient-to-r from-yellow-400/50 via-yellow-500/50 to-yellow-600/50 hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:scale-105 hover:shadow-yellow-500/40 shadow-lg focus:outline-none"
              >
                <span className="z-10 relative group-hover:translate-y-[-2px] group-hover:brightness-110 transition-all duration-300 lg:text-md text-sm">
                  Zobacz nasze prace
                </span>
                <span className="absolute inset-0 w-full h-full transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-10 rounded-full"></span>
                <span className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-yellow-400/60 transition duration-300 ease-in-out"></span>
              </button>
            </Link>
          </div>

          <p className="lg:text-4xl text-3xl text-balance">
            Zaprojektujemy dla ciebie dekorację na każdą okazję
          </p>

          <div>
            <p className="lg:text-3xl text-2xl p-4">Jesteśmy na</p>
            <MediaNav />
          </div>
        </motion.div>
      </div>

      {/* Strona ofertowa */}

      <div id="oferta" className="relative flex items-center justify-center bg-gradient-to-b from-stone-950 to-stone-900 px-4 sticky top-0 z-20">
      
      {/* Sekcja hero */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="z-10"
          >
            <Image
              src="/zlote-logo.png"
              alt="Logo firmy"
              width={250}
              height={250}
              className="mx-auto drop-shadow-lg lg:w-auto w-53"
            />
            <p className={`${sacramento.className} lg:text-6xl text-4xl mt-2`}>Z miłością</p>
            <p className={`${sacramento.className} lg:text-6xl text-4xl`}>do kwiatów</p>
          </motion.div>
          <div className="absolute inset-0 -z-10" />
        </section>

        {/* Oferta */}
        <section className="py-16 lg:px-6
          px-0">
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:text-3xl text-2xl font-semibold text-center mb-10"
            >
              Nasza oferta
            </motion.h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:gap-6 gap-3 lg:text-lg text-sm">
              {[
                "Dekoracje ślubne",
                "Dekoracje kościołów i sal weselnych",
                "Śluby w plenerze",
                "Dekoracje okolicznościowe",
                "Kompozycje kwiatowe",
                "Bukiety i boxy kwiatowe",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-yellow-100/40 text-white lg:p-6 rounded-xl inset-shadow-sm inset-shadow-black transition-shadow
                  p-2"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
            
          {/* Guziki */}
            <div className="flex flex-col items-center lg:mt-16 mt-10">
              <button
                onClick={() => {
                  const el = document.getElementById("kontakt");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group relative inline-flex items-center justify-center lg:px-6 px-5 py-3 mt-4 overflow-hidden lg:text-xl text-sm rounded-full bg-gradient-to-r from-yellow-400/50 via-yellow-500/50 to-yellow-600/50 text-white font-medium transition-all duration-300 ease-in-out hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:scale-105 hover:shadow-yellow-500/40 shadow-lg"
              >
                <span className="z-10 relative group-hover:translate-y-[-2px] group-hover:brightness-110 transition-all duration-300">
                  Skontaktuj się z nami
                </span>
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></span>
                <span className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-yellow-400/60 transition duration-300 ease-in-out"></span>
              </button>


              <Link href="/galeria">
                <button
                  className="group relative inline-flex items-center justify-center px-6 py-3 mt-4 lg:ml-2 overflow-hidden lg:text-xl text-sm text-white transition-all duration-300 ease-in-out rounded-full bg-gradient-to-r from-yellow-400/50 via-yellow-500/50 to-yellow-600/50 hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:scale-105 hover:shadow-yellow-500/40 shadow-lg focus:outline-none"
                >
                  <span className="z-10 relative group-hover:translate-y-[-2px] group-hover:brightness-110 transition-all duration-300">
                    Zobacz nasze prace
                  </span>
                  <span className="absolute inset-0 w-full h-full transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-10 rounded-full"></span>
                  <span className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-yellow-400/60 transition duration-300 ease-in-out"></span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Strona kontaktowa */}
      <div id="kontakt" className="min-h-screen bg-gradient-to-b from-stone-950 to-stone-900 flex flex-col items-center justify-center px-6 py-12 md:px-24 z-30">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl lg:text-5xl font-bold text-center mb-8"
        >
          Skontaktuj się z nami
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base lg:text-xl text-center max-w-2xl mb-12"
        >
          Masz pytania, chcesz zarezerwować dekorację lub poznać szczegóły naszej oferty?
          Skontaktuj się z nami — chętnie pomożemy!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
          {/* Dane kontaktowe */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-xl lg:text-2xl font-semibold text-balance">Pracownia florystyczna &quot;Kamelia&quot; - Aneta Zelent-Kata</p>
            <p className="text-sm lg:text-base"><strong>Adres:</strong> ul. Szymanowskiego 7, 22-100 Chełm</p>
            <p className="text-sm lg:text-base"><strong>Telefon:</strong> <a href="tel:+48509863035" className="text-sm lg:text-base text-blue-300 hover:underline">+48 509 863 035</a></p>
            <p className="text-sm lg:text-base mt-6 text-gray-300">
              Skontaktuj się z nami, a wspólnie stworzymy wyjątkową dekorację na Twoją okazję!
            </p>
          </motion.div>

          {/* Mapa Google */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.1253490375325!2d23.461339677198985!3d51.12459587172882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47239a54dc3d58ab%3A0x3fb3eb7801281be6!2sPracownia%20florystyczna%20Kamelia%20Aneta%20Zelent!5e0!3m2!1spl!2spl!4v1747149572750!5m2!1spl!2spl"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </main>
  )
};