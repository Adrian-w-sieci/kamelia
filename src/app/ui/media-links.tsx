import Link from 'next/link';
import Image from 'next/image';

const media = [
	{name: 'Kamelia Facebook', href: 'https://www.facebook.com/p/Kamelia-pracownia-florystyczna-100057399822503/', icon: '/facebook_logo.png'},
	{name: 'Kamelia Instagram', href: 'https://www.instagram.com/kamelia__florist/', icon: '/instagram_logo.png'},
];

export default function MediaLinks() {
	return (
		<div className="flex gap-4 items-center justify-center">
			{media.map((link) => {
				return (
					<div className="flex" key={link.name}>
						<Link
							key={link.name}
							href={link.href}
							className="px-2 flex h-[48px] grow items-center justify-center gap-2 p-3  md:flex-none md:justify-start md:p-2 md: px-3"
						>
							<Image src={link.icon} alt="logo" width={40} height={40} className="inline-block object-contain" />
						</Link>
					</div>
				)
			})}
		</div>
	);
};