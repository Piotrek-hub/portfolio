import Link from 'next/link';
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default function AboutMe() {
	const typedRef = useRef(null);

	useEffect(() => {
		const options = {
			strings: ['--Something about me--'],
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
				className="font-bold text-yellow h-[24px] w-full block whitespace-nowrap"
				ref={typedRef}
			></span>
			<br />
			<br />
			<span className="">
				My name is Piotr Gałka, I live in Poland &#40;Katowice
				City&#41;. I am 18 years old and I attend technicial school. I
				am <span className="font-bold">programming since 2020.</span> My
				goal is to develop{' '}
				<span className="font-bold">server-side apps.</span> My
				favourite programming language is Golang.
			</span>
			<br />
			<br />
			<span className="text-fg1">
				You can download my CV{' '}
				<span className="underline text-green cursor-pointer">
					here
				</span>
				.
			</span>
			<br />
			<br />
			<span>
				Click{' '}
				<Link
					className="underline text-orange cursor-pointer"
					href={'/technologies'}
				>
					here
				</Link>{' '}
				to see what technologies I use!
			</span>
		</div>
	);
}
