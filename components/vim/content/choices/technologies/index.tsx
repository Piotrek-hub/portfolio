import Link from 'next/link';
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default function Technologies() {
	const typedRef = useRef(null);

	useEffect(() => {
		const options = {
			strings: ['--Technologies &amp; Skills--'],
			typeSpeed: 40,
			showCursor: false,
		};

		const typed = new Typed(typedRef.current || '', options);
		return () => {
			typed.destroy();
		};
	}, []);
	return (
		<div className="text-fg4  w-[500px] pt-[144px]" id="technologies">
			<span
				className="font-bold text-yellow h-[24px] w-full block "
				ref={typedRef}
			></span>
			<br />
			<br />
			<span className="font-bold text-fg1">Technologies I use:</span>
			<br />
			&ensp; <span>- JavaScript/TypeScript</span>
			<br />
			&ensp; <span>- Golang</span>
			<br />
			&ensp; <span>- Git</span>
			<br />
			&ensp; <span>- Docker</span>
			<br />
			<br />
			<span className="font-bold text-fg1">
				Frameworks/Libraries I use:
			</span>
			<br />
			&ensp; <span>- go-gin</span>
			<br />
			&ensp; <span>- gorilla toolkit</span>
			<br />
			&ensp; <span>- React/Next.js</span>
			<br />
			&ensp; <span>- Tailwind/SASS/SCSS</span>
			<br />
			<br />
			<span className="font-bold text-fg1">Skills:</span>
			<br />
			&ensp;{' '}
			<span>
				- Creativity, logical thinking, ability to work in a group,
				openness, flexibility
			</span>
			<br />
			&ensp; <span>- Polish &#40;native&#41;</span>
			<br />
			&ensp; <span>- English &#40;communicative&#41;</span>
			<br />
			<br />
			<br />
			<span>
				Jump{' '}
				<Link
					className="underline text-orange cursor-pointer"
					href={'/projects'}
				>
					here
				</Link>{' '}
				to see projects in which I used these technologies
			</span>
		</div>
	);
}
