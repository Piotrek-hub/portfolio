export default function AboutMe() {
	return (
		<div className="text-fg4 absolute top-[192px] left-1/2 transform -translate-x-1/2 w-[500px]">
			<span className="font-bold text-yellow">
				--Something about me--
			</span>
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
			<span>
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
				<a
					className="underline text-orange cursor-pointer"
					href={'/contact'}
				>
					here
				</a>{' '}
				to go to subpage where you can find out how we can contact!
			</span>
		</div>
	);
}
