import Link from 'next/link';

export default function Experience() {
	return (
		<div className="text-fg4 absolute top-[144px]  left-1/2 transform -translate-x-1/2 w-[500px] ">
			<p className="font-bold text-yellow">--My Experience--</p>
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
