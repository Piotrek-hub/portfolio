import Link from 'next/link';

export default function Technologies() {
	return (
		<div className="text-fg4 absolute top-[192px] left-1/2 transform -translate-x-1/2 w-[500px] ">
			<span className="font-bold text-yellow">
				--Technologies & Skills--
			</span>
			<br />
			<br />
			<span className="font-bold">Technologies I use:</span>
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
			<span className="font-bold">Frameworks/Libraries I use:</span>
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
			<span className="font-bold">Skills:</span>
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
