import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const router = useRouter();
	const [currentSection, setCurrentSection] = useState<string>('home');

	return (
		<div
			className={`z-[10] fixed top-[55px] left-1/2 transform -translate-x-1/2 flex items-center gap-[24px] bg-bg0 px-[24px] py-[24px] border-[0.5px] border-bg2 border-solid rounded-[2px]`}
		>
			<Link
				href={'#home'}
				onClick={() => setCurrentSection('home')}
				className={` hover:underline cursor-pointer ${
					currentSection == 'home' ? 'font-bold text-fg1' : 'text-fg4'
				}`}
			>
				Home
			</Link>
			<Link
				href={'#about'}
				onClick={() => setCurrentSection('about')}
				className={` hover:underline cursor-pointer ${
					currentSection == 'about'
						? 'font-bold text-fg1'
						: 'text-fg4'
				}`}
			>
				About
			</Link>

			<Link
				href={'#technologies'}
				onClick={() => setCurrentSection('technologies')}
				className={` hover:underline cursor-pointer ${
					currentSection == 'technologies'
						? 'font-bold text-fg1'
						: 'text-fg4'
				}`}
			>
				Technologies
			</Link>
			<Link
				href={'#projects'}
				onClick={() => setCurrentSection('projects')}
				className={` hover:underline cursor-pointer ${
					currentSection == 'projects'
						? 'font-bold text-fg1'
						: 'text-fg4'
				}`}
			>
				Projects
			</Link>
			<Link
				href={'#experience'}
				onClick={() => setCurrentSection('experience')}
				className={` hover:underline cursor-pointer ${
					currentSection == 'experience'
						? 'font-bold text-fg1'
						: 'text-fg4'
				}`}
			>
				Experience
			</Link>
			<Link
				href={'#contact'}
				onClick={() => setCurrentSection('contact')}
				className={` hover:underline cursor-pointer ${
					currentSection == 'contact'
						? 'font-bold text-fg1'
						: 'text-fg4'
				}`}
			>
				Contact
			</Link>
		</div>
	);
}

// return (
// 	<div className="h-[24px] absolute top-0 left-0 flex gap-0 items-center justify-start w-min">
// 		<Link
// 			href={'/'}
// 			className={` hover:underline cursor-pointer -left-[12px] relative z-[9] ${
// 				router.route == '/' ? 'font-bold text-fg1' : 'text-fg4'
// 			}`}
// 		>
// 			<div className="flex">
// 				<div
// 					className={`${
// 						router.route == '/' ? 'bg-fg4' : 'bg-bg3'
// 					} px-[15px]`}
// 				>
// 					<span className="text-bg0 font-bold whitespace-nowrap  cursor-pointer">
// 						Home
// 					</span>
// 				</div>
// 				<div
// 					className={`${
// 						router.route == '/'
// 							? 'border-l-fg4'
// 							: 'border-l-bg3'
// 					} w-0 h-0 border-b-[12px] border-b-[transparent] border-t-[12px] border-t-[transparent] border-l-[12px] `}
// 				></div>
// 			</div>
// 		</Link>
// 		<Link
// 			href={'/'}
// 			className={` hover:underline cursor-pointer relative -left-[24px] ${
// 				router.route == '/' ? 'font-bold text-fg1' : 'text-fg4'
// 			}`}
// 		>
// 			<div className="flex">
// 				<div
// 					className={`${
// 						router.route == '/home' ? 'bg-fg4' : 'bg-bg3'
// 					} px-[15px]`}
// 				>
// 					<span className="text-bg0 font-bold whitespace-nowrap  cursor-pointer">
// 						Home
// 					</span>
// 				</div>
// 				<div
// 					className={`${
// 						router.route == '/home'
// 							? 'border-l-fg4'
// 							: 'border-l-bg3'
// 					} w-0 h-0 border-b-[12px] border-b-[transparent] border-t-[12px] border-t-[transparent] border-l-[12px] `}
// 				></div>
// 			</div>
// 		</Link>
// 	</div>
// );
