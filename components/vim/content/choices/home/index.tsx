import Link from 'next/link';

export default function Home() {
	return (
		<div className="text-fg4 absolute top-[144px] left-1/2 transform -translate-x-1/2 w-[500px]">
			<span className="font-bold text-yellow">--Home--</span>
			<br />
			<br />
			<span className="font-bold text-fg1">
				Hello, welcome to my portfolio!
			</span>
			<br />
			<br />
			As you may have noticed, this portfolio is inspired by{' '}
			<span className="text-aqua font-bold">Vim</span> text editor
			<br />
			<br />
			<span>
				I will give you{' '}
				<span className="font-bold">useful instructions</span> on how to
				navigate on this site. Have fun!
			</span>
			<br />
			<br />
			<br />
			<span className="text-fg1">To open subpage simply type:</span>
			<br />
			<span className="font-bold text-blue">:open</span>{' '}
			<span>&lt;subpage&gt;</span>
			<br />
			<br />
			<span>You can choose from:</span>
			<br />
			&emsp;<span className="">- home</span> &#40;you&apos;re already
			here&#41;
			<br />
			&emsp;<span className="font-bold">- about </span>
			<br />
			&emsp;<span className="font-bold">- technologies </span>
			<br />
			&emsp;<span className="font-bold">- contact </span>
			<br />
			&emsp;<span className="font-bold">- projects </span>
			<br />
			&emsp;<span className="font-bold">- experience </span>
			<br />
			<br />
			<br />
			<span className="">
				If you are not comfortable with typing you can use
				<span className="font-bold"> menu in the right corner</span> or
				you can take a trip by moving to the{' '}
				<Link
					className="underline text-orange cursor-pointer"
					href={'/about'}
				>
					next subpage
				</Link>
				!
			</span>
		</div>
	);
}
