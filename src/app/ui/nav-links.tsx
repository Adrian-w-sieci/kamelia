import Link from 'next/link';

const links = [
	{name: 'Strona główna', href: '/' },
	{name: 'Zobacz galerię', href: '/galeria' },
	{name: 'Kontakt', href: '/kontakt' },
];


export default function NavLinks() {
	return (
		<div className="flex gap-15 mt-5 ml-5">
			{links.map((link) => {
				return (
						<Link
							key={link.name}
							href={link.href}
							className="flex h-[48px] grow items-center justify-center gap-2 p-3 text-2xl font-normal hover:text-white md:flex-none md:justify-start md:p-2 md: px-3"
						>
							<p className="hidden md:block">{link.name}</p>
						</Link>
				)
			})}
		</div>
	);
};
