'use client'

import Nav from '@/app/ui/nav'
import MediaNav from '@/app/ui/media-nav'

export default function Page () {
	return (
		<main className="bg-[url('/bg1.png')] bg-contain bg-no-repeat bg-right flex h-[110vh]">
			<div className="absolute">
        		<Nav />
      		</div>
      		<div className="w-[900px] h-[450px] mt-40 ml-35 bg-white">
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
				<div className="text-2xl ml-5 mt-10 flex">
					<div className="gap-10">
						<p>Pracownia florystyczna &quot;Kamelia&quot;</p>
						<p>Aneta Zelent-Kata</p>
						<p>22-100 Chełm, ul. Szymanowskiego 7</p>
					</div>
					<div className="ml-25">
						<p>Zadzwoń i umów się na spotkanie</p>
						<p className="text-3xl text-white">+48 509 863 035</p>
					</div>
				</div>
				<div className="mt-10">
					<MediaNav />
				</div>
			</div>
		</main>
	)
}