import Link from 'next/link';

const links = [
	{name: 'Strona główna', href: '/' },
	{name: 'Galeria', href: '/galeria' },
	{name: 'Kontakt', href: '/kontakt' },
];


export default function NavLinks() {
	return (
		<div className="flex lg:gap-40 ml-[5%] mt-[1%] lg:ml-5">
			{links.map((link) => {
				return (
						<Link
							key={link.name}
							href={link.href}
							className="flex h-[48px] grow items-center gap-2 text-lg lg:text-2xl font-normal hover:text-white lg:flex-none lg:justify-start"
						>
							<p className="">{link.name}</p>
						</Link>
				)
			})}
		</div>
	);
};
