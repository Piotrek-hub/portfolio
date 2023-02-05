import Link from 'next/link';

export default function Projects() {
	return (
		<div className="text-fg4 absolute top-[144px]  left-1/2 transform -translate-x-1/2 w-[1280px] ">
			<span className="font-bold text-yellow">--My Projects--</span>

			<div className="w-full h-full grid grid-cols-3 mt-[48px] gap-[24px] ">
				<div>
					-&nbsp;
					<Link href="https://github.com/Piotrek-hub/qr-backend">
						<span className="font-bold underline hover:decoration-2 text-fg1">
							QR-login app
						</span>
					</Link>
					<br />
					<br />
					<span className="">
						You can login to app by scanning qr code shown on web
						browser using mobile app.
					</span>
					<br />
					<span className="">
						Used technologies:{' '}
						<span className="text-blue">Golang</span>,
						<span className="text-yellow"> TypeScript</span>
					</span>
					<div className="h-[1px] w-full bg-gray mt-[24px]"></div>
				</div>

				<div>
					-&nbsp;
					<Link href="https://github.com/Piotrek-hub/book.io-frontend">
						<span className="font-bold underline hover:decoration-2 text-fg1">
							book.io
						</span>
					</Link>
					<br />
					<br />
					<span className="">
						This app allows users to add their books to track their
						reading progress
					</span>
					<br />
					<span className="">
						Used technologies:{' '}
						<span className="text-blue">Golang</span>,
						<span className="text-yellow"> TypeScript</span>
					</span>
					<div className="h-[1px] w-full bg-gray mt-[24px]"></div>
				</div>
				<div>
					-&nbsp;
					<Link href="https://github.com/Piotrek-hub/Space-tourism-multi-page-website">
						<span className="font-bold underline hover:decoration-2 text-fg1">
							Space-tourism-multi-page-website
						</span>
					</Link>
					<br />
					<br />
					<span className="">
						This is website about space tourism.
					</span>
					<br />
					<span className="">
						Used technologies:{' '}
						<span className="text-yellow"> JavaScript</span>
					</span>
					<div className="h-[1px] w-full bg-gray mt-[24px]"></div>
				</div>
				<div>
					-&nbsp;
					<Link href="https://github.com/Piotrek-hub/nft-house-backend">
						<span className="font-bold underline hover:decoration-2 text-fg1">
							NFT Houses
						</span>
					</Link>
					<br />
					<br />
					<span className="">
						On this website users can sell their houses as NFT's.
					</span>
					<br />
					<span className="">
						Used technologies:
						<span className="text-yellow"> TypeScritp</span>,
						<span className="text-gray"> Solidity</span>,
						<span className="text-blue"> Golang</span>
					</span>
					<div className="h-[1px] w-full bg-gray mt-[24px]"></div>
				</div>
				<div>
					-&nbsp;
					<Link href="https://github.com/Piotrek-hub/recycletoearn-website">
						<span className="font-bold underline hover:decoration-2 text-fg1">
							recycletoearn
						</span>
					</Link>
					<br />
					<br />
					<span className="">
						Using this website users can earn tokens by recycling.
						Project created for the competition
					</span>
					<br />
					<span className="">
						Used technologies:
						<span className="text-yellow"> JavaScript</span>,
						<span className="text-blue"> Golang</span>,
						<span className="text-gray"> Solidity</span>
					</span>
					<div className="h-[1px] w-full bg-gray mt-[24px]"></div>
				</div>
				<div>
					-&nbsp;
					<Link href="https://rollypolly.pl/">
						<span className="font-bold underline hover:decoration-2 text-fg1">
							Rolly Polly
						</span>
					</Link>
					<br />
					<br />
					<span className="">Landing page for web store.</span>
					<br />
					<span className="">
						Used technologies:
						<span className="text-yellow"> JavaScript</span>,
						<span className="text-blue"> Liquid</span>
					</span>
					<div className="h-[1px] w-full bg-gray mt-[24px]"></div>
				</div>
				<div>
					-&nbsp;
					<Link href="https://gamegoods-front.vercel.app/">
						<span className="font-bold underline hover:decoration-2 text-fg1">
							gamegoods
						</span>
					</Link>
					<br />
					<br />
					<span className="">Website for Funko Pop seller.</span>
					<br />
					<span className="">
						Used technologies:
						<span className="text-yellow"> TypeScript</span>
					</span>
					<div className="h-[1px] w-full bg-gray mt-[24px]"></div>
				</div>
				<div>
					-&nbsp;
					<Link href="https://github.com/Piotrek-hub?tab=repositories&q=hashup&type=&language=&sort=">
						<span className="font-bold underline hover:decoration-2 text-fg1">
							Decetralized Twitter
						</span>
					</Link>
					<br />
					<br />
					<span className="">
						Created decentralized social media platoform
					</span>
					<br />
					<span className="">
						Used technologies:
						<span className="text-yellow"> TypeScript</span>,
						<span className="text-gray"> Solidity</span>
					</span>
					<div className="h-[1px] w-full bg-gray mt-[24px]"></div>
				</div>
				<div>
					-&nbsp;
					<Link href="/">
						<span className="font-bold underline hover:decoration-2 text-fg1">
							chainhouse.it
						</span>
					</Link>
					<br />
					<br />
					<span className="">Landing page for client</span>
					<br />
					<span className="">
						Used technologies:
						<span className="text-yellow"> TypeScript</span>,
					</span>
					<div className="h-[1px] w-full bg-gray mt-[24px]"></div>
				</div>
			</div>
		</div>
	);
}
