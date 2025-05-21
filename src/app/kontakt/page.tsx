'use client'

import Nav from '@/app/ui/nav'
import MediaNav from '@/app/ui/media-nav'

export default function Page () {
	return (
		<main className="lg:bg-[url('/bg1.png')] bg-contain bg-no-repeat bg-right flex h-[110vh]">
			<div className="absolute w-full h-[10%]">
        		<Nav />
      		</div>
      		<div className="w-full max-w-[80%] lg:max-w-[50%] mx-auto max-h-[40%] mt-30 lg:mt-40 lg:ml-[5%]">
      			<iframe
			        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.1253490375325!2d23.461339677198985!3d51.12459587172882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47239a54dc3d58ab%3A0x3fb3eb7801281be6!2sPracownia%20florystyczna%20Kamelia%20Aneta%20Zelent!5e0!3m2!1spl!2spl!4v1747149572750!5m2!1spl!2spl"
			        width="800"
			        height="600"
			        style={{ border: 0 }}
			        allowFullScreen
			        loading="lazy"
			        referrerPolicy="no-referrer-when-downgrade"
			        className="w-full h-full"
			    ></iframe>
				<div className="flex flex-col text-lg gap-5 ml-[2%] mt-[5%] lg:text-2xl lg:flex-row lg:gap-20">
					<div className="gap-10">
						<p>Pracownia florystyczna &quot;Kamelia&quot;</p>
						<p>Aneta Zelent-Kata</p>
						<p>22-100 Chełm, ul. Szymanowskiego 7</p>
					</div>
					<div className="">
						<p>Zadzwoń i umów się na spotkanie</p>
						<p className="text-lg lg:text-2xl text-white">+48 509 863 035</p>
					</div>
				</div>
				<div className="ml-[2%] mt-[5%]">
					<MediaNav />
				</div>
			</div>
		</main>
	)
}