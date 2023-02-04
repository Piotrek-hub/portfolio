import Link from 'next/link';

export default function Contact() {
	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
	};

	return (
		<div className="text-fg4 absolute top-[192px] left-1/2 transform -translate-x-1/2 w-[500px] ">
			<span className="font-bold text-yellow">--Get in touch--</span>
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
				If you want to know what technologies I use go to{' '}
				<Link
					className="underline text-orange cursor-pointer"
					href={'/technologies'}
				>
					next subpage
				</Link>
			</span>
		</div>
	);
}
