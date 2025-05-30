import Link from 'next/link';
import Image from 'next/image';

const media = [
	{name: 'Kamelia Facebook', href: 'https://www.facebook.com/p/Kamelia-pracownia-florystyczna-100057399822503/', icon: '/facebook_logo.png'},
	{name: 'Kamelia Instagram', href: 'https://www.instagram.com/kamelia__florist/', icon: '/instagram_logo.png'},
];

export default function MediaLinks() {
	return (
		<div className="flex gap-4 items-center">
			<p className="text-lg lg:text-2xl">Zobacz nas na:</p>
			{media.map((link) => {
				return (
					<div className="flex" key={link.name}>
						<Link
							key={link.name}
							href={link.href}
							className="border-b-1 border-r-1 rounded-sm shadow-lg/30 shadow-yellow-200  px-2 flex h-[48px] grow items-center justify-center gap-2 p-3 text-2xl hover:text-white md:flex-none md:justify-start md:p-2 md: px-3"
						>
							<Image src={link.icon} alt="logo" width={30} height={30} className="inline-block object-contain" />
						</Link>
					</div>
				)
			})}
		</div>
	);
};