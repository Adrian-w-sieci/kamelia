import Link from 'next/link';

const links = [
	{name: 'Strona główna', href: '/' },
	{name: 'Galeria', href: '/galeria' },
	{name: 'Kontakt', href: '/kontakt' },
];


export default function NavLinks() {
	return (
		<div className="flex gap-[8%] lg:gap-20 ml-[5%] mt-[1%] lg:ml-5">
			{links.map((link) => {
				return (
						<Link
							key={link.name}
							href={link.href}
							className="mask-l-from-80% border-b-1 border-r-1 rounded-sm shadow-lg/30 shadow-yellow-200 flex px-2 gap-2 text-lg lg:text-2xl font-normal hover:text-white lg:flex-none lg:justify-start"
						>
							<p className="">{link.name}</p>
						</Link>
				)
			})}
		</div>
	);
};
