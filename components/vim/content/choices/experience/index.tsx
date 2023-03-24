import Link from 'next/link';
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default function Experience() {
	const typedRef = useRef(null);

	useEffect(() => {
		const options = {
			strings: ['--My Experience--'],
			typeSpeed: 40,
			showCursor: false,
		};

		const typed = new Typed(typedRef.current || '', options);
		return () => {
			typed.destroy();
		};
	}, []);
	return (
		<div className="text-fg4 absolute top-[144px]  left-1/2 transform -translate-x-1/2 w-[500px] mobile:w-[100%] mobile:px-[50px] mobile:top-[240px] mobile:pb-[200px] ">
			<p
				className="font-bold text-yellow h-[24px] w-full block "
				ref={typedRef}
			></p>
			<br />
			<div>
				<p className="font-bold text-fg0">codixe.co</p>
				<p className="">08.2022 - now</p>
				<p className="">Developing ecommerce websites</p>
				<p>
					Technologies: <span className="text-green">Next.js</span>,
					<span className="text-yellow"> TypeScript</span>
					<span className="text-blue"> Liquid</span>
				</p>
				<div className="h-[1px] w-full bg-gray mt-[24px]"></div>
			</div>
			<div>
				<br />
				<p className="font-bold text-fg0">kapkap.eu</p>
				<p className="">11.2022 - now</p>
				<p>Learning backend development</p>
				<p>
					Technologies: <span className="text-blue"> Golang</span>
				</p>
				<div className="h-[1px] w-full bg-gray mt-[24px]"></div>
			</div>

			<br />
			<br />
			<p>
				Click{' '}
				<Link
					className="underline text-orange cursor-pointer"
					href={'/contact'}
				>
					here
				</Link>{' '}
				to see how we can get in touch!
			</p>
		</div>
	);
}
