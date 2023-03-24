import Link from 'next/link';
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default function Contact() {
	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
	};
	const typedRef = useRef(null);

	useEffect(() => {
		const options = {
			strings: ['--Get in touch--'],
			typeSpeed: 40,
			showCursor: false,
		};

		const typed = new Typed(typedRef.current || '', options);
		return () => {
			typed.destroy();
		};
	}, []);
	return (
		<div className="text-fg4 absolute top-[144px]  left-1/2 transform -translate-x-1/2 w-[500px] mobile:w-[100%] mobile:px-[50px] mobile:top-[240px] mobile:pb-[200px]">
			<span
				className="font-bold text-yellow h-[24px] w-full block "
				ref={typedRef}
			></span>
			<br />
			<br />
			<span>You can call me on my phone:</span>
			<br />
			&ensp;{' '}
			<span
				className="font-bold cursor-pointer"
				onClick={() => copyToClipboard('+ 48 793821047')}
			>
				+ 48 793821047
			</span>
			<br />
			<span>You can email me here:</span>
			<br />
			&ensp;{' '}
			<span
				className="font-bold cursor-pointer"
				onClick={() => copyToClipboard('piotrek.galka@protonmail.com')}
			>
				piotrek.galka@protonmail.com
			</span>
			<br />
			<span>Find me on Github:</span>
			<br />
			&ensp;{' '}
			<Link
				className="font-bold cursor-pointer underline hover:decoration-2"
				target="_blank"
				href={'https://github.com/Piotrek-hub'}
			>
				github.com/Piotrek-hub
			</Link>
			<br />
			<span>Get in touch on linkedin:</span>
			<br />
			&ensp;{' '}
			<Link
				className="font-bold cursor-pointer underline hover:decoration-2"
				target="_blank"
				href={'https://www.linkedin.com/in/piotrekgalka/'}
			>
				linkedin.com/in/piotrekgalka/
			</Link>
			<br />
			<br />
			<br />
			<span>
				Go back to{' '}
				<Link
					className="underline text-orange cursor-pointer"
					href={'/'}
				>
					home
				</Link>
			</span>
		</div>
	);
}
