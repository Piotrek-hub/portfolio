import Link from 'next/link';
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default function Projects() {
	const typedRef = useRef(null);

	useEffect(() => {
		const options = {
			strings: ['--My Projects--'],
			typeSpeed: 40,
			showCursor: false,
		};

		const typed = new Typed(typedRef.current || '', options);
		return () => {
			typed.destroy();
		};
	}, []);
	return (
		<div className="text-fg4  w-[1280px] pt-[150px]" id="projects">
			<span
				className="font-bold text-yellow h-[24px] w-full block "
				ref={typedRef}
			></span>

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
						Used technologies:{' '}
						<span className="text-blue">Golang</span>,
						<span className="text-yellow"> TypeScript</span>
					</span>
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
						Used technologies:{' '}
						<span className="text-blue">Golang</span>,
						<span className="text-yellow"> TypeScript</span>
					</span>
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
						Used technologies:{' '}
						<span className="text-yellow"> JavaScript</span>
					</span>
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
						Used technologies:
						<span className="text-yellow"> TypeScritp</span>,
						<span className="text-gray"> Solidity</span>,
						<span className="text-blue"> Golang</span>
					</span>
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
						Used technologies:
						<span className="text-yellow"> JavaScript</span>,
						<span className="text-blue"> Golang</span>,
						<span className="text-gray"> Solidity</span>
					</span>
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
					<span className="">
						Used technologies:
						<span className="text-blue"> Liquid</span>
					</span>
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
					<span className="">
						Used technologies:
						<span className="text-yellow"> TypeScript</span>
					</span>
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
						Used technologies:
						<span className="text-yellow"> TypeScript</span>,
						<span className="text-gray"> Solidity</span>
					</span>
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
					<span className="">
						Used technologies:
						<span className="text-yellow"> TypeScript</span>,
					</span>
				</div>
			</div>
		</div>
	);
}
